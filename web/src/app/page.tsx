
export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left Column */}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
      
        {/* Stripes*/}
        <div className="absolute right-1 top-0 w-2 bg-stripes" />
      </div>

      {/* Right Column */}
      <div className="flex flex-col p-16 ">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[300px]">You haven't registered any memories,
            <a className="underline hover:text-gray-50" href=""> start now!</a> 
          </p>
        </div>
      </div>
    </main>
  )
}
