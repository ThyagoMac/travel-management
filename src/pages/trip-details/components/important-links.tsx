import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Important Links</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              reserva
            </span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              pipi2pipi2pipi2pipi2pipi2pipi2pipi2pipi2pipi2pipi2pipi2
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              reserva 2
            </span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              pipi2pipi2pipi2pipi2pipi2pipi2pipi2pipi2pipi2pipi2pipi2
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      <button className='w-full justify-center bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700'>
        <Plus className='size-5' />
        Add new link
      </button>
    </div>
  )
}