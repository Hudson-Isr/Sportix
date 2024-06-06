import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFoundAdmin } from './pages/404-admin'
import { NotFoundUser } from './pages/404-user'
import { CourtInfo } from './pages/app/clientCourts/courtInfo'
import { ClientCourts } from './pages/app/clientCourts/courts'
import { ClientReservations } from './pages/app/clientReservations/clientReservations'
import { Courts } from './pages/app/courts/courts'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Reservations } from './pages/app/reservations/reservations'
import { Schedules } from './pages/app/schedules/schedules'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

// Função para verificar se o usuário é um administrador
const isAdmin = () => {
  return true
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: isAdmin() ? <NotFoundAdmin /> : <NotFoundUser />,
    children: [
      { path: '/schedules', element: <Schedules /> },
      // Verifica se o usuário é um administrador antes de mostrar as rotas protegidas
      {
        path: '/reservations',
        element: isAdmin() ? (
          <Reservations />
        ) : (
          <NotFoundUser /> || <NotFoundAdmin />
        ),
      },
      {
        path: '/',
        element: isAdmin() ? (
          <Dashboard />
        ) : (
          <NotFoundUser /> || <NotFoundAdmin />
        ),
      },
      {
        path: '/courts',
        element: isAdmin() ? <Courts /> : <NotFoundUser /> || <NotFoundAdmin />,
      },
      {
        path: '/clientCourts',
        element: isAdmin() ? (
          <ClientCourts />
        ) : (
          <NotFoundUser /> || <NotFoundAdmin />
        ),
      },
      {
        path: '/clientReservations',
        element: isAdmin() ? (
          <ClientReservations />
        ) : (
          <NotFoundUser /> || <NotFoundAdmin />
        ),
      },
      {
        path: '/courtInfo/:id/:date',
        element: isAdmin() ? (
          <CourtInfo />
        ) : (
          <NotFoundUser /> || <NotFoundAdmin />
        ),
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
