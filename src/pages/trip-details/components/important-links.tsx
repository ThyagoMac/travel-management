import { Link2, Plus } from "lucide-react";
import { Button } from "../../../components/button";

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
      <Button className='w-full h-11' variant="secondary">
        <Plus className='size-5' />
        Add new link
      </Button>
    </div>
  )
}