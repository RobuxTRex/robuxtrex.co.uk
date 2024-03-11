export const runtime = 'edge'

import Image from 'next/image'
import Link from 'next/link'

import Words from '../words'
import Phrases from '../phrase'
import Header from './header'

import Logo from './favicon.ico'
import Banner from './banner.png'

export default function Home() {
  const word = Words[Math.floor(Math.random() * (Words.length - 1)+1)]
  const phrase = Phrases[Words.indexOf(word)]

  return (
    <main className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 flex">
      <Header></Header>
      <div className="">
        <div className="pt-24 text-zinc-400 text-xl">
          <h1 className="text-8xl font-black text-white">{word || "Hello!"}</h1>
          <h2 className="text-3xl text-zinc-200 font-semibold pt-2">{phrase || "I am RobuxTRex!"}</h2>
          <h3 className="text-xs">(Hello! I am RobuxTRex!)</h3>
          
          <p className="pt-10">Hello! I am RobuxTRex, a Roblox programmer with 5+ years of experience.</p>
          <p className="">I also have decent experience with programming (not designing) websites with NextJS & TailwindCSS</p>
          <p className="">and creating Discord bots with NextJS.</p>
          <p>You can contact me on <Link href="socials/x" className='text-blue-400 font-bold'>Twitter</Link> or <Link href="discord://-/users/707671663696674855" className='text-blue-400 font-bold'>Discord</Link>! <span className='text-sm'>(requires Discord Desktop app to open - user is @robuxtrex)</span></p>
        </div>
        <h3 className="text-5xl font-bold pt-16 left-96 text-center">You may know me from...</h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 w-max pt-8 flex-none">
            <article className="w-80">
              <div className="h-15 relative rounded-t-md">
                <Image src={Banner} width="600" height="200" className="z-10" alt="" />
                <div className="font-medium w-12 h-12 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 flex items-center justify-center bg-red-600 rounded-full shadow-xl"><Image src={Logo} className="rounded-full" alt="" /></div>
              </div>

              <div className="bg-zinc-800/50 pt-8 rounded-b-md pb-4 z-0 text-zinc-400">
                <h6 className="text-center font-semibold text-blue-400"><Link href="/socials/youtube">YouTube 🔗</Link></h6>
                <p className="text-center ">The RobuxTRex YouTube channel! Here I post primarily Roblox and Minecraft content.</p>
                <p className="text-center pt-6">🕑 Joined May 2018</p>
                <p className="text-center pt-2">👥 ~800 Subscribers</p>
                <p className="text-center pt-2">📦 85 Videos</p>
                <p className="text-center pt-2">📈 Moderately Inactive</p>
              </div>
            </article>

            <article className="w-80">
              <div className="h-15 relative rounded-t-md">
                <img src="https://pbs.twimg.com/profile_banners/1408776095265079301/1707163736/600x200" width="600" height="200" className="z-10" alt="" />
                <div className="font-medium w-12 h-12 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 flex items-center
                 justify-center bg-red-600 rounded-full shadow-xl"><Image src={Logo} className="rounded-full" alt="" /></div>
              </div>

              <div className="bg-zinc-800/50 pt-8 rounded-b-md pb-4 z-100 text-yellow-400">
                <h6 className="text-center font-semibold text-blue-400"><Link href="/socials/x">Twitter 🔗</Link></h6>
                <p className="text-center text-yellow-400">The RobuxTRex Twitter account! Here I post many tweets regarding game development, et cetera.</p>
                <p className="text-center pt-6">🕑 Joined June 2021</p>
                <p className="text-center pt-2">👥 ~2000 Followers</p>
                <p className="text-center pt-2">📦 1076 Tweets</p>
                <p className="text-center pt-2">📈 Extremely Active</p>
              </div>
            </article>
        </div>
      </div>
    </main>
  )
}
