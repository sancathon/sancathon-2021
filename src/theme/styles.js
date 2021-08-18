import { mode } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props) => ({
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word'
    },
    '*::placeholder': {
      color: mode('gray.400', 'gray.400')(props)
    },
    body: {
      bg: mode('white', 'codGray')(props),
      color: mode('gray.800', 'gray.900')(props),
      fontFamily: 'body',
      lineHeight: 'base',
      transition: 'background-color 0.2s'
    },
    'html, body, #__next': {
      height: 'auto'
    }
  })
}
