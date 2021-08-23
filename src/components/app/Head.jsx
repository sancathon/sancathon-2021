import Head from 'next/head'

export default function AppHead() {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <link rel="apple-touch-icon" sizes="144x144" href="/img/move-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/move-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/move-icon.png"
      />

      <meta name="apple-mobile-web-app-title" content="Sancathon 2021" />
      <meta name="application-name" content="Sancathon 2021" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#ffffff" />

      <link
        rel="preload"
        href="/fonts/Mulish/Mulish-Regular.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/Mulish/Mulish-Bold.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/Roboto/Roboto-Regular.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/Roboto/Roboto-Black.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />

      <link href="/fonts/sancathon-fonts.css" rel="stylesheet" />
    </Head>
  )
}
