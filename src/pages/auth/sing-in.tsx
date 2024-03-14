import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const singInForm = z.object({
  email: z.string().email(),
})

type SingInForm = z.infer<typeof singInForm>

export function Singin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SingInForm>()

  async function handleSingIn(data: SingInForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Foi enviado um link para autenticação em seu E-mail', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSingIn(data),
        },
      })
    } catch {
      toast.error('E-mail invalido.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Agende já sua quada!
            </h1>
            <p className="text-sm text-muted-foreground">
              Verifiquei o melhor horario para sua partida!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSingIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu E-mail</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="teste@teste.com"
              />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              login
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
