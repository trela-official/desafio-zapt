/**
 * This function sets the number of
 * masonry columns for each breakpoint
 * (mobile, tablet, desktop, large desktop)
 */

type MasonryBreakpoints = {
  mobile: number
  tablet: number
  desktop: number
  largeDesktop: number
}

export const buildResponsiveObject = ({
  mobile,
  tablet,
  desktop,
  largeDesktop
}: MasonryBreakpoints) => {
  return {
    576: mobile,
    768: tablet,
    992: desktop,
    1200: largeDesktop
  }
}
