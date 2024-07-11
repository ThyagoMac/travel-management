import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from "lucide-react";

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 py-10">
      <div className="space-y-8">
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-zinc-400"/>
            <span className="text-zinc-100">
              Floripa, Brasil
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400"/>
              <span className="text-zinc-100">
                17 to 25 setember
              </span>
            </div>

            <div className="w-px h-6 bg-zinc-800" />
            <button className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
              Change place/date
              <Settings2 className='size-5' />
            </button>
          </div>
        </div>
        <main className="flex gap-16 px-3">
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Planning</h2>
              <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                <Plus className='size-5' />
                Add
              </button>
            </div>

            <div className="space-y-8">
              <div className="space-y-2.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl text-zinc-300 font-semibold">
                    Day 12
                  </span>
                  <span className="text-xs text-zinc-500">saturday</span>
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
                  <span className="text-xs text-zinc-500">sunday</span>
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
          </div>

          <div className="w-80 space-y-6">
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

            <div className="w-full h-px bg-zinc-800" />

            <div className="space-y-6">
              <h2 className="font-semibold text-xl">Guests</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">
                      Jhon Snow
                    </span>
                    <span className="block text-sm text-zinc-400 truncate">
                      emails.dot@enterprise.com
                    </span>
                  </div>
                  <CircleDashed className="size-5 text-zinc-400 shrink-0" />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">
                      Flanders Simpsons
                    </span>
                    <span className="block text-sm text-zinc-400 truncate">
                      emails.dot@enterprise.com
                    </span>
                  </div>
                  <CircleCheck className="size-5 text-zinc-400 shrink-0" />
                </div>
              </div>
              <button className='w-full justify-center bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                <UserCog className='size-5' />
                Guest manage
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}