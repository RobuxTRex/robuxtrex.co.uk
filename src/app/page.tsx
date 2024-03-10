export const runtime = 'edge'

import 'dotenv/config'

import Image from 'next/image'
import Link from 'next/link'

import Words from '../words'
import Phrases from '../phrase'
import Header from './header'

import Logo from './favicon.ico'

export default function Home() {
  const word = Words[Math.floor(Math.random() * (Words.length - 1)+1)]
  const phrase = Phrases[Words.indexOf(word)]

  return (
    <main className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 flex">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5323922494422695" crossOrigin="anonymous"></script>
      <Header></Header>
      <div className="">
        <div className="pt-24 text-zinc-400 text-xl">
          <h1 className="text-8xl font-black text-white">{word || "Hello!"}</h1>
          <h2 className="text-3xl text-zinc-200 font-semibold pt-2">{phrase || "I am RobuxTRex!"}</h2>
          <h3 className="text-xs">(Hello! I am RobuxTRex!)</h3>
          
          <p className="pt-10">Hi! I am RobuxTRex: an up-coming, inspiring Content Creator providing entertainment and enjoyment for hours to hundreds.</p>
          <p className="">In terms of YouTube and content creation, I am gaining over a hundred subscribers monthly!</p>
          <p className="">Meanwhile, I am an aspiring Roblox Game Developer focusing on many projects that are set to release soon!</p>
        </div>
        <h3 className="text-5xl font-bold pt-48 left-96 text-center">You may know me from...</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 w-max pt-8 flex-none">
            <article className="w-80">
              <div className="bg-red-500 h-20 relative rounded-t-md">
                <div className="font-medium w-12 h-12 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 flex items-center justify-center bg-red-600 rounded-full shadow-xl"><Image src={Logo} className="rounded-full" alt="" /></div>
              </div>

              <div className="bg-zinc-800/50 pt-8 rounded-b-md pb-4 z-0">
                <h6 className="text-center font-semibold text-blue-400"><Link href="/socials/youtube">YouTube 🔗</Link></h6>
                <p className="text-center text-zinc-400">The RobuxTRex YouTube channel! Here I post primarily Roblox and Minecraft content.</p>
                <p className="text-center text-yellow-400 stroke-white stroke-1 pt-6">🕑 Joined May 2018</p>
                <p className="text-center text-yellow-400 pt-2">📈 ~800 Subscribers</p>
                <p className="text-center text-yellow-400 pt-2">📦 85 Videos</p>
              </div>
            </article>

            <article className="w-80">
              <div className="bg-blue-400 h-20 relative rounded-t-md">
                <div className="font-medium w-12 h-12 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 flex items-center
                 justify-center bg-red-600 rounded-full shadow-xl"><Image src={Logo} className="rounded-full" alt="" /></div>
              </div>

              <div className="bg-zinc-800/50 pt-8 rounded-b-md pb-4 z-0">
                <h6 className="text-center font-semibold text-blue-400"><Link href="/socials/twitter">Twitter 🔗</Link></h6>
                <p className="text-center text-zinc-400">The RobuxTRex Twitter account! Here I post many tweets regarding game development, et cetera.</p>
                <p className="text-center text-zinc-400 pt-6">🕑 Joined June 2021</p>
                <p className="text-center text-zinc-400 pt-2">📈 ~2000 Followers</p>
                <p className="text-center text-zinc-400 pt-2">📦 1076 Tweets</p>
              </div>
            </article>
        </div>
      </div>
    </main>
  )
}
