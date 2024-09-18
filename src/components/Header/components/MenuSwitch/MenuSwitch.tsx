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
        data-isOpen={isMenuOpen}
        className="duration-250 h-1 w-full rounded-full bg-secondary transition-all data-[isOpen=true]:absolute data-[isOpen=true]:rotate-45"
      />
      <div
        data-isOpen={isMenuOpen}
        className="duration-250 h-1 w-full rounded-full bg-secondary transition-all data-[isOpen=true]:hidden"
      />
      <div
        data-isOpen={isMenuOpen}
        className="duration-250 h-1 w-full rounded-full bg-secondary transition-all data-[isOpen=true]:absolute data-[isOpen=true]:-rotate-45"
      />
    </button>
  )
}
