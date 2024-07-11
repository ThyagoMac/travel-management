import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../../components/button";

interface CreateActivityModalProps {
  toggleCreateActivityModal: () => void;
}

export function CreateActivityModal({
  toggleCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold'>Add Activity</h2>
            <button onClick={toggleCreateActivityModal}><X className='size-5 text-zinc-400 hover:text-zinc-300' /></button>
          </div>
          <p className='text-sm text-zinc-400'>
            All guests can see the activities plan
          </p>
        </div>
        
        <form className='space-y-3' action="">
          <div className='px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2' >
            <Tag className='text-zinc-400 size-5' />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="text"
              name="title"
              placeholder="Type activity"
            />
          </div>
          <div className="flex items-center gap-2 ">
            <div className='px-4 h-14 flex-1 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2' >
              <Calendar className='text-zinc-400 size-5' />
              <input
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                type="datetime-local"
                name="occurs_at"
                placeholder="Date and time"
              />
            </div>
          </div>

          <Button type='submit' size="full">
            Save
          </Button>
        </form>
      </div>
    </div>
  )
}
