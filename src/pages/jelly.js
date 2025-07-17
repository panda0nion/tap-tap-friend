import Head from 'next/head'

export default function MeetJelly() {
  return (
    <>
      <Head>
        <title>Meet Jelly</title>
        <meta name="description" content="Meet Jelly – A friend shaped by community" />
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">💛 Meet Jelly</h1>
        <p className="text-lg text-gray-700 mb-6">
          Jelly wasn’t built in a boardroom or sketched on a whiteboard.
          She was born from <strong>conversations</strong>, <strong>community</strong>, and a shared need for something simple: 
          <em> a friend who just gets it.</em>
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500 mt-8 mb-2">🧠 Where Jelly Came From</h2>
        <p className="text-gray-700 mb-4">
          The idea started with a small group of passionate individuals — artists, volunteers, caregivers, and neurodivergent adults from the 
          <strong> Super Ability Crew</strong> — who wanted a tool that could help with:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Gentle reminders</li>
          <li>Daily check-ins</li>
          <li>Encouragement without pressure</li>
        </ul>
        <p className="text-gray-700 mb-6">
          We didn’t want productivity. We wanted <strong>presence</strong>. So we started building.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-500 mt-8 mb-2">🎨 What Makes Jelly Different?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>She listens without judgment</li>
          <li>She speaks in a soft, supportive voice</li>
          <li>She reminds you, but never nags</li>
          <li>She reflects the creativity and neurodiversity of her community</li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-500 mt-8 mb-2">🌱 Who Built Jelly?</h2>
        <p className="text-gray-700 mb-6">
          Jelly was built with love by:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Members of the <strong>Super Ability Crew</strong></li>
          <li>Artists and leaders from <strong>Project Autism</strong></li>
          <li>Developers and volunteers who care about inclusive design</li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-500 mt-8 mb-2">🛠️ Help Us Improve Jelly</h2>
        <p className="text-gray-700 mb-4">
          We’re always learning and listening.
        </p>
        <p className="text-gray-700 mb-4">
          👉 <a href="https://forms.gle/your-google-form-link" target="_blank" className="text-blue-600 underline">Send feedback to help Jelly grow</a>
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>What you love</li>
          <li>What’s missing</li>
          <li>What would make Jelly even more helpful for you or your community</li>
        </ul>

        <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-600">
          “Hi! I’m Jelly. I’m still learning, but I love being here for you. Let’s make something beautiful together.”
        </blockquote>
      </main>
    </>
  )
}
