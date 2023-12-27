import Head from 'next/head'
import '../styles/main.css'

async function getData() {
  const res = await fetch('https://api.github.com/users/vercel', {cache: "no-store"})
  const json = await res.json()
  return json
}
export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
