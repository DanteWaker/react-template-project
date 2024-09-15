import { TMenuSwitch } from './MenuSwitch.types'

export const MenuSwitch = ({
  toggleSwitchIsMenuOpen,
  isMenuOpen,
}: TMenuSwitch) => {
  return (
    <button
      className="relative flex h-6 w-8 flex-col items-center justify-center gap-[6px]"
      onClick={toggleSwitchIsMenuOpen}
    >
      <div
        className={`duration-250 h-1 w-full rounded-full bg-secondary transition-all ${isMenuOpen && 'absolute rotate-45'}`}
      />
      <div
        className={`duration-250 h-1 w-full rounded-full bg-secondary transition-all ${isMenuOpen && 'hidden'}`}
      />
      <div
        className={`duration-250 h-1 w-full rounded-full bg-secondary transition-all ${isMenuOpen && 'absolute -rotate-45'}`}
      />
    </button>
  )
}
