export default function ReminderCard({ time, title }) {
  return (
    <div className="bg-white border border-yellow-200 shadow-sm rounded-lg p-4 my-2">
      <p className="text-sm text-gray-500">{time}</p>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    </div>
  )
}
