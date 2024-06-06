import { api } from '@/lib/axios'

export interface Court {
  id: string
  name: string
  type: string
  value: string
  road: string
  city: string
  number: string
  reference: string
  neighborhood: string
  fk_user: string
}

export interface ReturningTimes {
  id: string
  hour: string
  status: string
}

export interface CourtInfoObject {
  court: Court
  returningTimes: ReturningTimes[]
}

export async function getCourtInfo(id: string, date: string) {
  const response = await api.get(`/court/getCourtInfo/${id}/${date}`)
  return response.data
}
