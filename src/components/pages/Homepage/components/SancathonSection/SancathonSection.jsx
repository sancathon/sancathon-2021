import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { links } from '../../../../../sancathonx/const/links'
import { Square } from '../../../../atoms/Icon'

export const SancathonSection = () => {
  return (
    <Flex as="section" direction="column" align="center" w="full" minH="xl">
      <Flex
        w="full"
        direction={{ base: 'column', lg: 'row' }}
        minW="xs"
        maxW="container.xl"
        minH="lg"
        position="relative"
        overflow="hidden"
        align="center"
        px="32"
        justifyContent="space-between"
      >
        <Box
          w="100%"
          height="100%"
          bg="rgba(48, 46, 46, 0.7)"
          position="absolute"
        >
          <Box
            w="100%"
            height="100%"
            opacity="30%"
            backgroundImage="/img/first-section-bg.png"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          />
        </Box>

        <Box position="absolute" w="1525px" height="526px" top="3px" right="0">
          <Image
            src="/img/lines.png"
            alt="Background Lines"
            layout="responsive"
            width={1525}
            height={526}
          />
        </Box>

        <Square position="absolute" w="full" h="full" top="0" right="20%" />

        <Box mt={{ base: 20, lg: 0 }} w={{ base: '2xs', lg: 'sm' }}>
          <Image
            src="/img/logo.png"
            alt="SancaThon logo"
            layout="responsive"
            width={384}
            height={245}
          />
        </Box>

        <Box
          zIndex="1000"
          ml={{ base: 0, lg: 32 }}
          my={{ base: 20, lg: 0 }}
          textAlign="center"
        >
          <Heading
            as="h1"
            fontWeight="black"
            color="transparent"
            fontSize="5xl"
            sx={{ WebkitTextStroke: '2px white' }}
            lineHeight="3.5rem"
          >
            10 11 12
            <br />
            SETEMBRO
            <br />
            2021
          </Heading>

          <Text
            fontWeight="black"
            color="white"
            mt="3"
            mb="8"
            fontSize="2xl"
            as="h3"
          >
            Hackathon 100% online!
          </Text>

          <Link href={links.inscricao} isExternal>
            <Button
              as="a"
              fontWeight="700"
              color="white"
              bg="psyPurple"
              w="48"
              h="12"
              borderRadius="none"
              _hover={{ bg: 'darkPurple' }}
            >
              INSCREVA-SE
            </Button>
          </Link>
        </Box>
      </Flex>
      <Text
        w="full"
        textAlign="right"
        pr={{ base: 5, md: '20' }}
        fontSize="2xs"
      >
        Foto: Nabeel Syed -By Unsplash
      </Text>
    </Flex>
  )
}
