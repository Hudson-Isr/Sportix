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

import { ReservationsTableFilters } from './reservation-table-filters'
import { ReservationsTableRow } from './reservations-table-row'

export function Reservations() {
  const [reservations, setReservations] = useState<Reservation[]>([])

  const fetchReservations = async () => {
    try {
      const response = await getReservations()
      setReservations(response)
    } catch (error) {
      console.error('Erro ao buscar reservas:', error)
    }
  }

  useEffect(() => {
    fetchReservations()
  }, [])

  const handleReservationCancelled = () => {
    fetchReservations()
  }

  if (reservations.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Helmet title="Quadras" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Reservas</h1>
        <div className="space-y-5">
          <ReservationsTableFilters />

          <div className="rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[130px]">Dia</TableHead>
                  <TableHead className="w-[130px]">Horario</TableHead>
                  <TableHead className="w-[130px]">Quadra</TableHead>
                  <TableHead className="w-[130px]">Cliente</TableHead>
                  <TableHead className="w-[130px]">Status</TableHead>
                  <TableHead className="w-[130px]">Recorrente</TableHead>
                  <TableHead className="w-[130px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reservations.map((r) => (
                  <ReservationsTableRow
                    key={r.object.id}
                    reservation={r}
                    onReservationCancelled={handleReservationCancelled}
                  />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}
