import { LandPlot } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import { ThemeToggle } from '@/components/theme/theme-toggle'

import { CarouselPlugin } from '../carousel-sign'

export function AuthLayout() {
  return (
    <div className="min-h-screen grid-cols-2 antialiased lg:grid lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div className="flex flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center justify-between gap-3 text-lg font-medium text-foreground">
          <div className="flex items-center gap-3">
            <LandPlot className="h-5 w-5" />
            <span className="font-semibold">Sportix</span>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
        {/* <div className="flex h-[800px] w-[800px] ">
          <video src="./public/video-teste.mp4" autoPlay muted loop />
        </div> */}
        <CarouselPlugin />
        <footer className="text-sm">
          &copy; Sportix - {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}
