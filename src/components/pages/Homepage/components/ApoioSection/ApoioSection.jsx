import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'

import { links } from '../../../../../sancathonx/const/links'
import { loader } from '../../../../atoms/loader'

export const ApoioSection = () => {
  return (
    <Box
      as="section"
      bgColor="white"
      bgImage="url(/img/hex.png)"
      bgPosition="right top"
      bgRepeat="no-repeat"
      px="2"
      pt="16"
      pb={{ base: 20, md: '48' }}
    >
      <Heading
        textAlign="center"
        as="h1"
        fontWeight="black"
        color="transparent"
        fontSize={{ base: '4xl', sm: '5xl' }}
        sx={{ WebkitTextStroke: '2px #DA0EFC' }}
      >
        APOIO
      </Heading>

      <Flex
        justifyContent="center"
        wrap="wrap"
        fontWeight="bold"
        mt={{ base: '0', md: '20' }}
        mx="auto"
      >
        <Link
          href={links.buspay}
          isExternal
          display="flex"
          alignItems="center"
          mx="10"
          mt="8"
        >
          <Image
            loader={loader}
            src="/img/logo-buspay.png"
            layout="fixed"
            width={284}
            height={57}
          />
        </Link>

        <Link
          href={links.scipopulis}
          isExternal
          display="flex"
          alignItems="center"
          mx="10"
          mt="8"
        >
          <Image
            loader={loader}
            src="/img/logo-scipopulis.png"
            layout="fixed"
            width={280}
            height={72}
          />
        </Link>

        <Link
          href={links.coletivo}
          isExternal
          display="flex"
          alignItems="center"
          mx="10"
          mt="8"
        >
          <Image
            loader={loader}
            src="/img/logo-coletivo.png"
            layout="fixed"
            width={256}
            height={183}
          />
        </Link>

        <Link
          href={links.shawee}
          isExternal
          display="flex"
          alignItems="center"
          mx="10"
          mt="8"
        >
          <Image
            loader={loader}
            src="/img/logo-shawee.png"
            layout="fixed"
            width={282}
            height={109}
          />
        </Link>
      </Flex>
    </Box>
  )
}
