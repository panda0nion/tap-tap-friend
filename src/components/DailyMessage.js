export default function DailyMessage({ mood }) {
  const messages = {
    "😊": "Yay! I'm so glad you’re feeling good today.",
    "😐": "Thanks for checking in. Let’s take today one moment at a time.",
    "😢": "It’s okay to have tough days. I’m here for you.",
  }

  if (!mood) return null

  return (
    <div className="mt-4 text-gray-800">
      {messages[mood]}
    </div>
  )
}
