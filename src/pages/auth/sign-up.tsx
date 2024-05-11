import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signUp } from '@/api/register'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  name: z.string(),
  cpf: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  password1: z.string(),
  password2: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const { mutateAsync: registerUser } = useMutation({
    mutationFn: signUp,
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerUser({
        email: data.email,
        password1: data.password1,
        password2: data.password2,
        cpf: data.cpf,
        name: data.name,
        phoneNumber: data.phoneNumber,
      })

      toast.success('Conta criada com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch {
      toast.error('Erro ao realizar o cadastro.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crie sua conta!
            </h1>
            <p className="text-sm text-muted-foreground">
              Agende agora o melhor horario para você!
            </p>
          </div>

          <form
            method="post"
            onSubmit={handleSubmit(handleSignUp)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                type="text"
                {...register('name')}
                placeholder="Digite seu nome completo aqui!"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">CPF</Label>
              <Input
                id="cpf"
                type="text"
                {...register('cpf')}
                placeholder="Digite seu nome completo aqui!"
              />
            </div>

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
              <Label htmlFor="phoneNumber">Telefone</Label>
              <Input
                id="phoneNumber"
                type="tel"
                {...register('phoneNumber')}
                placeholder="(xx) 9 9999-9999"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password1">Senha</Label>
              <Input
                id="password1"
                type="password"
                {...register('password1')}
                placeholder="Crie sua Senha"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password2">Comfirme sua Senha</Label>
              <Input
                id="password2"
                type="password"
                {...register('password2')}
                placeholder="Repita a senha"
              />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar Cadastro
            </Button>

            <Button asChild className="w-full" variant="secondary">
              <Link to="/sign-in">Fazer Login</Link>
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a href="" className="underline underline-offset-4">
                {' '}
                termos de serviços{' '}
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                politicas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
