import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 1500 }))

  return (
    <Carousel
      plugins={[plugin.current]}
      className="justify-center"
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {[
          '/2f5acb2212a232cf4f33ecc2d2027e1a.jpg',
          '/beach-tennis.jpg',
          '/Campeonato-de-Futvolei.jpg',
          '/o-que-é-vôlei-de-praia.jpg',
          '/volei_praia.jpeg',
        ].map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
