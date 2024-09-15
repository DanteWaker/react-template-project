import { useState } from 'react'

export const useMenuSwitch = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleSwitchIsMenuOpen = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return {
    toggleSwitchIsMenuOpen,
    isMenuOpen,
  }
}
