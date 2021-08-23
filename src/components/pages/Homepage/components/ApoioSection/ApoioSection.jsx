import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'

import { links } from '../../../../../sancathonx/const/links'

export const ApoioSection = () => {
  return (
    <Box
      as="section"
      bgColor="white"
      bgImage="/img/hex.png, /img/hex.png"
      bgPosition="right"
      bgRepeat="no-repeat"
      pt="16"
      pb="20"
    >
      <Heading
        textAlign="center"
        as="h1"
        fontWeight="black"
        color="transparent"
        fontSize="5xl"
        sx={{ WebkitTextStroke: '2px #DA0EFC' }}
      >
        APOIO
      </Heading>

      <Flex
        justifyContent="center"
        wrap="wrap"
        fontWeight="bold"
        mt="20"
        mx="auto"
      >
        <Link href={links.buspay} isExternal>
          <Flex as="a" mx="10" mt="8" h="36" align="center">
            <Image src="/img/logo-buspay.png" width={422} height={84} />
          </Flex>
        </Link>

        <Link href={links.ntu} isExternal>
          <Flex as="a" mx="10" mt="8" h="36" align="center">
            <Image src="/img/logo-scipopulis.png" width={415} height={105} />
          </Flex>
        </Link>

        <Link href={links.scipopulis} isExternal>
          <Flex as="a" mx="10" mt="8" h="36" align="center">
            <Image src="/img/logo-ntu.png" width={231} height={137} />
          </Flex>
        </Link>
      </Flex>
    </Box>
  )
}
