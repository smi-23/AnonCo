import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import Header from '@/components/header/Header'
import type { Metadata } from 'next'
import CustomThemeProvider from '@/context/CustomThemeProvider'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'AnonCo',
  description: 'Community for Anonymous',
}

const pretendard = localFont({
  src: '../../public/assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
  preload: true,
  adjustFontFallback: false,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.className} suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: false }}>
          <CustomThemeProvider>
            <InitColorSchemeScript attribute="class" />
            <Header />
            {children}
          </CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
