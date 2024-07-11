import { Plus, } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./components/create-activity-modal";
import { ImportantLinks } from "./components/important-links";
import { GuestsList } from "./components/guests-list";
import { Activities } from "./components/activies";
import { DestinationDateHeader } from "./components/destination-date-header";
import { Button } from "../../components/button";

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
            <Button onClick={toggleCreateActivityModal} variant="primary">
              <Plus className='size-5' />
              Add
            </Button>
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