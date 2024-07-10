//import './App.css'
import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus, } from 'lucide-react'
import { useState, FormEvent } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    'thyago.cormick@gmail.com',
    'jhon@gmail.com',
    'homer.j.sympsons@gmail.com',
  ]);

  function toggleGuestsInput() {
    setIsGuestsInputOpen(!isGuestsInputOpen);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }
  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function addNewGuest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const guestForm = new FormData(event.currentTarget);
    const inputVal = guestForm.get('email')?.toString();

    if (!inputVal) { return };

    if (emailsToInvite.includes(inputVal)) { return };

    setEmailsToInvite([...emailsToInvite, inputVal]);

    event.currentTarget.reset();
  }
  function removeGuest(emailToRemove: string) {
    const finalEmailsToInvite = emailsToInvite.filter(email => email !== emailToRemove);
    
    setEmailsToInvite(finalEmailsToInvite);
  }
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="logo" />
          <p className="text-zinc-300 text-lg">
            Plan your trip!
          </p>
        </div>

        <div className='space-y-4'>
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

          {
            isGuestsInputOpen && (
              <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                <button onClick={openGuestsModal} className='flex items-center gap-2 flex-1'>
                  <UserRoundPlus className='size-5 text-zinc-400' />
                  <span className="bg-transparent text-lg text-zinc-400 text-left flex-1">Who will be the travelers?</span>
                </button>
      
                <div className='w-px h-6 bg-zinc-600' />
      
                <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                  Confirm
                  <ArrowRight className='size-5' />
                </button>
              </div>
            )
          }
        </div>

        <p className="text-sm text-zinc-500">
          By planning your trip with us you automatically agree <br /> to our 
          <a href="#" className="text-zinc-300"> terms of use</a> and <a href="#" className="text-zinc-300">privacy policies</a>.
        </p>
      </div>

      {
        isGuestsModalOpen && (
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
              
              <form onSubmit={addNewGuest} className='px-2 py-2 bg-zinc-950 border border-zinc-50 rounded-lg flex items-center gap-2' action="">
                <div className='px-2 flex items-center flex-1 gap-2'>
                  <AtSign className='text-zinc-400 size-5' />
                  <input
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                    type="email"
                    name="email"
                    placeholder="guest.email@example.com"
                  />
                </div>

                <button type='submit' className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                  Invite
                  <Plus className='size-5' />
                </button>
              </form>
            </div>
          </div>
        )
      }
    </div>
  )
}
