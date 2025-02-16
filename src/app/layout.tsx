import Header from '@/components/header/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AnonCo',
  description: 'Community for Anonymous',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
