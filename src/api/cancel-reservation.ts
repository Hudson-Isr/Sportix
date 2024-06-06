import { api } from '@/lib/axios'

export interface CancelReservation {
  id: string
  type_reserve: string
  date?: string
}

export async function cancelReservation(cancelReservation: CancelReservation) {
  await api.put('/court/cancelReservation', cancelReservation)
}
