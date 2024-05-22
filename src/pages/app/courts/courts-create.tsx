import { CirclePlus } from 'lucide-react'

import { Button } from '@/components/ui/button'
export function CourtsCreate() {
  return (
    <div className="flex justify-center">
      <Button className="gap-3">
        <span>
          <CirclePlus className="h-4 w-4" />
        </span>
        Nova Quadra
      </Button>
    </div>
  )
}
