import { X } from 'lucide-react'

import { Reservation } from '@/api/get-reservations'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

interface ReservationsTableRowProps {
  reservation: Reservation
}

export function ReservationsTableRow({
  reservation,
}: ReservationsTableRowProps) {
  return (
    <TableRow>
      <TableCell className="text-muted-foreground">
        {reservation.date}
      </TableCell>
      <TableCell className="font-bold text-muted-foreground">
        {reservation.hour}
      </TableCell>
      <TableCell className="font-bold text-muted-foreground">
        {reservation.court}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {reservation.client}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${reservation.status ? 'bg-green-400' : 'bg-red-400'}`}
          ></span>
          <span className="font-medium text-muted-foreground">
            {reservation.status ? 'Sim' : 'Não'}
          </span>
        </div>
      </TableCell>
      <TableCell>
        <Button
          type="submit"
          variant="destructive"
          className="hover:bg-red-400 hover:dark:bg-red-600"
          size="xs"
        >
          <X className="mr-2 h-4 w-4" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
