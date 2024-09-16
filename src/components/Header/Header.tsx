import { HelpButton } from './components/HelpButton/HelpButton'
import { MenuSwitch } from './components/MenuSwitch'
import { Profile } from './components/Profile'
import { SideMenu } from './components/SideMenu'
import { TChildComponentProps } from './Header.types'
import { useMenuSwitch } from './hooks'

export function Header({ children }: TChildComponentProps) {
  const { toggleSwitchIsMenuOpen, isMenuOpen } = useMenuSwitch()

  return (
    <section>
      <header className="relative z-20 flex h-[8vh] items-center justify-between bg-white p-6 shadow-md">
        <div className="flex items-center">
          <MenuSwitch
            toggleSwitchIsMenuOpen={toggleSwitchIsMenuOpen}
            isMenuOpen={isMenuOpen}
          />
          <h1 className="mx-5 text-center text-3xl font-semibold text-primary">
            ãcme
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <HelpButton />
          <Profile />
        </div>
      </header>
      <section className="flex">
        <SideMenu isMenuOpen={isMenuOpen} />
        {children}
      </section>
    </section>
  )
}
