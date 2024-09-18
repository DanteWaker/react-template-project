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
          <HelpButton tooltipText="Por favor, busque ajuda no e-mail" />
          <Profile />
        </div>
      </header>
      <section className="flex">
        <menu
          className={`relative z-10 flex h-[92vh] flex-col bg-white py-6 text-secondary-foreground shadow-md transition-all duration-200 ${isMenuOpen ? 'w-[15vw]' : 'w-0'}`}
        >
          <SideMenu isMenuOpen={isMenuOpen} />
        </menu>
        <div
          className={`transition-all duration-200 ${isMenuOpen ? 'w-[85vw]' : 'w-full'}`}
        >
          {children}
        </div>
      </section>
    </section>
  )
}
