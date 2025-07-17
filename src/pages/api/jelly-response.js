import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' })
  }

  const { feedback } = req.body

  if (!feedback || feedback.trim() === '') {
    return res.status(400).json({ message: 'Feedback is required for a response' })
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are Jelly, a kind, encouraging AI companion who responds warmly to user feedback. Keep your replies under 50 words. Use a friendly, curious tone.'
        },
        {
          role: 'user',
          content: `Feedback: ${feedback}`
        }
      ],
      model: 'gpt-3.5-turbo'
    })

    const reply = completion.choices[0]?.message?.content || "Thank you for sharing your thoughts!"

    res.status(200).json({ response: reply })
  } catch (error) {
    console.error('AI response error:', error)
    res.status(500).json({ message: 'Error generating Jelly response', error })
  }
}
