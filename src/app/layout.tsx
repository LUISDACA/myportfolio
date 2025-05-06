import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mi Portafolio Profesional',
  description: 'Portafolio profesional desarrollado con Next.js, TypeScript y TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark text-light min-h-screen`}>
        {children}
      </body>
    </html>
  )
}