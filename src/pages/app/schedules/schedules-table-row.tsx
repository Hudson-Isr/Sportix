import { ColumnDef } from '@tanstack/react-table'
import { CalendarCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { SchedulesDetails } from './schedules-detalis'

export type Schedules = {
  status: 'Reservado' | 'Livre' | 'Jogo Livre'
  reserved: string
  schedules: string
  day: string
}

export const columns: ColumnDef<Schedules>[] = [
  {
    accessorKey: 'reserved',
    header: 'Reserva',
  },
  {
    accessorKey: 'day',
    header: 'Dia',
  },
  {
    accessorKey: 'schedules',
    header: 'Horarios',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
]

export function SchedulesTableRow() {
  return (
    <>
      <TableRow>
        <TableCell>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="xs"
                className="space-x-4 hover:bg-primary"
              >
                <CalendarCheck className="h-3 w-3" />
                <span>Reservar</span>
              </Button>
            </DialogTrigger>

            <SchedulesDetails />
          </Dialog>
        </TableCell>
        <TableCell className="text-muted-foreground">01/04/2024</TableCell>
        <TableCell className="text-muted-foreground">8 horas</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            <span className="font-medium text-muted-foreground">Livre</span>
          </div>
        </TableCell>
      </TableRow>

      {/* Adicionando mais casos de teste */}
      <TableRow>
        <TableCell>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="xs"
                className="space-x-4 hover:bg-primary"
              >
                <CalendarCheck className="h-3 w-3" />
                <span>Reservar</span>
              </Button>
            </DialogTrigger>

            <SchedulesDetails />
          </Dialog>
        </TableCell>
        <TableCell className="text-muted-foreground">01/04/2024</TableCell>
        <TableCell className="text-muted-foreground">9 horas</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-400"></span>
            <span className="font-medium text-muted-foreground">Reservado</span>
          </div>
        </TableCell>
      </TableRow>
    </>
  )
}
