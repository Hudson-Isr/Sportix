import { IconSoccerField } from '@tabler/icons-react'
import {
  // Banknote,
  BookCheck,
  CalendarDays,
  Home,
  LandPlot,
  Menu,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export interface HeaderProps {}

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-14 items-center gap-6 px-6 md:px-4">
        <NavLink
          to="/"
          className="flex items-center gap-4 text-lg font-semibold md:text-base"
        >
          <LandPlot className="h-5 w-5" />
          <span className="sr-only">Início</span>
          <Separator orientation="vertical" className="h-6" />
        </NavLink>
        <nav className="hidden text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Dashboard
          </NavLink>
          <NavLink to="/reservations">
            <BookCheck className="h-4 w-4" />
            Reservas
          </NavLink>
          {/* <NavLink
            to="/orders"

          >
            <Banknote className="h-4 w-4" />
            Pagamentos
          </NavLink> */}
          <NavLink to="/schedules">
            <CalendarDays className="h-4 w-4" />
            Horarios
          </NavLink>
          <NavLink to="/courts">
            <IconSoccerField className="h-4 w-4" />
            Quadras
          </NavLink>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <nav className="grid gap-6 text-lg font-medium">
              <NavLink
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <LandPlot className="h-5 w-5" />
                <span className="sr-only">Início</span>
              </NavLink>

              <NavLink to="/">
                <Home className="h-4 w-4" />
                Dashboard
              </NavLink>

              <NavLink to="/reservations">
                <BookCheck className="h-4 w-4" />
                Reservas
              </NavLink>

              {/* <NavLink
                to="/orders"

              >
                <Banknote className="h-4 w-4" />
                Pagamentos
              </NavLink> */}

              <NavLink to="/schedules">
                <CalendarDays className="h-4 w-4" />
                Horarios
              </NavLink>

              <NavLink to="/courts">
                <IconSoccerField className="h-4 w-4" />
                Quadras
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
