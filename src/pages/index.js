import Head from 'next/head'
import JellyChat from '../components/JellyChat'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tap Tap Friend</title>
        <meta name="description" content="An AI companion built for belonging" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-yellow-50 p-4">
        <JellyChat />
      </main>
    </>
  )
}
