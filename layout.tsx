import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nasi Uduk Betawi PO Subur X Sate Taichan D.R.A | Kuliner Malam Ciledug',
  description: 'Temenin Lapar Malam Kamu. Nikmati kelezatan Nasi Uduk Betawi autentik dan Sate Taichan D.R.A yang pedas gurih. Buka 18:00-02:00 WIB di Ciledug, Tangerang.',
  keywords: [
    'nasi uduk betawi ciledug',
    'sate taichan ciledug',
    'kuliner malam ciledug',
    'nasi uduk malam tangerang',
    'sate taichan tangerang',
    'nasi uduk betawi tangerang',
    'makanan malam ciledug',
    'street food jakarta',
    'kuliner betawi'
  ],
  authors: [{ name: 'Nasi Uduk Betawi PO Subur X Sate Taichan D.R.A' }],
  creator: 'Nasi Uduk Betawi PO Subur X Sate Taichan D.R.A',
  openGraph: {
    title: 'Nasi Uduk Betawi PO Subur X Sate Taichan D.R.A',
    description: 'Temenin Lapar Malam Kamu. Cita rasa khas Betawi dipadu sate taichan pedas gurih yang bikin nagih.',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
