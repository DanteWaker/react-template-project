import { FaHome, FaChartBar, FaCommentDots, FaBullseye } from 'react-icons/fa'
import { MenuItem } from './SideMenu.types'

const iconVisual = 'w-8 h-8'

const menuItems: MenuItem[] = [
  {
    title: 'Home',
    icon: <FaHome className={iconVisual} />,
    path: '/',
    subMenu: [],
  },
  {
    title: 'Analysis',
    icon: <FaChartBar className={iconVisual} />,
    path: 'submenu',
    subMenu: [
      {
        title: 'Survey report',
        path: '/analysis/survey-report',
      },
      {
        title: 'Comparison',
        path: '/analysis/comparison',
      },
      {
        title: 'Custom polls',
        path: '/analysis/custom-polls',
      },
    ],
  },
  {
    title: 'Feedback',
    icon: <FaCommentDots className={iconVisual} />,
    path: '/feedback',
    subMenu: [],
  },
  {
    title: 'Goals',
    icon: <FaBullseye className={iconVisual} />,
    path: '/goals',
    subMenu: [],
  },
]

export default menuItems
