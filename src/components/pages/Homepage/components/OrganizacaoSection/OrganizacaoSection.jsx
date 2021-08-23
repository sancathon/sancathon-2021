import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'

export const OrganizacaoSection = () => {
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
        ORGANIZAÇÃO:
      </Heading>

      <Flex
        justifyContent="center"
        wrap="wrap"
        fontWeight="bold"
        mt={{ base: '0', md: '20' }}
        mx="auto"
      >
        <Link
          isExternal
          display="flex"
          alignItems="center"
          mx="8"
          mt="12"
          href="https://www5.usp.br/"
        >
          <Flex as="a">
            <Image width={180} height={135} src="/img/USP.png" />
          </Flex>
        </Link>

        <Link
          isExternal
          display="flex"
          alignItems="center"
          mx="8"
          mt="12"
          href="https://eesc.usp.br/"
        >
          <Flex as="a">
            <Image width={93} height={98} src="/img/EESC.png" />
          </Flex>
        </Link>

        <Link
          isExternal
          display="flex"
          alignItems="center"
          mx="8"
          mt="12"
          href="https://www.facebook.com/SEA.EESC"
        >
          <Flex as="a">
            <Image width={251} height={129} src="/img/SEA.png" />
          </Flex>
        </Link>

        <Link
          isExternal
          display="flex"
          alignItems="center"
          mx="8"
          mt="12"
          href="https://www.facebook.com/neusaocarlos"
        >
          <Flex as="a">
            <Image width={221} height={110} src="/img/neu.png" />
          </Flex>
        </Link>

        <Link
          isExternal
          display="flex"
          alignItems="center"
          mx="8"
          mt="12"
          href="https://www.facebook.com/SIEELSaoCarlos"
        >
          <Flex as="a">
            <Image width={158} height={158} src="/img/SIEEL.png" />
          </Flex>
        </Link>
      </Flex>
    </Box>
  )
}
