import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import { InviteGuestsModal } from './components/invit-guests-modal';
import { ConfirmModal } from './components/confirm-modal';
import { DestinationDateInput } from './components/destination-date-input';
import { InviteGuests } from './components/invite-guests';

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    'thyago.cormick@gmail.com',
    'jhon@gmail.com',
    'homer.j.sympsons@gmail.com',
  ]);

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/trips/12");
  }

  function toggleGuestsInput() {
    setIsGuestsInputOpen(!isGuestsInputOpen);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }
  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmModal() {
    setIsConfirmModalOpen(true);
  }
  function closeConfirmModal() {
    setIsConfirmModalOpen(false);
  }

  function addNewGuest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const guestForm = new FormData(event.currentTarget);
    const inputVal = guestForm.get('email')?.toString();

    if (!inputVal) { return }

    if (emailsToInvite.includes(inputVal)) { return }

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
          <DestinationDateInput
            isGuestsInputOpen={isGuestsInputOpen}
            toggleGuestsInput={toggleGuestsInput}
          />

          {
            isGuestsInputOpen && (
              <InviteGuests
                emailsToInvite={emailsToInvite}
                openGuestsModal={openGuestsModal}
                openConfirmModal={openConfirmModal}
              />
            )
          }
        </div>

        <p className="text-sm text-zinc-500">
          By planning your trip with us you automatically agree <br /> to our 
          <a href="#" className="text-zinc-300"> terms of use</a> and <a href="#" className="text-zinc-300">privacy policies</a>.
        </p>
      </div>

      {/* quest modal */}
      {
        isGuestsModalOpen && (
          <InviteGuestsModal
            addNewGuest={addNewGuest}
            closeGuestsModal={closeGuestsModal}
            emailsToInvite={emailsToInvite}
            removeGuest={removeGuest}
          />
        )
      }

      {/* confirm modal */}
      {
        isConfirmModalOpen && (
          <ConfirmModal
            closeConfirmModal={closeConfirmModal}
            createTrip={createTrip}
          />
        )
      }
    </div>
  )
}
