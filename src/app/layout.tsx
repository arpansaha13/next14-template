import type { Metadata } from 'next'
import { Nav } from '~/components/navbar/Nav'
import { StoreProvider } from './StoreProvider'
import '~/styles/globals.css'

export const metadata: Metadata = {
  title: 'Next14 Template',
  description: 'Opinionated starter template for Next14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Do not apply spacing styles on body */}
      <body suppressHydrationWarning>
        <StoreProvider>
          <Nav />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
