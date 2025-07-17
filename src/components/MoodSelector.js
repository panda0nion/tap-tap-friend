export default function MoodSelector({ onSelect }) {
  return (
    <div className="mt-4 flex justify-center space-x-4">
      <button onClick={() => onSelect('😊')} className="bg-yellow-100 hover:bg-yellow-200 px-4 py-2 rounded-full text-2xl">😊</button>
      <button onClick={() => onSelect('😐')} className="bg-yellow-100 hover:bg-yellow-200 px-4 py-2 rounded-full text-2xl">😐</button>
      <button onClick={() => onSelect('😢')} className="bg-yellow-100 hover:bg-yellow-200 px-4 py-2 rounded-full text-2xl">😢</button>
    </div>
  )
}
