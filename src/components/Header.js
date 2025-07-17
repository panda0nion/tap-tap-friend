import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-yellow-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-yellow-700 text-2xl font-bold">
          <Link href="/">💛 Tap Tap Friend</Link>
        </div>
        <nav className="flex space-x-6 text-yellow-800 font-medium text-md">
          <Link href="/">Home</Link>
          <Link href="/jelly">Meet Jelly</Link>
          <Link href="/checkin">Check-In</Link> {/* Placeholder for daily check-in */}
          <Link href="/calendar">Reminders</Link> {/* Placeholder for calendar integration */}
          <Link href="/memory-book">Memory Book</Link> {/* Placeholder for journaling/reflection */}
          <Link href="/canvas">Community Canvas</Link> {/* Placeholder for art/kindness wall */}
          <Link href="/feedback">Feedback</Link> {/* Can link to form or in-app feedback panel */}
        </nav>
      </div>
    </header>
  )
}
