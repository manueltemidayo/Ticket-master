import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import { designTokens } from '../theme'

export default function DashboardPage() {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 3, sm: 4 },
        borderRadius: '16px',
        borderColor: designTokens.colors.border,
        backgroundColor: designTokens.colors.surface,
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        sx={{ alignItems: { xs: 'flex-start', sm: 'center' } }}
      >
        <Box
          sx={{
            display: 'grid',
            placeItems: 'center',
            width: 56,
            height: 56,
            borderRadius: '12px',
            backgroundColor: designTokens.colors.primarySoft,
            color: designTokens.colors.primarySoftText,
            flexShrink: 0,
          }}
        >
          <ConfirmationNumberOutlinedIcon />
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <Typography
            component="h2"
            variant="h5"
            sx={{ fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            Welcome to your workspace
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ mt: 1, maxWidth: 560, fontSize: 14.5 }}
          >
            Use the sidebar to navigate between events, attendees, check-in, and
            settings.
          </Typography>
        </Box>
      </Stack>
    </Paper>
  )
}
