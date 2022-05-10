import '@css/globals.scss'
import '@css/reset.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default MyApp
