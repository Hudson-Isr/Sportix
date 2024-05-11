import { NavLink } from './nav-link'

"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export interface HeaderProps {}

export function Header() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top"> <NavLink to="/">Início</NavLink></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top"><NavLink to="/reservations">Reservas</NavLink></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top"><NavLink to="/orders">Pagamentos</NavLink></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top"><NavLink to="/schedules">Horários</NavLink></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top"><NavLink to="/courts">Quadras</NavLink></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top"><NavLink to="/teste">Testes</NavLink></DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
