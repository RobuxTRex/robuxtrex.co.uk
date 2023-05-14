import Image from 'next/image'
import Link  from 'next/link'

import Logo from './logo.svg'

export default function Home() {
  return (
    <main className="items-center">
      <div className="flex text-2xl font-bold">
        <Link href="/"><Image src={Logo} alt="RobuxTRex Logo" /></Link>
      </div>
    </main>
  )
}
