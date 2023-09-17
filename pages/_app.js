import theme from '../lib/theme'
import Layout from '../components/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'

const SIPC = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
    </ChakraProvider>
  )
}

export default SIPC