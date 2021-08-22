import { ChakraProvider } from '@chakra-ui/react'

import AppHead from '../components/app/Head'
import SEODefault from '../components/app/SEODefault'
import { theme } from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppHead />

      <SEODefault />

      <ChakraProvider resetCSS={true} theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
