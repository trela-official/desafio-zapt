import React from 'react'
import ElasticCarousel from 'react-elastic-carousel'

interface CarouselProps {
  children: React.ReactNode
}

export const Carousel = ({ children }: CarouselProps) => (
  <ElasticCarousel isRTL={false} breakPoints={breakPoints} disableArrowsOnEnd>
    {children}
  </ElasticCarousel>
)

const breakPoints = [
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 2, itemsToScroll: 2 }
]
