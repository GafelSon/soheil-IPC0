import { Box, Flex, Text } from "@chakra-ui/react"
import { color } from "framer-motion"

const Logo = () => {
    return (
        <Box>
            <Flex
            gap={1}
            align='center'
            letterSpacing={'tighter'}
            >
                <Text fontSize={42} fontWeight={900}>S</Text>
                <Box align='left' lineHeight={0.6} fontSize={20}>
                    <Text>oheil</Text>
                    <Text color="tomato">canner</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default Logo