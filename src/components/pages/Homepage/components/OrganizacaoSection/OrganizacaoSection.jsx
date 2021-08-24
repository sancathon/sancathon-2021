import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'

import { loader } from '../../../../atoms/loader'

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
          <Image loader={loader} width={180} height={135} src="/img/USP.png" />
        </Link>

        <Link
          isExternal
          display="flex"
          alignItems="center"
          mx="8"
          mt="12"
          href="https://eesc.usp.br/"
        >
          <Image loader={loader} width={93} height={98} src="/img/EESC.png" />
        </Link>

        <Link
          isExternal
          display="flex"
          alignItems="center"
          mx="8"
          mt="12"
          href="https://www.facebook.com/SEA.EESC"
        >
          <Image loader={loader} width={251} height={129} src="/img/SEA.png" />
        </Link>

        <Link
          isExternal
          display="flex"
          alignItems="center"
          mx="8"
          mt="12"
          href="https://www.facebook.com/neusaocarlos"
        >
          <Image loader={loader} width={221} height={110} src="/img/neu.png" />
        </Link>

        <Link
          isExternal
          display="flex"
          alignItems="center"
          mx="8"
          mt="12"
          href="https://www.facebook.com/SIEELSaoCarlos"
        >
          <Image
            loader={loader}
            width={158}
            height={158}
            src="/img/SIEEL.png"
          />
        </Link>
      </Flex>
    </Box>
  )
}
