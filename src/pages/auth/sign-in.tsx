import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
})
type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') || '',
    },
  })

  const { mutateAsync: login } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await login({ email: data.email, password: data.password })

      toast.success('Foi enviado um link para autenticação em seu E-mail', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      })
    } catch {
      toast.error('E-mail ou Senha invalidos.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Criar Conta</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Agende já sua quadra!
            </h1>
            <p className="text-sm text-muted-foreground">
              Verifiquei o melhor horario para sua partida!
            </p>
          </div>

          <form
            method="post"
            onSubmit={handleSubmit(handleSignIn)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu E-mail</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="teste@teste.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="senha">Sua Senha</Label>
              <Input id="password" type="password" {...register('password')} />
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
