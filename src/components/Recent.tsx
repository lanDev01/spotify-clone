import { Play } from 'lucide-react'
import Image from 'next/image'

export function Recent() {
  return (
    <a
      href="#"
      className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
    >
      <Image
        src="/veigh.jpg"
        width={80}
        height={80}
        alt="Capa do algum Veigh"
      />
      <strong>Veigh</strong>
      <button className="invisible ml-auto mr-8 flex h-10 w-10 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
        <Play />
      </button>
    </a>
  )
}
