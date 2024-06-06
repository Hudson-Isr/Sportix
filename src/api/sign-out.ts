import { api } from '@/lib/axios'

export async function singOut() {
  return localStorage.clear()
}
