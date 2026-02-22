import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevX Labs — Case Studies',
  description:
    'Human-centric digital experiences built by DevX Labs. Industry 5.0 practitioners across Customer Experience, Enterprise Architecture, AI-Ops, and Marketing Automation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
