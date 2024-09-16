import { Link } from '@tanstack/react-router'
import { TSideMenuProps } from './SideMenu.types'
import menuItems from './utils'
import { useSideMenu } from './hooks'

const menuClasses =
  'flex w-full items-center justify-start py-4 px-8 gap-4 text-xl'

export const SideMenu = ({ isMenuOpen }: TSideMenuProps) => {
  const { checkIsActive } = useSideMenu()

  return (
    <menu
      className={`duration-250 relative z-10 flex h-[92vh] flex-col bg-white py-6 text-secondary-foreground shadow-md transition-all ${isMenuOpen ? 'w-96' : 'w-[0px]'}`}
    >
      {isMenuOpen && (
        <>
          {menuItems.map((menuItem) => (
            <>
              {menuItem.subMenu.length > 0 ? (
                <div className="flex flex-col">
                  <div className={menuClasses}>
                    {menuItem.icon}
                    {menuItem.title}
                  </div>
                  <div className="flex flex-col">
                    {menuItem.subMenu.map((submenu) => (
                      <Link
                        to={submenu.path}
                        className={`gap-4 py-2 pl-24 text-lg ${checkIsActive(submenu.path) && 'border-l-8 border-primary font-semibold text-black'}`}
                      >
                        {submenu.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={menuItem.path} className={menuClasses}>
                  {menuItem.icon}
                  {menuItem.title}
                </Link>
              )}
            </>
          ))}
        </>
      )}
    </menu>
  )
}
