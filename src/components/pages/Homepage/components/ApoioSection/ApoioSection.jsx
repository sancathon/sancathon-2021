import { Box, Center, Heading, HStack, Link } from '@chakra-ui/react'
import Image from 'next/image'

import Buspay from '/img/Logo_Buspay_Base.png'
import Scipopulis from '/img/marca_scipopulis-25.png'
import NTU from '/img/NTU.png'

export const ApoioSection = () => {
  return (
    <Box
      bgColor="#FFF"
      bgImage="/img/Hex.png"
      bgPosition="right"
      bgRepeat="no-repeat"
      pb="28"
    >
      <Center>
        <Heading
          textShadow="0 0 8px #DA0EFC, 0 0 2px #000, -1px 0 2px #DA0EFC, 0 0 3px #fff"
          pt="16"
          color="#FFF"
        >
          APOIO
        </Heading>
      </Center>
      <HStack spacing="5%" mt="30" mx="32">
        <Box>
          <Link href="https://www.buspay.com.br/">
            <Image src={Buspay} />
          </Link>
        </Box>
        <Box>
          <Link href="https://ntu.org.br/novo/Default.aspx?v=1232">
            <Image src={NTU} />
          </Link>
        </Box>
        <Box>
          <Link href="https://scipopulis.com/">
            <Image src={Scipopulis} />
          </Link>
        </Box>
      </HStack>
    </Box>
  )
}
