import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid max-h-[920px] grid-cols-9 grid-rows-6 gap-6 max-sm:grid-cols-1">

      <Link href="/" className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image src="/moletom-never-stop-learning.png" width={920} height={920} quality={100} alt="" className="group-hover:scale-105 transition-transform duration-500"/>
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 max-sm:hidden">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$129</span>
        </div>
      </Link>

      <Link href="/" className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end max-sm:col-span-6">
        <Image src="/moletom-java.png" width={920} height={920} quality={100} alt="" className="group-hover:scale-105 transition-transform duration-500"/>
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 max-sm:hidden">
          <span className="text-sm truncate">Moletom Java</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$129</span>
        </div>
      </Link>
      
      <Link href="/" className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end max-sm:col-span-6">
        <Image src="/camiseta-dowhile-2022.png" width={920} height={920} quality={100} alt="" className="group-hover:scale-105 transition-transform duration-500"/>
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 max-sm:hidden">
          <span className="text-sm truncate">Camiseta DoWhile 2022</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$129</span>
        </div>
      </Link>

    </div>
  );
}
