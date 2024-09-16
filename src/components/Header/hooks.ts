import { useState } from 'react'

export const useMenuSwitch = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const toggleSwitchIsMenuOpen = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return {
    toggleSwitchIsMenuOpen,
    isMenuOpen,
  }
}
