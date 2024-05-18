import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  email: string
  senha: string
  //  apelido: string | null
}

export async function updateProfile({
  name,
  email,
  senha,
  // apelido,
}: UpdateProfileBody) {
  await api.put('/user', { name, email, senha })
}
