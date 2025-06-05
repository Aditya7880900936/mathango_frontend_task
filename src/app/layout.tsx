import './globals.css'

import type { Metadata } from 'next'
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'JEE Physics PYQ Platform',
  description: 'Chapter-wise Collection of Physics Previous Year Questions',
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}