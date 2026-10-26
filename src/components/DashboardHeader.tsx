import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { MOBILE_NAVIGATION_ID } from '../navigation'
import { designTokens } from '../theme'

type DashboardHeaderProps = {
  title: string
  navigationOpen: boolean
  action: {
    label: string
    to: string
  }
  onOpenNavigation: () => void
}

export default function DashboardHeader({
  title,
  navigationOpen,
  action,
  onOpenNavigation,
}: DashboardHeaderProps) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        backgroundColor: 'rgba(255, 253, 249, 0.94)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${designTokens.colors.border}`,
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 64, sm: 72 },
          gap: { xs: 1, sm: 1.5 },
          px: { xs: 2, sm: 3, lg: 4 },
        }}
      >
        <IconButton
          edge="start"
          aria-label="Open navigation menu"
          aria-controls={MOBILE_NAVIGATION_ID}
          aria-expanded={navigationOpen}
          onClick={onOpenNavigation}
          sx={{
            display: { md: 'none' },
            ml: -0.5,
            color: designTokens.colors.text,
          }}
        >
          <MenuOutlinedIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography
            component="p"
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: designTokens.colors.textMuted,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.02em',
              lineHeight: 1.3,
            }}
          >
            Organizer console
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            noWrap
            sx={{
              color: designTokens.colors.text,
              fontSize: { xs: 19, sm: 21 },
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>
        </Box>

        <Button
          component={Link}
          to={action.to}
          variant="contained"
          size="small"
          sx={{
            flexShrink: 0,
            whiteSpace: 'nowrap',
            minHeight: 36,
            px: { xs: 1.5, sm: 2 },
            fontSize: { xs: 12, sm: 13 },
          }}
        >
          {action.label}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
