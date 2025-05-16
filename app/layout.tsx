import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Bela Wiertz',
  description: 'Welcome to my personal website',
  icons: {
    icon: [
      { url: '/profile.jpeg', type: 'image/jpeg' },
    ],
    shortcut: '/profile.jpeg',
    apple: '/profile.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex items-center gap-4 p-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/profile.jpeg"
              alt="Bela Wiertz"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span>Home</span>
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}