import "@fontsource/jost"
import "@fontsource/jost/400.css"
import "@fontsource/jost/400-italic.css"
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#070606', '#F8F9F9')(props),
      color: mode('#F8F9F9', '#070606')(props),
      overflow: 'hidden',
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 20,
      }
    }
  }
}

const fonts = {
  heading: `"Jost", sans-serif`,
  body: `"Jost", sans-serif`
}

const colors = {
  snowy: '#F8F9F9',
  dirt: '#80808080',
  midnight: '#070606',
  tomato: '#f04a4b',
}

const config = {
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme