import Image from 'next/image'

export function Album() {
  return (
    <a
      href="#"
      className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
    >
      <Image
        src="/albumKay.jpg"
        className="w-full"
        width={120}
        height={120}
        alt="Capa do algum David Kushner"
      />
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-400">David Kushner</span>
    </a>
  )
}
