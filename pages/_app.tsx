import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Playfair_Display, Montserrat} from '@next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${playfair.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
