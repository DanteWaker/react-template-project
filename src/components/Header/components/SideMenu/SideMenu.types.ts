import { ReactNode } from 'react'

export type TSideMenuProps = {
  isMenuOpen: boolean
}

export type SubMenuItem = {
  title: string
  path: string
}

export type MenuItem = {
  title: string
  icon: ReactNode
  path: string
  subMenu: SubMenuItem[]
}
