import React, { useState, useEffect } from 'react'
import MoodSelector from './MoodSelector'
import DailyMessage from './DailyMessage'
import ReminderCard from './ReminderCard'
import JournalHistory from './JournalHistory'

export default function JellyChat() {
  const [mood, setMood] = useState(null)
  const [entries, setEntries] = useState([])

  const moodMessages = {
    "😊": "Yay! I'm so glad you’re feeling good today.",
    "😐": "Thanks for checking in. Let’s take today one moment at a time.",
    "😢": "It’s okay to have tough days. I’m here for you.",
  }

  const sampleReminders = [
    { time: '10:00 AM', title: 'Art Class with Super Ability Crew' },
    { time: '12:30 PM', title: 'Lunch & Relax Time' },
    { time: '2:00 PM', title: 'Stretch + Water Break' },
  ]

  const speak = (text) => {
    const synth = window.speechSynthesis
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'en-US'
    utter.pitch = 1.1
    utter.rate = 1
    synth.cancel()
    synth.speak(utter)
  }

  const handleMoodSelect = (selectedMood) => {
    const message = moodMessages[selectedMood]
    const now = new Date()
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    setMood(selectedMood)
    speak(message)

    const newEntry = {
      mood: selectedMood,
      time: timestamp,
      message,
    }

    setEntries((prev) => [newEntry, ...prev.slice(0, 4)]) // Keep most recent 5
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-xl text-center mx-auto">
      <h1 className="text-2xl font-bold text-yellow-600">Hi, I’m Jelly 👋</h1>
      <p className="mt-2 text-gray-700">How are you feeling today?</p>

      <MoodSelector onSelect={handleMoodSelect} />
      <DailyMessage mood={mood} />

      <div className="mt-6">
        <h2 className="text-yellow-600 text-lg font-semibold mb-2">📌 Today’s Reminders</h2>
        {sampleReminders.map((reminder, idx) => (
          <ReminderCard key={idx} time={reminder.time} title={reminder.title} />
        ))}
      </div>

      <JournalHistory entries={entries} />
    </div>
  )
}
