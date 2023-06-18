import {
  Laptop2,
  LayoutList,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-zinc-700 bg-zinc-800 px-4 py-2">
      <div className="flex items-center gap-3">
        <Image
          src="/album.jpg"
          className="w-full"
          width={48}
          height={48}
          alt="Capa do algum mc ig"
        />
        <div className="flex flex-col">
          <strong className="flex flex-row font-normal ">400K</strong>
          <span className="text-xs text-zinc-400">Mc ig</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 pl-12">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-white pl-1 text-black">
            <Play />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-40 rounded-full bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={18} />
        <LayoutList size={18} />
        <Laptop2 size={18} />
        <div className="flex items-center gap-2">
          <Volume size={18} />
          <div className="h-1 w-24 rounded-full bg-zinc-600">
            <div className="h-1 w-10 rounded-full bg-zinc-200"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
