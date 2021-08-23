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
        <Link isExternal href="https://www5.usp.br/">
          <Flex align="center" height="14" as="a" mx="8" mt="12">
            <Image width={180} height={135} src="/img/USP.png" />
          </Flex>
        </Link>

        <Link isExternal href="https://eesc.usp.br/">
          <Flex align="center" height="14" as="a" mx="8" mt="12">
            <Image width={93} height={98} src="/img/EESC.png" />
          </Flex>
        </Link>

        <Link isExternal href="https://www.facebook.com/SEA.EESC">
          <Flex align="center" height="14" as="a" mx="8" mt="12">
            <Image width={251} height={129} src="/img/SEA.png" />
          </Flex>
        </Link>

        <Link isExternal href="https://www.facebook.com/neusaocarlos">
          <Flex align="center" height="14" as="a" mx="8" mt="12">
            <Image width={221} height={110} src="/img/neu.png" />
          </Flex>
        </Link>

        <Link isExternal href="https://www.facebook.com/SIEELSaoCarlos">
          <Flex align="center" height="14" as="a" mx="8" mt="12">
            <Image width={158} height={158} src="/img/SIEEL.png" />
          </Flex>
        </Link>
      </Flex>
    </Box>
  )
}
