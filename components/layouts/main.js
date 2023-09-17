import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Container } from '@chakra-ui/react'
import Partic from '../all/tree'
import Navbar from '../Navbar'


const Main = ({ children, title = '[SOHEIL]IPC' }) => {
  const router = useRouter()
  const { asPath } = router

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <Box opacity='0.2'><Partic /></Box>
      <Navbar path={router.asPath} />
      <Container maxW="container.xl" pt={16}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
