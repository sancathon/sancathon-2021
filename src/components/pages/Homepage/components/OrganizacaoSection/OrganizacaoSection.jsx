import { Box, Center, Heading, HStack, Link } from '@chakra-ui/react'
import Image from 'next/image'

export const OrganizacaoSection = () => {
  const EESC = '/img/EESC.png'
  const NEU = '/img/NEU.png'
  const SEA = '/img/SEA.png'
  const SIEEL = '/img/SIEEL.png'
  const USP = '/img/USP.png'

  return (
    <Box bgColor="#FFF" pb="28">
      <Center>
        <Heading
          textShadow="0 0 8px #DA0EFC, 0 0 2px #000, -1px 0 2px #DA0EFC, 0 0 3px #fff"
           
          pt="16"
          color="#FFF"
        >
          ORGANIZAÇÃO:
        </Heading>
      </Center>
      <HStack spacing="5%" mt="30" mx={{ base: '52', md: '32' }}>
        <Center>
          <Link isExternal href="https://www5.usp.br/">
            <Image width="180px" height="135px" src={USP} />
          </Link>
        </Center>
        <Center>
          <Link isExternal href="https://eesc.usp.br/">
            <Image width="93px" height="98px" src={EESC} />
          </Link>
        </Center>
        <Center>
          <Link isExternal href="https://www.facebook.com/SEA.EESC">
            <Image width="180px" height="135px" src={SEA} />
          </Link>
        </Center>
        <Center>
          <Link isExternal href="https://www.facebook.com/neusaocarlos">
            <Image width="221px" height="110px" src={NEU} />
          </Link>
        </Center>
        <Center>
          <Link isExternal href="https://www.facebook.com/SIEELSaoCarlos">
            <Image width="158px" height="158px" src={SIEEL} />
          </Link>
        </Center>
      </HStack>
    </Box>
  )
}
