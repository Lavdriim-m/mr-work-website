import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get('name') as string
    const company = formData.get('company') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const need = formData.get('need') as string
    const message = formData.get('message') as string
    const files = formData.getAll('files') as File[]

    const attachments = await Promise.all(
      files
        .filter((f) => f.size > 0)
        .map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        }))
    )

    const { error } = await resend.emails.send({
      from: 'MR Work AG <noreply@mr-work.ch>',
      to: ['info@mr-work.ch'],
      replyTo: email,
      subject: `Neue Anfrage von ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #050505;">Neue Kontaktanfrage</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #5e6875; width: 140px;">Name</td><td style="padding: 8px 0;"><strong>${name}</strong></td></tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #5e6875;">Firma</td><td style="padding: 8px 0;">${company}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #5e6875;">E-Mail</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #5e6875;">Telefon</td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #5e6875;">Anfrage</td><td style="padding: 8px 0;">${need}</td></tr>
            ${message ? `<tr><td style="padding: 8px 0; color: #5e6875; vertical-align: top;">Nachricht</td><td style="padding: 8px 0;">${message.replace(/\n/g, '<br>')}</td></tr>` : ''}
          </table>
          ${attachments.length > 0 ? `<p style="color: #5e6875; margin-top: 16px;">${attachments.length} Anhang/Anhänge beigefügt.</p>` : ''}
          <hr style="border: none; border-top: 1px solid #e8eef7; margin: 24px 0;">
          <p style="color: #5e6875; font-size: 12px;">Diese E-Mail wurde über das Kontaktformular auf mr-work.ch gesendet.</p>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Interner Fehler' }, { status: 500 })
  }
}
