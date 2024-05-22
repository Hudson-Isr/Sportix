import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getProfile, GetProfileResponse } from '@/api/get-profile'
import { updateProfile } from '@/api/update-profile'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

const profileDialogSchema = z.object({
  name: z.string().min(1),
  email: z.string(),
  senha: z.string(),
  cpf: z.string(),
  phoneNumber: z.string(),
})

type profileDialogSchema = z.infer<typeof profileDialogSchema>

export function ProfileDialog() {
  const queryClient = useQueryClient()

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<profileDialogSchema>({
    resolver: zodResolver(profileDialogSchema),
    values: {
      name: profile?.name ?? '',
      email: profile?.email ?? '',
      senha: profile?.senha ?? '',
      cpf: profile?.cpf ?? '',
      phoneNumber: profile?.phoneNumber ?? '',
    },
  })

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onSuccess(_, { name, cpf, phoneNumber }) {
      const cached = queryClient.getQueryData<GetProfileResponse>(['profile'])

      if (cached) {
        queryClient.setQueryData<GetProfileResponse>(['profile'], {
          ...cached,
          name,
          cpf,
          phoneNumber,
        })
      }
    },
  })

  async function handleUpdateProfile(data: profileDialogSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        cpf: data.cpf,
        phoneNumber: data.phoneNumber,
      })

      toast.success('Perfil atualizado com sucesso!')
    } catch {
      toast.error('Falha ao atualizar o perfil, tente novamente!')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil do Usuário</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu cadastro
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input
              className="col-span-3"
              id="name"
              type="text"
              {...register('name')}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="cpf">
              CPF
            </Label>
            <Input
              className="col-span-3"
              id="cpf"
              type="text"
              {...register('cpf')}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="phoneNumber">
              Telefone
            </Label>
            <Input
              className="col-span-3"
              id="phoneNumber"
              type="text"
              {...register('phoneNumber')}
            />
          </div>

          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="apelido">
              Apelido
            </Label>
            <Input className="col-span-3" id="apelido" type="text" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="email">
              E-mail
            </Label>
            <Input
              className="col-span-3"
              id="email"
              type="email"
              {...register('email')}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="password">
              Senha
            </Label>
            <Input
              className="col-span-3"
              id="password"
              type="password"
              {...register('senha')}
            />
          </div> */}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="sucessed" type="submit" disabled={isSubmitting}>
              Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
