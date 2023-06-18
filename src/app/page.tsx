import { Album } from '@/components/Album'
import { Footer } from '@/components/Footer'
import { Recent } from '@/components/Recent'
import { Sidebar } from '@/components/Sidebar'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-4 text-3xl font-semibold">Good Afternoon</h1>

          <div className="mt-10 grid grid-cols-3 gap-4">
            <Recent />
            <Recent />
            <Recent />
            <Recent />
            <Recent />
            <Recent />
          </div>
          <h2 className="mt-10 text-2xl font-semibold">
            Made for Alan Gonçalves Junior
          </h2>
          <div className="mt-4 grid grid-cols-8 gap-4">
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
