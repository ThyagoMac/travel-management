import { CircleCheck } from "lucide-react";

export function Activities() {
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xl text-zinc-300 font-semibold">
            Day 12
          </span>
          <span className="text-xs text-zinc-500">
            saturday
          </span>
        </div>
        <p className="text-zinc-500 text-sm">
          nothing for this day
        </p>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xl text-zinc-300 font-semibold">
            Day 16
          </span>
          <span className="text-xs text-zinc-500">
            sunday
          </span>
        </div>
        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-100">
              Go to gyn
            </span>
            <div className="text-zinc-400 text-sm ml-auto">
              08:00h
            </div>
          </div>

          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-100">
              Go to gyn
            </span>
            <div className="text-zinc-400 text-sm ml-auto">
              08:00h
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}