import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../../components/button";

export function GuestsList() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Guests</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Jhon Snow
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              emails.dot@enterprise.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Flanders Simpsons
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              emails.dot@enterprise.com
            </span>
          </div>
          <CircleCheck className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      <Button variant="secondary">
        <UserCog className='size-5' />
        Guest manage
      </Button>
    </div>
  )
}