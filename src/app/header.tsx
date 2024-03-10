import Image from 'next/image'
import Link  from 'next/link'

import Logo from './logo.svg'

export default function Home() {
  return (
    <main className="items-center">
      <div className="w-96 h-24 relative bg-gradient-to-b from-neutral-900 to-black border border-red-600">
        <img className="w-20 h-20 left-[16px] top-[9px] absolute rounded-3xl" src="https://via.placeholder.com/82x82" />
        <div className="left-[120px] top-[26px] absolute text-white text-4xl font-normal font-['Fredoka']">RobuxTRex</div>
        <div className="w-36 left-[1716px] top-[25px] absolute text-center text-white text-4xl font-normal font-['Fredoka']">Home</div>
        <div className="w-36 left-[1565px] top-[26px] absolute text-center text-white text-4xl font-normal font-['Fredoka']">Projects</div>
        <div className="w-60 left-[1316px] top-[26px] absolute text-center text-white text-4xl font-normal font-['Fredoka']">VIP Servers</div>
      </div>
    </main>
  )
}
