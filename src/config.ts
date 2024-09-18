import { CustomBreakpoints } from './types/config.types'

export const BUSINESS_NAME = 'ãcme'

const customBreakpoints: CustomBreakpoints = {
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
}

const getCustomBreakpoint = (width: number): string => {
  switch (true) {
    case width >= customBreakpoints.desktop:
      return 'desktop'
    case width >= customBreakpoints.laptop:
      return 'laptop'
    case width >= customBreakpoints.tablet:
      return 'tablet'
    default:
      return 'mobile' // abaixo de 640px, considerado 'mobile'
  }
}

export const screenWidth = getCustomBreakpoint(window.innerWidth)
