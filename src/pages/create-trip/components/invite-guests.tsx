import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsProps {
  emailsToInvite: string[];
  openGuestsModal: () => void;
  openConfirmModal: () => void;
}

export function InviteGuests({
  emailsToInvite,
  openConfirmModal,
  openGuestsModal,
}: InviteGuestsProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button onClick={openGuestsModal} className='flex items-center gap-2 flex-1'>
        <UserRoundPlus className='size-5 text-zinc-400' />
        {emailsToInvite.length > 0 ? (
          <span className="text-lg text-zinc-100 text-left flex-1">
            { emailsToInvite.length } people invited
          </span>
        ) : (
          <span className="text-lg text-zinc-400 text-left flex-1">
            Who will be the travelers?
          </span>
        )}
      </button>

      <div className='w-px h-6 bg-zinc-600' />

      <button onClick={openConfirmModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
        Confirm
        <ArrowRight className='size-5' />
      </button>
    </div>
  )
}
