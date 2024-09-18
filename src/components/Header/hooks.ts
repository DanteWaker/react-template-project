import { screenWidth } from '@/config'
import { useEffect, useState } from 'react'

export const useMenuSwitch = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = screenWidth === 'mobile'

  useEffect(() => {
    isMobile ? setIsMenuOpen(false) : setIsMenuOpen(true)
  }, [])

  const toggleSwitchIsMenuOpen = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return {
    toggleSwitchIsMenuOpen,
    isMenuOpen,
  }
}
