import ReactMasonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { buildResponsiveObject } from './masonry.utils'

interface MasonryProps {
  children: React.ReactNode
  mobile?: number
  tablet?: number
  desktop?: number
  largeDesktop?: number
  gutter?: string
}

export const Masonry = ({
  children,
  mobile = 1,
  tablet = 2,
  desktop = 2,
  largeDesktop = 3,
  gutter = '16px'
}: MasonryProps) => (
  <ResponsiveMasonry
    columnsCountBreakPoints={buildResponsiveObject({
      mobile,
      tablet,
      desktop,
      largeDesktop
    })}
  >
    <ReactMasonry gutter={gutter}>{children}</ReactMasonry>
  </ResponsiveMasonry>
)
