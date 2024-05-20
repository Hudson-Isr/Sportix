import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
  password: string
}

export async function signIn(login: SignInBody) {
  const response = await api.post('/login', login)

  return response.data
}
// import { Helmet } from 'react-helmet-async'
// import { useForm } from 'react-hook-form'
// import { toast } from 'sonner'
// import { z } from 'zod'

// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

// const singInForm = z.object({
//   email: z.string().email(),
//   password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
// })

// type SingInForm = z.infer<typeof singInForm>

// export function Singin() {
//   const {
//     register,
//     handleSubmit,
//     formState: { isSubmitting },
//   } = useForm<SingInForm>()

//   // Função de Login conexão api
//   async function login(user: { email: string }) {
//     const response = await fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     })
//     if (!response.ok) {
//       throw new Error('Login falhou')
//     }
//     const data = await response.json()
//     return data
//   }

//   async function getTokenFromLocalStorage() {
//     const token = localStorage.getItem('access_token')

//     if (!token) {
//       throw new Error('Token não encontrado')
//     }
//     return token
//   }

//   async function handleSingIn(data: SingInForm) {
//     try {
//       const result = await login(data)

//       localStorage.setItem('access_token', result.access_token)

//       // Exemplo de criação da quadra
//       const courtBody = {
//         name: 'Quadra grande são pedro',
//         road: 'Avenida Padre Cícero',
//         neighborhood: 'Centro',
//         city: 'Juazeiro do Norte',
//         number: '1111',
//         reference: 'Perto do shopping',
//       }

//       await exempleRequestWithToken(
//         'http://localhost:3000/court/create',
//         courtBody,
//       )

//       toast.success('Foi enviado um link para autenticação em seu E-mail', {
//         action: {
//           label: 'Reenviar',
//           onClick: () => handleSingIn(data),
//         },
//       })
//     } catch (error) {
//       console.error(error)
//       toast.error('E-mail inválido ou erro de login.')
//     }
//   }

//   async function exempleRequestWithToken(root: string, data: unknown) {
//     const token = await getTokenFromLocalStorage()

//     const response = await fetch(root, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(data),
//     })

//     if (!response.ok) {
//       throw new Error('Falha na requisição')
//     }

//     const responseData = await response.json()
//     return responseData
//   }
//   return (
//     <>
//       <Helmet title="Login" />
//       <div className="p-8">
//         <div className="flex w-[350px] flex-col justify-center gap-6">
//           <div className="flex flex-col gap-2 text-center">
//             <h1 className="text-2xl font-semibold tracking-tight">
//               Agende já sua quadra!
//             </h1>
//             <p className="text-sm text-muted-foreground">
//               Verifiquei o melhor horário para sua partida!
//             </p>
//           </div>

//           <form onSubmit={handleSubmit(handleSingIn)} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Seu E-mail</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 {...register('email')}
//                 placeholder="teste@teste.com"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="password">Sua Senha</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 {...register('password')}
//                 placeholder="senha"
//               />
//             </div>
//             <Button disabled={isSubmitting} className="w-full" type="submit">
//               login
//             </Button>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }
