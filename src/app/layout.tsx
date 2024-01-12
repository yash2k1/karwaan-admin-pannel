import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { Providers } from '@/redux/provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--default-font' 
})

export const metadata: Metadata = {
  title: 'Karwaan - Admin pannel',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Toaster/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
