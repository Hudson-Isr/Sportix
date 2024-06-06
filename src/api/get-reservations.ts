import { api } from '@/lib/axios'

export interface Reservation {
  id: string
  court: string
  client: string
  date: string
  hour: string
  status: string
  isRecurrence: boolean
}

export async function getReservations() {
  const response = await api.get('/court/getReservedTimes')
  return response.data
}
