import Link from 'next/link'
import Words from '../../../words'

export default function Home() {
  const word = Words[Math.floor(Math.random() * (Words.length - 1)+1)]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-montserrat text-sm lg:flex">
        <div>
          <h1 className="text-8xl font-black">{word || "Hello!"}</h1>
          <h2 className="text-3xl">You are now being redirected to my Roblox DOORS VIP Server!</h2>
          <p className="text-3xl pt-10 mt-52 font-bold">DO NOT leave this page during the redirect.</p>
          <p className="text-3xl font-bold">You can <Link className="text-blue-400 font-black" href="/">return home</Link>, though!</p>
          <p className="text-3xl pt-10 mt-52 font-bold">This will not work for Mobile Players or accounts Under the age of 13.</p>
        </div>
      </div>
    </main>
  )
}
