import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined'
import { designTokens } from '../theme'

type PlaceholderPageProps = {
  title: string
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        maxWidth: 720,
        p: { xs: 3, sm: 4 },
        borderRadius: '16px',
        borderColor: designTokens.colors.border,
        backgroundColor: designTokens.colors.surface,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
          width: 48,
          height: 48,
          mb: 2,
          borderRadius: '12px',
          backgroundColor: designTokens.colors.primarySoft,
          color: designTokens.colors.primarySoftText,
        }}
      >
        <ConstructionOutlinedIcon fontSize="small" />
      </Box>

      <Typography
        component="h2"
        variant="h6"
        sx={{ fontWeight: 700, letterSpacing: '-0.01em' }}
      >
        Coming soon
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1, fontSize: 14 }}>
        The {title} section is not available yet.
      </Typography>
    </Paper>
  )
}
