import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Netflix',
  description: 'Netflix app',
  themeColor: 'black',
  colorScheme: 'black',
  keyword: ['netflix', 'nextflix app', 'nextflix movie'],
  icons: {
    icon: ['/favicon/favicon.ico', '/favicon/android-chrome-192x192.png', '/favicon/android-chrome-512x512.png',],
    apple: ['/favicon/apple-touch-icon.png'],
    shortcut: ['/favicon/apple-touch-icon.png']
  },
  manifeast: '/favicon/site.webmanifeast',

}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning={true}  >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
