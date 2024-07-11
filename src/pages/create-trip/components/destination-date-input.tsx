import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationDateInputProps {
  isGuestsInputOpen: boolean;
  toggleGuestsInput: () => void;
}

export function DestinationDateInput({
  isGuestsInputOpen,
  toggleGuestsInput,
}: DestinationDateInputProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className='flex items-center gap-2 flex-1'>
        <MapPin className='size-5 text-zinc-400' />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Where are you going?" className="bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none" />
      </div>
      <div className='flex items-center gap-2'>
        <Calendar className='size-5 text-zinc-400' />
        <input disabled={isGuestsInputOpen} type="text" placeholder="When?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
      </div>

      <div className='w-px h-6 bg-zinc-600' />

      {
        isGuestsInputOpen ? (
          <button onClick={toggleGuestsInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
            Change place/date
            <Settings2 className='size-5' />
          </button>
        ) : (
          <button onClick={toggleGuestsInput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
            Continue
            <ArrowRight className='size-5' />
          </button>
        )
      }
    </div>
  )
}
          