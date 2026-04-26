require('dotenv').config()
const express  = require('express')
const cors     = require('cors')
const nodemailer = require('nodemailer')

const app  = express()
const PORT = process.env.PORT || 3001

// ── Middleware ──────────────────────────────────────────────
app.use(express.json())
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:4173',
    process.env.FRONTEND_URL || '*'
  ],
  methods: ['GET', 'POST'],
}))

// ── Nodemailer transporter (Gmail) ──────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,   // band4869@gmail.com
    pass: process.env.GMAIL_PASS,   // Google App Password (16 ตัว)
  },
})

// Verify connection on startup
transporter.verify((err, success) => {
  if (err) {
    console.error('❌ Mailer connection failed:', err.message)
  } else {
    console.log('✅ Mailer ready — connected to Gmail SMTP')
  }
})

// ── Routes ──────────────────────────────────────────────────

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio backend running 🚀' })
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  // Validate
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'กรุณากรอก name, email และ message' })
  }

  // Simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'รูปแบบ Email ไม่ถูกต้อง' })
  }

  try {
    // Mail to owner (band4869@gmail.com)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to:   process.env.GMAIL_USER,   // band4869@gmail.com
      replyTo: email,
      subject: `📬 [Portfolio] ${subject || 'ข้อความใหม่'} — จาก ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #7c3aed, #a855f7); padding: 32px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">📬 ข้อความใหม่จาก Portfolio</h1>
          </div>
          <div style="padding: 32px; background: #fff;">
            <table style="width:100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px; width: 100px;">ชื่อ</td>
                <td style="padding: 10px 0; font-weight: 600; color: #111;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td>
              </tr>
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">หัวข้อ</td>
                <td style="padding: 10px 0; color: #111;">${subject || '(ไม่ระบุ)'}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 20px; background: #f5f3ff; border-radius: 10px; border-left: 4px solid #7c3aed;">
              <p style="margin: 0; color: #333; line-height: 1.7; font-size: 15px;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #f9f9f9; text-align: center; color: #aaa; font-size: 12px;">
            ส่งผ่าน Portfolio Contact Form · ${new Date().toLocaleString('th-TH')}
          </div>
        </div>
      `,
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"วุฒิพงศ์ ปิ่นเสริมศักดิ์ (Banz)" <${process.env.GMAIL_USER}>`,
      to:   email,
      subject: `✅ ได้รับข้อความแล้วครับ — วุฒิพงศ์ ปิ่นเสริมศักดิ์`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #7c3aed, #a855f7); padding: 32px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 22px;">ขอบคุณที่ติดต่อมาครับ 🙏</h1>
          </div>
          <div style="padding: 32px; background: #fff;">
            <p style="color: #333; font-size: 15px; line-height: 1.8;">สวัสดีครับ คุณ <strong>${name}</strong>,</p>
            <p style="color: #555; font-size: 14px; line-height: 1.8;">
              ผมได้รับข้อความของคุณแล้วครับ และจะรีบตอบกลับโดยเร็วที่สุด
              โดยปกติผมจะตอบกลับภายใน 24 ชั่วโมง
            </p>
            <div style="margin: 24px 0; padding: 16px 20px; background: #f5f3ff; border-radius: 10px; border-left: 4px solid #7c3aed;">
              <p style="margin: 0; color: #7c3aed; font-size: 13px; font-weight: 600;">ข้อความที่คุณส่งมา:</p>
              <p style="margin: 8px 0 0; color: #444; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
            <p style="color: #555; font-size: 14px;">ขอบคุณที่สนใจผลงานของผมครับ 😊</p>
            <p style="color: #333; font-size: 14px; font-weight: 600; margin-bottom: 4px;">— วุฒิพงศ์ ปิ่นเสริมศักดิ์ (Banz)</p>
            <p style="color: #888; font-size: 12px; margin: 0;">Computer Engineering · IoT &amp; AI Developer</p>
          </div>
        </div>
      `,
    })

    console.log(`📧 Contact from ${name} <${email}> — sent successfully`)
    res.json({ success: true, message: 'ส่งข้อความสำเร็จ! จะตอบกลับโดยเร็วครับ 🙏' })

  } catch (err) {
    console.error('Email send error:', err)
    res.status(500).json({ success: false, error: 'ส่งอีเมลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง' })
  }
})

// ── Start ────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio backend running on http://localhost:${PORT}`)
  console.log(`📧 Sending to: ${process.env.GMAIL_USER || '(set GMAIL_USER in .env)'}`)
})
