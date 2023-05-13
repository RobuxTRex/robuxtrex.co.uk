import Header from './header'

export default function notfound() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Header></Header>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-montserrat text-sm lg:flex p-8">
        <div>
          <h1 className="text-8xl font-black">404 NOT FOUND</h1>
        </div>
      </div>
    </main>
  )
}
