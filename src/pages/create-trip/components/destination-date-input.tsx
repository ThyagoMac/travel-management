import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"
import { format } from "date-fns";

interface DestinationDateInputProps {
  isGuestsInputOpen: boolean;
  toggleGuestsInput: () => void;
  setDestination: (destination: string) => void;
  eventStartEndDates: DateRange | undefined;
  setEventStartEndDates: (dates: DateRange | undefined) => void;
}

export function DestinationDateInput({
  isGuestsInputOpen,
  toggleGuestsInput,
  setDestination,
  eventStartEndDates,
  setEventStartEndDates,
}: DestinationDateInputProps) {

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const hasDate = eventStartEndDates 
                  && eventStartEndDates.from
                  && eventStartEndDates.to
                      ? format(eventStartEndDates.from, "d LLL").concat(" to ").concat(format(eventStartEndDates.to, "d LLL"))
                      : null;

  function toggleIsDatePickerOpen() {
    setIsDatePickerOpen(!isDatePickerOpen);
  }

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className='flex items-center gap-2 flex-1'>
        <MapPin className='size-5 text-zinc-400' />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Where are you going?"
          className="bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none"
          onChange={event => setDestination(event.target.value)}
        />
      </div>
      <button onClick={toggleIsDatePickerOpen} disabled={isGuestsInputOpen} className='flex items-center gap-2 text-left w-40'>
        <Calendar className='size-5 text-zinc-400' />
        <span
          className="text-lg text-zinc-400 flex-1"
        >
          { hasDate ? hasDate : "When?" } 
        </span>
      </button>

      <div className='w-px h-6 bg-zinc-600' />

      {
        isGuestsInputOpen ? (
          <Button onClick={toggleGuestsInput} variant="secondary">
            Change place/date
            <Settings2 className='size-5' />
          </Button>
        ) : (
          <Button onClick={toggleGuestsInput} variant="primary">
            Continue
            <ArrowRight className='size-5' />
          </Button>
        )
      }

      {/* modal */}
      {
        isDatePickerOpen && (
          <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
              <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>Select Date  Range</h2>
                  <button onClick={toggleIsDatePickerOpen}><X className='size-5 text-zinc-400 hover:text-zinc-300' /></button>
                </div>
                <p className='text-sm text-zinc-400 text-left'>
                  Select 
                  <span className='font-semibold text-zinc-100'> start </span> 
                  and
                  <span className='font-semibold text-zinc-100'> end </span>
                  date of your trip
                </p>
              </div>
              <div>
                <DayPicker
                  mode="range"
                  selected={eventStartEndDates}
                  onSelect={setEventStartEndDates}
                />
              </div>
            </div>
          </div>
        )
      }
          
    </div>
  )
}
          