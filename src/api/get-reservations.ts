import { api } from '@/lib/axios'

export interface ReservationObject {
  id: string
  date: string
  hour: string
  status: string
}

export interface Reservation {
  object: ReservationObject
  court: string
  client: string
  isRecurrence: boolean
  cancelable: boolean
  status: string
}

export async function getReservations() {
  const response = await api.get('/court/getReservedTimes')
  return response.data
}
