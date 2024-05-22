import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  cpf: string
  phoneNumber: string
  //  apelido: string | null
}

export async function updateProfile({
  name,
  cpf,
  phoneNumber,
  // apelido,
}: UpdateProfileBody) {
  await api.put('/user/editUser', { name, cpf, phoneNumber })
}
