import { useMediaQuery } from 'oks-ui'

export { useMediaQuery }
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)', true)
export const useIsMobile = () => !useMediaQuery('(min-width: 768px)', true)
