import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' })
  }

  const { name, feedback } = req.body

  if (!feedback || feedback.trim() === '') {
    return res.status(400).json({ message: 'Feedback is required' })
  }

  const { error } = await supabase
    .from('feedback')
    .insert([{ name, feedback }])

  if (error) {
    return res.status(500).json({ message: 'Error saving feedback', error })
  }

  // Send email
  try {
    await resend.emails.send({
      from: 'jelly@tapfriend.ai',
      to: 'patrick@projectautism.ca', // <-- replace with yours
      subject: '💬 New Feedback for Jelly',
      html: `<p><strong>From:</strong> ${name || 'Anonymous'}</p>
             <p><strong>Feedback:</strong> ${feedback}</p>`
    })
  } catch (emailError) {
    console.error('Email send failed:', emailError)
  }

  res.status(200).json({ message: 'Feedback submitted successfully' })
}
