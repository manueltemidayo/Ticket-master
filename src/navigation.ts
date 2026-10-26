import type { ComponentType } from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

export type NavigationItem = {
  label: string
  path: string
  icon: ComponentType<SvgIconProps>
}

export const MOBILE_NAVIGATION_ID = 'mobile-navigation'

export const navigationItems: NavigationItem[] = [
  { label: 'Dashboard', path: '/', icon: DashboardOutlinedIcon },
  { label: 'Events', path: '/events', icon: EventOutlinedIcon },
  { label: 'Attendees', path: '/attendees', icon: PeopleAltOutlinedIcon },
  { label: 'Check-in', path: '/check-in', icon: QrCodeScannerOutlinedIcon },
  { label: 'Settings', path: '/settings', icon: SettingsOutlinedIcon },
]

export function isNavigationItemActive(path: string, pathname: string) {
  if (path === '/') {
    return pathname === '/'
  }

  return pathname === path || pathname.startsWith(`${path}/`)
}

export function getCurrentNavigationItem(pathname: string) {
  return navigationItems.find((item) => isNavigationItemActive(item.path, pathname))
}
