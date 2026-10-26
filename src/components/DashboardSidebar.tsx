import { NavLink, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import { isNavigationItemActive, MOBILE_NAVIGATION_ID, navigationItems } from '../navigation'
import { designTokens } from '../theme'

const DRAWER_WIDTH = 264

type DashboardSidebarProps = {
  mobileOpen: boolean
  onClose: () => void
}

const navItemSx = {
  borderRadius: '10px',
  color: designTokens.colors.textMuted,
  mb: '4px',
  px: 1.5,
  py: 1.25,
  '&:hover': {
    backgroundColor: designTokens.colors.surfaceMuted,
    color: designTokens.colors.text,
  },
  '&.Mui-selected': {
    backgroundColor: designTokens.colors.primarySoft,
    color: designTokens.colors.primarySoftText,
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#EFD9C9',
  },
  '&.Mui-focusVisible': {
    outline: `2px solid ${designTokens.colors.primary}`,
    outlineOffset: 2,
  },
}

export default function DashboardSidebar({
  mobileOpen,
  onClose,
}: DashboardSidebarProps) {
  const { pathname } = useLocation()

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: designTokens.colors.sidebar,
        color: designTokens.colors.text,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          px: 2.5,
          py: 2.5,
          borderBottom: `1px solid ${designTokens.colors.divider}`,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            placeItems: 'center',
            width: 38,
            height: 38,
            borderRadius: '10px',
            backgroundColor: designTokens.colors.primary,
            color: '#FFF9F1',
            flexShrink: 0,
          }}
        >
          <ConfirmationNumberOutlinedIcon fontSize="small" />
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography
            component="p"
            sx={{
              color: designTokens.colors.text,
              fontSize: 15,
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            TicketMaster
          </Typography>
          <Typography
            component="p"
            sx={{
              color: designTokens.colors.textMuted,
              fontSize: 11.5,
              lineHeight: 1.4,
            }}
          >
            Organizer console
          </Typography>
        </Box>
      </Box>

      <Box
        component="nav"
        aria-label="Primary navigation"
        sx={{ flexGrow: 1, overflowY: 'auto', px: 1.5, py: 2 }}
      >
        <Typography
          component="p"
          sx={{
            px: 1.5,
            mb: 1,
            color: designTokens.colors.textMuted,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '0.09em',
            lineHeight: 1.4,
            textTransform: 'uppercase',
          }}
        >
          Workspace
        </Typography>

        <List disablePadding>
          {navigationItems.map((item) => {
            const isActive = isNavigationItemActive(item.path, pathname)
            const Icon = item.icon

            return (
              <ListItemButton
                key={item.path}
                component={NavLink}
                to={item.path}
                selected={isActive}
                aria-current={isActive ? 'page' : undefined}
                onClick={onClose}
                sx={navItemSx}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    color: isActive
                      ? designTokens.colors.primarySoftText
                      : 'inherit',
                  }}
                >
                  <Icon fontSize="small" />
                </ListItemIcon>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 13,
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: '0.005em',
                  }}
                >
                  {item.label}
                </Typography>
              </ListItemButton>
            )
          })}
        </List>
      </Box>

      <Box
        sx={{
          px: 2.5,
          py: 2,
          borderTop: `1px solid ${designTokens.colors.divider}`,
        }}
      >
        <Typography
          component="p"
          sx={{ color: designTokens.colors.textMuted, fontSize: 11.5 }}
        >
          Event ticketing workspace
        </Typography>
      </Box>
    </Box>
  )

  return (
    <Box component="aside" sx={{ flexShrink: 0 }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          width: DRAWER_WIDTH,
          flexShrink: 0,
        }}
        slotProps={{
          paper: {
            sx: {
              width: DRAWER_WIDTH,
              boxSizing: 'border-box',
              border: 0,
              borderRight: `1px solid ${designTokens.colors.border}`,
              backgroundColor: designTokens.colors.sidebar,
              boxShadow: 'none',
            },
          },
        }}
      >
        {content}
      </Drawer>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
        slotProps={{
          paper: {
            id: MOBILE_NAVIGATION_ID,
            sx: {
              width: DRAWER_WIDTH,
              boxSizing: 'border-box',
              border: 0,
              borderRight: `1px solid ${designTokens.colors.border}`,
              borderRadius: '0 16px 16px 0',
              backgroundColor: designTokens.colors.sidebar,
            },
          },
        }}
      >
        {content}
      </Drawer>
    </Box>
  )
}
