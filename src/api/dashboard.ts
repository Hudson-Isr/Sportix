import { api } from '@/lib/axios'

export interface GetReservesOfDay {
  ammount: number
  comparative: number
  situation: string
  percentageColorClass: string
}

export interface GetReservesOfMonth {
  ammount: number
  comparative: number
  situation: string
  percentageColorClass: string
}

export interface GetRevenueOfMonth {
  ammount: number
  comparative: number
  situation: string
  percentageColorClass: string
}

export interface GetCanceledsOfMonth {
  ammount: number
  comparative: number
  situation: string
  percentageColorClass: string
}

export interface GetRevenuePerDay {
  Sunday: number
  Monday: number
  Tuesday: number
  Wednesday: number
  Thursday: number
  Friday: number
  Saturday: number
}

export interface GetRevenuePerMonth {
  january: number
  february: number
  march: number
  april: number
  may: number
  june: number
  july: number
  august: number
  september: number
  october: number
  november: number
  december: number
}

export async function getReservesOfDay() {
  const response = await api.get('/dashBoard/reservesOfDay')
  return response.data
}

export async function getReservesOfMonth() {
  const response = await api.get('/dashBoard/reservesOfMonth')
  return response.data
}

export async function getRevenueOfMonth() {
  const response = await api.get('/dashBoard/revenueOfMonth')
  return response.data
}

export async function getCanceledsOfMonth() {
  const response = await api.get('/dashBoard/canceledsOfMonth')
  return response.data
}

export async function getRevenuePerDay() {
  const response = await api.get('/dashBoard/revenuePerDay')
  return response.data
}

export async function getRevenuePerMonth() {
  const response = await api.get('/dashBoard/revenuesPerMonth')
  return response.data
}
