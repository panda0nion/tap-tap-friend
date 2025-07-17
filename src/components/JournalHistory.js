export default function JournalHistory({ entries }) {
  return (
    <div className="mt-6 text-left max-w-md mx-auto">
      <h2 className="text-yellow-600 text-lg font-semibold mb-2">🕒 Recent Check-ins</h2>
      <ul className="space-y-1 text-sm text-gray-600">
        {entries.map((entry, index) => (
          <li key={index}>
            <span className="font-medium">{entry.mood}</span> at {entry.time} – {entry.message}
          </li>
        ))}
      </ul>
    </div>
  )
}
