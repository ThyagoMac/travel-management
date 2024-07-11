import { Plus, } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./components/create-activity-modal";
import { ImportantLinks } from "./components/important-links";
import { GuestsList } from "./components/guests-list";
import { Activities } from "./components/activies";
import { DestinationDateHeader } from "./components/destination-date-header";

export function TripDetailsPage() {
  const [ isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

  function toggleCreateActivityModal() {
    setIsCreateActivityModalOpen(!isCreateActivityModalOpen);
  }

  return (
    <div className="max-w-6xl px-6 mx-auto py-10 space-y-8">
      <DestinationDateHeader />
      
      <main className="flex gap-16 px-3">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Planning</h2>
            <button onClick={toggleCreateActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
              <Plus className='size-5' />
              Add
            </button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800" />

          <GuestsList />
        </div>
      </main>

      {
        isCreateActivityModalOpen && (
          <CreateActivityModal
            toggleCreateActivityModal={toggleCreateActivityModal}
          />
        )
      }
    </div>
  )
}