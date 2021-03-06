import * as React from 'react'
import { useLocation } from 'react-router'
import { Menu as Sidebar, MenuConfig, ReapitLogo } from '@reapit/elements'
import Routes from '@/constants/routes'
import { Location } from 'history'
import { FaCloud, FaSignOutAlt, FaSearch, FaList } from 'react-icons/fa'
import { useReapitConnect } from '@reapit/connect-session'
import { reapitConnectBrowserSession } from '@/core/connect-session'

export const generateMenuConfig = (logoutCallback: () => void, location: Location<any>): MenuConfig => {
  return {
    defaultActiveKey: 'CLIENT_SEARCH',
    location,
    menu: [
      {
        key: 'LOGO',
        icon: <ReapitLogo className="nav-item-icon" />,
        type: 'LOGO',
      },
      {
        title: 'Search',
        key: 'CLIENT_SEARCH',
        icon: <FaSearch className="nav-item-icon" />,
        url: Routes.HOME,
        type: 'PRIMARY',
      },
      {
        title: 'Results',
        key: 'SEARCH_RESULTS',
        icon: <FaList className="nav-item-icon" />,
        url: Routes.RESULTS,
        type: 'PRIMARY',
      },
      {
        title: 'Apps',
        key: 'APPS',
        icon: <FaCloud className="nav-item-icon" />,
        callback: () => (window.location.href = window.reapit.config.marketplaceUrl),
        type: 'PRIMARY',
      },
      {
        title: 'Logout',
        key: 'LOGOUT',
        callback: logoutCallback,
        icon: <FaSignOutAlt className="nav-item-icon" />,
        type: 'SECONDARY',
      },
    ],
  }
}

export const Menu: React.FC = () => {
  const location = useLocation()
  const { connectLogoutRedirect, connectIsDesktop } = useReapitConnect(reapitConnectBrowserSession)
  const menuConfigs = generateMenuConfig(() => connectLogoutRedirect(), location)
  const desktopOptimisedMenu = connectIsDesktop
    ? {
        ...menuConfigs,
        menu: menuConfigs.menu.filter(config => config.key !== 'APPS' && config.key !== 'LOGOUT'),
      }
    : menuConfigs
  return <Sidebar {...desktopOptimisedMenu} location={location} />
}

export default Menu
