import Image from 'next/image'
import Link  from 'next/link'

import Logo from './logo.svg'

export default function Home() {
  return (
    <main className="items-center">
      <div className="flex text-2xl font-bold">
        <Image src={Logo} alt="RobuxTRex Logo" />
        <p className="pt-6 pl-24"><Link href="/">Home</Link></p>
      </div>
    </main>
  )
}
