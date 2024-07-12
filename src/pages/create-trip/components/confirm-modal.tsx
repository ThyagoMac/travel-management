import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../../components/button";

interface ConfirmModalProps {
  closeConfirmModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setUserName: (setUserName: string) => void;
  setUserEmail: (setUserEmail: string) => void;
}

export function ConfirmModal({
  closeConfirmModal,
  createTrip,
  setUserName,
  setUserEmail,
}: ConfirmModalProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold'>Overview</h2>
            <button onClick={closeConfirmModal}><X className='size-5 text-zinc-400 hover:text-zinc-300' /></button>
          </div>
          <p className='text-sm text-zinc-400'>
            To complete the creation of the trip to
            <span className='font-semibold text-zinc-100'> Florianópolis </span> 
            on the dates of 
            <span className='font-semibold text-zinc-100'> August 16th to 17th, 2024 </span>
            , fill in your details below
          </p>
        </div>
        
        <form onSubmit={createTrip} className='space-y-3' action="">
          <div className='px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2' >
            <User className='text-zinc-400 size-5' />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="text"
              name="name"
              placeholder="Your name"
              onChange={event => setUserName(event.target.value)}
            />
          </div>
          <div className='px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2' >
            <Mail className='text-zinc-400 size-5' />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="email"
              name="email"
              placeholder="Your email"
                onChange={event => setUserEmail(event.target.value)}
            />
          </div>

          <Button type='submit' size="full">
            Confirm and finish
          </Button>
        </form>
      </div>
    </div>
  )
}
          