import { X } from 'lucide-react'
import { useState } from 'react'

import { CancelReservation, cancelReservation } from '@/api/cancel-reservation'
import { Reservation } from '@/api/get-reservations'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

interface ReservationsTableRowProps {
  reservation: Reservation
  onReservationCancelled: () => void // Função para atualizar a lista de reservas após cancelamento
}

export function ReservationsTableRow({
  reservation,
  onReservationCancelled,
}: ReservationsTableRowProps) {
  const [loading, setLoading] = useState(false)

  const handleCancel = async () => {
    setLoading(true)
    try {
      if (!reservation.isRecurrence) {
        const cancelData: CancelReservation = {
          id: reservation.object.id,
          type_reserve: 'reservation',
          date: reservation.object.date,
        }

        await cancelReservation(cancelData)
        alert('Reserva cancelada com sucesso!')
        onReservationCancelled()
      } else {
        const cancelData: CancelReservation = {
          id: reservation.object.id,
          type_reserve: 'recurrenceUser',
          date: reservation.object.date,
        }
        await cancelReservation(cancelData)
        alert('Reserva cancelada com sucesso!')
        onReservationCancelled()
      }
    } catch (error) {
      console.error('Erro ao cancelar a reserva:', error)
      alert('Erro ao cancelar a reserva.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <TableRow>
      <TableCell className="text-muted-foreground">
        {reservation.object.date}
      </TableCell>
      <TableCell className="font-bold text-muted-foreground">
        {reservation.object.hour}
      </TableCell>
      <TableCell className="font-bold text-muted-foreground">
        {reservation.court}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {reservation.client}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {reservation.object.status === ''
          ? reservation.status
          : reservation.object.status}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${reservation.isRecurrence ? 'bg-green-400' : 'bg-red-400'}`}
          ></span>
          <span className="font-medium text-muted-foreground">
            {reservation.isRecurrence ? 'Sim' : 'Não'}
          </span>
        </div>
      </TableCell>
      <TableCell>
        {(reservation.cancelable && reservation.object.status === 'Agendado') ||
        (reservation.isRecurrence && reservation.status === 'Agendado') ? (
          <Button
            type="button"
            variant="destructive"
            className="hover:bg-red-400 hover:dark:bg-red-600"
            size="xs"
            onClick={handleCancel}
            disabled={loading}
          >
            <X className="mr-2 h-4 w-4" />
            {loading ? 'Cancelando...' : 'Cancelar'}
          </Button>
        ) : (
          ''
        )}
      </TableCell>
    </TableRow>
  )
}
