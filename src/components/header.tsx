import { CalendarDays, Home, LandPlot } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export interface HeaderProps {}

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-14 items-center gap-6 px-6">
        <LandPlot className="h-5 w-5" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/">
            <CalendarDays className="h-4 w-4" />
            Horarios
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
