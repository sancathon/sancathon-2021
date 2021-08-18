import { extendTheme } from '@chakra-ui/react'

// Foundational style overrides
import { foundations } from './foundations'
// Global style overrides
import { styles } from './styles'

// Theme config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

export const theme = extendTheme({
  config,
  styles,
  ...foundations
})
