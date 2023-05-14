export const runtime = 'edge'

import Image from 'next/image'
import Link from 'next/link'

import Words from '../words'
import Header from './header'

import Essentials from './Essentials.png'
import Logo from './favicon.ico'

export default function Home() {
  const word = Words[Math.floor(Math.random() * (Words.length - 1)+1)]
  return (
    <main className="">
      <Header></Header>
      <div className="">
        <div className="text-left pl-96 pt-24">
          <h1 className="text-8xl font-black">{word || "Hello!"}</h1>
          <h2 className="text-3xl">I am RobuxTRex.</h2>
        </div>
        <h3 className="text-5xl font-bold pt-36 text-center">You may know me from...</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 w-max pt-8">
            <article className="w-80">
              <div className="bg-red-500 h-20 relative rounded-t-md">
                <div className="font-medium w-12 h-12 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 flex items-center justify-center bg-red-600 rounded-full shadow-xl"><Image src={Logo} className="rounded-full" alt="" /></div>
              </div>

              <div className="bg-zinc-800/50 pt-8 rounded-b-md pb-4 z-0">
                <h6 className="text-center font-semibold text-blue-400"><Link href="/socials/youtube">YouTube 🔗</Link></h6>
                <p className="text-center text-zinc-400">The RobuxTRex YouTube channel! Here I post primarily Roblox and Minecraft content.</p>
                <p className="text-center text-yellow-400 pt-6">🕑 Joined May 2018</p>
                <p className="text-center text-yellow-400 pt-2">📈 ~717 Subscribers</p>
                <p className="text-center text-yellow-400 pt-2">📦 85 Videos</p>
              </div>
            </article>

            <article className="w-80">
              <div className="bg-blue-400 h-20 relative rounded-t-md">
                <div className="font-medium w-12 h-12 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 flex items-center justify-center bg-red-600 rounded-full shadow-xl"><Image src={Logo} className="rounded-full" alt="" /></div>
              </div>

              <div className="bg-zinc-800/50 pt-8 rounded-b-md pb-4 z-0">
                <h6 className="text-center font-semibold text-blue-400"><Link href="/socials/twitter">Twitter 🔗</Link></h6>
                <p className="text-center text-zinc-400">The RobuxTRex Twitter account! Here I post many tweets regarding game development, et cetera.</p>
                <p className="text-center text-zinc-400 pt-6">🕑 Joined June 2021</p>
                <p className="text-center text-zinc-400 pt-2">📈 ~120 Followers</p>
                <p className="text-center text-zinc-400 pt-2">📦 1066 Tweets</p>
              </div>
            </article>

            <article className="w-80">
              <div className="bg-blue-600 h-20 relative rounded-t-md">
                <div className="font-medium w-12 h-12 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 flex items-center justify-center bg-zinc-800 rounded-full shadow-xl"><Image src={Essentials} className="rounded-full" alt="" /></div>
              </div>

              <div className="bg-zinc-800/50 pt-8 rounded-b-md pb-4 z-0">
                <h6 className="text-center font-semibold text-blue-400"><Link href="/socials/discord">Discord 🔗</Link></h6>
                <p className="text-center text-zinc-400">The ROBLOX Essentials Discord server! This Discords server is associated with my brand, ROBLOX Essentials.</p>
                <p className="text-center text-zinc-400 pt-6">🕑 Made January 2023</p>
                <p className="text-center text-zinc-400 pt-2">📈 ~100 Members</p>
                <p className="text-center text-zinc-400 pt-2">📦 High Retention</p>
              </div>
            </article>
          </div>
      </div>
    </main>
  )
}
