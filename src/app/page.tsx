export const runtime = 'edge'

import Image from 'next/image'
import Words from '../words'

import Header from './header'

export default function Home() {
  const word = Words[Math.floor(Math.random() * (Words.length - 1)+1)]
  return (
    <main className="flex flex-col items-center justify-between">
      <Header></Header>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-montserrat text-sm lg:flex p-8">
        <div>
          <h1 className="text-8xl font-black">{word || "Hello!"}</h1>
          <h2 className="text-3xl">I am RobuxTRex.</h2>
        </div>
      </div>
    </main>
  )
}
