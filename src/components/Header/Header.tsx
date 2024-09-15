import { HelpButton } from './components/HelpButton/HelpButton'
import { MenuSwitch } from './components/MenuSwitch'
import { Profile } from './components/Profile'
import { useMenuSwitch } from './hooks'

export function Header() {
  const { toggleSwitchIsMenuOpen, isMenuOpen } = useMenuSwitch()

  return (
    <section>
      <header className="flex items-center justify-between p-6 shadow-md">
        <div className="flex items-center">
          <MenuSwitch
            toggleSwitchIsMenuOpen={toggleSwitchIsMenuOpen}
            isMenuOpen={isMenuOpen}
          />
          <h1 className="mx-5 text-center text-2xl font-bold text-primary">
            ãcme
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <HelpButton />
          <Profile />
        </div>
      </header>
      <section>
        <div>a</div>
      </section>
    </section>
  )
}
