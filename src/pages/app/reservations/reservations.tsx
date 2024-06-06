import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { getReservations, Reservation } from '@/api/get-reservations'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { ReservationsTableRow } from './reservations-table-row'

export function Reservations() {
  const [reservations, setReservations] = useState<Reservation[]>([])

  useEffect(() => {
    // Simulação de chamada API para obter reservas
    const fetchReservations = async () => {
      const response = await getReservations()
      setReservations(response)
    }

    fetchReservations()
  }, [])

  if (reservations.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Helmet title="Quadras" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Quadras</h1>
        <div className="space-y-2.5">
          <span className="text-sm font-semibold">
            Seja bem-vindo ao sistema de gerenciamento de Quadras.
          </span>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[140px]">Dia</TableHead>
              <TableHead className="w-[140px]">Horario</TableHead>
              <TableHead className="w-[140px]">Quadra</TableHead>
              <TableHead className="w-[140px]">Cliente</TableHead>
              <TableHead className="w-[140px]">Recorrente</TableHead>
              <TableHead className="w-[140px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations.map((r) => (
              // eslint-disable-next-line react/jsx-key
              <ReservationsTableRow reservation={r} />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
