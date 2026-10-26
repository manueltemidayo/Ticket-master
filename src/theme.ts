import { alpha, createTheme } from '@mui/material/styles'

export const designTokens = {
  colors: {
    background: '#F6F1E9',
    surface: '#FFFDF9',
    surfaceMuted: '#FBF7F1',
    sidebar: '#FFFCF7',
    border: '#E7DFD2',
    borderStrong: '#D9CDBD',
    divider: '#EFE8DD',
    text: '#2F2A24',
    textMuted: '#756D63',
    textSubtle: '#8B8176',
    primary: '#A14D2B',
    primaryHover: '#8A4023',
    primarySoft: '#F3E2D5',
    primarySoftText: '#8E4223',
    success: {
      background: '#E8F1E4',
      text: '#38643A',
    },
    warning: {
      background: '#F7ECD5',
      text: '#876017',
    },
    error: {
      background: '#F7E3DE',
      text: '#984334',
    },
  },
  radius: {
    control: '10px',
    card: '16px',
    dialog: '16px',
  },
  shadows: {
    drawer: '0 18px 48px rgba(70, 52, 38, 0.16)',
    dialog: '0 24px 64px rgba(70, 52, 38, 0.18)',
  },
} as const

const theme = createTheme({
  palette: {
    primary: {
      main: designTokens.colors.primary,
      light: '#C07A5A',
      dark: designTokens.colors.primaryHover,
      contrastText: '#FFF9F1',
    },
    secondary: {
      main: '#6F655A',
      light: '#9A8F82',
      dark: '#554D44',
      contrastText: '#FFF9F1',
    },
    success: {
      main: designTokens.colors.success.text,
      light: designTokens.colors.success.background,
      dark: '#2F5732',
      contrastText: '#FFFDF9',
    },
    warning: {
      main: designTokens.colors.warning.text,
      light: designTokens.colors.warning.background,
      dark: '#6F4E12',
      contrastText: '#FFFDF9',
    },
    error: {
      main: designTokens.colors.error.text,
      light: designTokens.colors.error.background,
      dark: '#7C3427',
      contrastText: '#FFFDF9',
    },
    background: {
      default: designTokens.colors.background,
      paper: designTokens.colors.surface,
    },
    text: {
      primary: designTokens.colors.text,
      secondary: designTokens.colors.textMuted,
      disabled: designTokens.colors.textSubtle,
    },
    divider: designTokens.colors.border,
  },
  typography: {
    fontFamily:
      '"Inter", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
    h4: {
      fontSize: '1.75rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    subtitle2: {
      fontWeight: 600,
    },
    body2: {
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.75rem',
    },
    button: {
      fontWeight: 600,
      letterSpacing: 0,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: designTokens.colors.background,
          color: designTokens.colors.text,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${designTokens.colors.border}`,
          borderRadius: designTokens.radius.card,
          boxShadow: 'none',
          backgroundColor: designTokens.colors.surface,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: designTokens.radius.control,
          fontWeight: 600,
          textTransform: 'none',
          '&.MuiButton-contained.MuiButton-colorPrimary': {
            backgroundColor: designTokens.colors.primary,
            color: '#FFF9F1',
            '&:hover': {
              backgroundColor: designTokens.colors.primaryHover,
            },
          },
          '&.MuiButton-outlined': {
            borderColor: designTokens.colors.borderStrong,
            color: designTokens.colors.text,
            backgroundColor: 'transparent',
            '&:hover': {
              borderColor: designTokens.colors.primary,
              backgroundColor: designTokens.colors.surfaceMuted,
            },
          },
          '&.MuiButton-outlined.MuiButton-colorPrimary': {
            borderColor: designTokens.colors.primary,
            color: designTokens.colors.primarySoftText,
            '&:hover': {
              borderColor: designTokens.colors.primaryHover,
              backgroundColor: alpha(designTokens.colors.primary, 0.05),
            },
          },
          '&.MuiButton-text': {
            color: designTokens.colors.primarySoftText,
            '&:hover': {
              backgroundColor: alpha(designTokens.colors.primary, 0.06),
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.radius.control,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.radius.control,
          backgroundColor: designTokens.colors.surface,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: designTokens.colors.borderStrong,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#CDBFAE',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: designTokens.colors.primary,
            borderWidth: 1.5,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            color: designTokens.colors.textSubtle,
            opacity: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: designTokens.colors.textMuted,
          '&.Mui-focused': {
            color: designTokens.colors.primarySoftText,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: 24,
          borderRadius: 999,
          fontSize: '0.75rem',
          fontWeight: 600,
          '&.MuiChip-filled.MuiChip-colorSuccess': {
            backgroundColor: designTokens.colors.success.background,
            color: designTokens.colors.success.text,
          },
          '&.MuiChip-filled.MuiChip-colorWarning': {
            backgroundColor: designTokens.colors.warning.background,
            color: designTokens.colors.warning.text,
          },
          '&.MuiChip-filled.MuiChip-colorError': {
            backgroundColor: designTokens.colors.error.background,
            color: designTokens.colors.error.text,
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: designTokens.colors.surface,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '11px 16px',
          borderColor: designTokens.colors.divider,
          fontSize: '0.8125rem',
        },
        head: {
          backgroundColor: designTokens.colors.surfaceMuted,
          color: designTokens.colors.textMuted,
          fontWeight: 600,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: alpha(designTokens.colors.primary, 0.035),
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: designTokens.radius.dialog,
          backgroundColor: designTokens.colors.surface,
          boxShadow: designTokens.shadows.dialog,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: designTokens.colors.surface,
          boxShadow: designTokens.shadows.drawer,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: designTokens.colors.divider,
        },
      },
    },
  },
})

export default theme
