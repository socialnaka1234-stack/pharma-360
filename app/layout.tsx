import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pharma 360 - Pharmaceutical Careers Platform',
  description: 'Direct connection platform for pharmaceutical careers and job marketplace',
  keywords: ['pharmaceutical', 'careers', 'jobs', 'networking', 'professionals'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
