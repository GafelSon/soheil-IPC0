import NextLink from 'next/link'
import Logo from '../components/all/logo'
import { 
    CiUser, 
    CiTimer, 
    CiStreamOn, 
    CiCoffeeCup,
    CiBrightnessUp, 
} from 'react-icons/ci'
import { 
    Box, 
    Flex, 
    Grid,
    Stack,
    Container,
    IconButton,
    useColorModeValue 
} from '@chakra-ui/react'
import ThemeToggleButton from './all/theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
    const Active = path === href
    const InActiveColor = useColorModeValue('snowy', 'midnight')
  
    return (
      <NextLink href={href}>
        <Box
          px={6}
          py={1.5}
          borderRadius={8}
          color={Active ? 'tomato' : InActiveColor}
          dropShadow={Active ? '0 0 5px red' : 'none' }
          filter={Active ? 'drop-shadow(0 0 1px red)' : 'none'}
          legacyBehavior
        >
          {children}
        </Box>
      </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        zIndex={1}
        style={{ backdropFilter: 'blur(2px)' }}
        {...props}
        >
        <Container
        display="flex"
        maxW="container.xl"
        wrap="wrap"
        align="center"
        pt={5}
        justify="space-between"
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={6} alignItems="center">
          <Box>
            <Logo />
          </Box>
          <Flex mx="auto" fontSize={18}>
            <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            gap={16}
            mt={{ base: 4, md: 0 }}
            >
              <LinkItem href="/" path={path}>
                <CiTimer />
              </LinkItem>
              <LinkItem href="/speed" path={path}>
                <CiStreamOn />
              </LinkItem>
              <LinkItem href="/about" path={path}>
                <CiUser />
              </LinkItem>
              <LinkItem href="/support" path={path}>
                <CiCoffeeCup />
              </LinkItem>
            </Stack>
          </Flex>
          <Flex ml="auto">
          <Box
            as={IconButton}
            icon={<CiBrightnessUp />}
            variant='outline'
            borderColor='dirt'
            color='snowy'
            aria-label='LightMode'
          /> 
          </Flex>
        </Grid>
        </Container>
      </Box>
    )
}

export default Navbar