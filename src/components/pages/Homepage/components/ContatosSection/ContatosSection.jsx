import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { links } from '../../../../../sancathonx/const/links'

export const ContatosSection = () => {
  return (
    <Box bgColor="white" as="section" pt="16" pb="20">
      <Heading
        textAlign="center"
        as="h1"
        fontWeight="black"
        color="transparent"
        fontSize={{ base: '4xl', sm: '5xl' }}
        sx={{ WebkitTextStroke: '2px #DA0EFC' }}
      >
        CONTATOS
      </Heading>

      <Text w="full" textAlign="center" fontWeight="bold">
        Entre em contato conosco pelos canais:
      </Text>

      <Flex
        justifyContent="center"
        wrap="wrap"
        fontWeight="bold"
        mt={{ base: '0', md: '20' }}
        mx="auto"
      >
        <Link
          isExternal
          href={links.sancathon.instagram}
          display="flex"
          alignItems="center"
          mx="8"
          mt="8"
        >
          <Flex as="a">
            <Image width={71} height={71} src="/img/social/instagram.png" />
          </Flex>
        </Link>

        <Link
          isExternal
          href={links.sancathon.facebook}
          display="flex"
          alignItems="center"
          mx="8"
          mt="8"
        >
          <Flex as="a">
            <Image width={71} height={71} src="/img/social/facebook.png" />
          </Flex>
        </Link>

        <Link
          isExternal
          href={links.sancathon.linkedin}
          display="flex"
          alignItems="center"
          mx="8"
          mt="8"
        >
          <Flex as="a">
            <Image width={71} height={71} src="/img/social/linkedin.png" />
          </Flex>
        </Link>

        <Link
          isExternal
          href={links.sancathon.email}
          display="flex"
          alignItems="center"
          mx="8"
          mt="8"
        >
          <Flex as="a">
            <Image width={71} height={71} src="/img/social/email.png" />
          </Flex>
        </Link>
      </Flex>
    </Box>
  )
}
