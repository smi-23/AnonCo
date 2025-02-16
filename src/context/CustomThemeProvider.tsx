'use client'

import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { ReactNode, useMemo } from 'react'

export default function CustomThemeProvider({ children }: { children: ReactNode }) {
  const theme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        typography: {
          fontFamily: 'var(--font-pretendard)',
        },
        cssVariables: {
          colorSchemeSelector: 'class',
          disableCssColorScheme: true,
        },
        colorSchemes: {
          light: {
            palette: {
              primary: {
                main: '#fff',
              },
              text: {
                primary: '#000000',
              },
            },
          },
          dark: {
            palette: {
              primary: {
                main: '#121212',
              },
              text: {
                primary: '#fff',
              },
            },
          },
        },
      }),
    )
  }, [])
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  )
}
