import { useState } from 'react'

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', feedback: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/submit-feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      setSubmitted(true)
    } else {
      const error = await res.json()
      console.error('Submission error:', error)
      alert('Oops! Something went wrong.')
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <main className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-yellow-800 mb-4">Help Make Jelly Better 🫧</h1>
      <p className="mb-6 text-gray-700">We’d love to hear your ideas, suggestions, or anything you’d like Jelly to do!</p>

      {submitted ? (
        <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded">
          💌 Thanks for your feedback! Jelly appreciates your thoughts.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">Your Name (optional)</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="feedback" className="block font-semibold text-gray-700 mb-1">Your Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Tell us what you love, or what you'd improve..."
            />
          </div>
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded">
            Submit Feedback
          </button>
        </form>
      )}
    </main>
  )
}
