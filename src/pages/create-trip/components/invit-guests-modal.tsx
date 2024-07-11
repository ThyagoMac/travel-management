import { X, AtSign, Plus, } from 'lucide-react';
import { FormEvent } from 'react';
import { Button } from '../../../components/button';

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewGuest: (event: FormEvent<HTMLFormElement>) => void;
  removeGuest: (emailToRemove: string) => void;
}

export function InviteGuestsModal({
  addNewGuest,
  closeGuestsModal,
  emailsToInvite,
  removeGuest,
}: InviteGuestsModalProps) {


  return (
    <div  className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold'>Select guests</h2>
            <button onClick={closeGuestsModal}><X className='size-5 text-zinc-400 hover:text-zinc-300' /></button>
          </div>
          <p className='text-sm text-zinc-400'>
            Guests will receive the invitation via email
          </p>
        </div>

        <div className='flex flex-wrap gap-2'>
          {
            emailsToInvite.map((email) => {
              return (
                <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2 text-zinc-300'>
                  { email }
                  <button onClick={ () => removeGuest(email) }>
                    <X className='size-4 text-zinc-400 hover:text-zinc-300' />
                  </button>
                </div>
              )
            })
          }
          
        </div>
        <div className='w-full h-px bg-zinc-800' />
        
        <form onSubmit={addNewGuest} className='px-2 py-2 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2' action="">
          <div className='px-2 flex items-center flex-1 gap-2'>
            <AtSign className='text-zinc-400 size-5' />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="email"
              name="email"
              placeholder="guest.email@example.com"
            />
          </div>

          <Button type='submit' variant="primary">
            Invite
            <Plus className='size-5' />
          </Button>
        </form>
      </div>
    </div>
  )
}