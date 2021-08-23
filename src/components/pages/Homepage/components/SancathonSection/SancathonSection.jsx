import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { Square } from '../../../../atoms/Icon'

export const SancathonSection = () => {
  return (
    <Flex direction="column" align="center" w="full" minH="xl">
      <Flex
        w="full"
        minW="xs"
        maxW="container.xl"
        minH="lg"
        position="relative"
        overflow="hidden"
        align="center"
      >
        <Box
          w="100%"
          height="100%"
          position="absolute"
          backgroundImage="/img/first-section-bg.png"
          filter="grayscale(100%)"
        />

        <Box position="absolute" w="1525px" height="526px" top="3px" right="0">
          <Image
            src="/img/lines.png"
            alt="Background Lines"
            layout="responsive"
            width={1525}
            height={526}
          />
        </Box>

        <Square position="absolute" boxSize="100%" top="0" right="20%" />

        <Box ml="32" w="sm" h="60">
          <Image
            src="/img/logo.png"
            alt="SancaThon logo"
            layout="responsive"
            width={384}
            height={245}
          />
        </Box>

        <Box zIndex="1000" textAlign="center">
          <Heading fontFamily="Roboto" fontWeight="black">
            10 11 12
            <br />
            SETEMBRO
            <br />
            2021
          </Heading>
          <Text as="h3">Hackathon 100% online!</Text>
          <Button>Inscrever-se</Button>
        </Box>
      </Flex>
    </Flex>
  )
}
