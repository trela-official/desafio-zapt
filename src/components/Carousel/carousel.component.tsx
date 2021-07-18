import ElasticCarousel, { RenderArrowProps } from 'react-elastic-carousel'

/**
 * This enum sets the arrow direction possibilities
 * https://github.com/sag1v/react-elastic-carousel/blob/6f129b51bf39b36d31375e39c66a8f0c4b669076/src/react-elastic-carousel/index.d.ts#L6
 */

enum CarouselConsts {
  PREV = 'PREV',
  NEXT = 'NEXT'
}

interface CarouselProps {
  children: React.ReactNode
}

export const Carousel = ({ children }: CarouselProps) => {
  const rendeArrow = ({ type, onClick, isEdge }: RenderArrowProps) => {
    const pointer = type === CarouselConsts.PREV ? '<' : '>'
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }

  return (
    <ElasticCarousel
      isRTL={false}
      renderArrow={rendeArrow}
      breakPoints={breakPoints}
    >
      {children}
    </ElasticCarousel>
  )
}

const breakPoints = [
  { width: 768, itemsToShow: 1 },
  { width: 992, itemsToShow: 2, itemsToScroll: 2 }
]
