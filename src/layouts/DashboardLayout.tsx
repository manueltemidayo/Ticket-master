import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import DashboardHeader from '../components/DashboardHeader'
import DashboardSidebar from '../components/DashboardSidebar'
import { getCurrentNavigationItem } from '../navigation'

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  const currentItem = getCurrentNavigationItem(pathname)
  const headerAction =
    pathname === '/'
      ? { label: 'Open events', to: '/events' }
      : { label: 'Back to dashboard', to: '/' }

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100dvh',
        backgroundColor: 'background.default',
      }}
    >
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: 'fixed',
          top: 12,
          left: 12,
          zIndex: (theme) => theme.zIndex.modal + 1,
          transform: 'translateY(-150%)',
          px: 2,
          py: 1,
          borderRadius: '10px',
          border: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.paper',
          color: 'text.primary',
          boxShadow: '0 8px 24px rgba(70, 52, 38, 0.14)',
          fontSize: 14,
          fontWeight: 600,
          textDecoration: 'none',
          '&:focus-visible': {
            transform: 'translateY(0)',
            outline: '2px solid',
            outlineColor: 'primary.main',
          },
        }}
      >
        Skip to main content
      </Box>

      <DashboardSidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          minWidth: 0,
        }}
      >
        <DashboardHeader
          title={currentItem?.label ?? 'Dashboard'}
          navigationOpen={mobileOpen}
          action={headerAction}
          onOpenNavigation={() => setMobileOpen(true)}
        />

        <Box
          component="main"
          id="main-content"
          tabIndex={-1}
          sx={{
            width: '100%',
            maxWidth: 1440,
            mx: 'auto',
            flexGrow: 1,
            px: { xs: 2, sm: 3, lg: 4 },
            py: { xs: 3, sm: 4 },
            outline: 'none',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
