import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { getProfile } from '@/api/get-profile'

import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

const profileDialogSchema = z.objects({
  name: z.string().min(1),
  apelido: z.string(),
  email: z.string(),
  senha: z.string(),
})

type profileDialogSchema = z.infer<typeof profileDialogSchema>

export function ProfileDialog() {
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })

  const { register, handleSubmit } = useForm<profileDialogSchema>({
    resolver: zodResolver(profileDialogSchema),
    defaultValues{
        name: profile?.name
        email: profile?.email
    }
  })
  // const { mutateAsync: updateProfileFn } = useMutation({
  //     mutation: updateProfile,
  // })

  // async function updateProfile(data: )

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil do Usuário</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu cadastro
        </DialogDescription>
      </DialogHeader>

      <form>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" type="text" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="apelido">
              Apelido
            </Label>
            <Input className="col-span-3" id="apelido" type="text" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="email">
              E-mail
            </Label>
            <Input className="col-span-3" id="email" type="email" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="password">
              Senha
            </Label>
            <Input className="col-span-3" id="password" type="password" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" type="button">
            Cancelar
          </Button>
          <Button variant="sucessed" type="submit">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
