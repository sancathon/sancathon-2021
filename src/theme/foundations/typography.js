import { extendTheme } from "@chakra-ui/react"
import "@fontsource/trochut"
import "@fontsource/mulish"
import "@fontsource/roboto"

export const typography = extendTheme( {
  fontSizes: {
    '6xl': '4rem'
  },

  fonts: {
    body: `"Mulish","Roboto"`,
    heading: `"Trochut", "Roboto"`,
    mono: `"Courier New",Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace`
  },

  lineHeights: {
    little: 1.11
  }
})
