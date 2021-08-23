import { Box, Center, Heading, HStack, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'

import email from '/img/email.png'
import facebook from '/img/facebook.png'
import instagram from '/img/instagram.png'
import linkedin from '/img/linkedin.png'

export const ContatosSection = () => {
  return (
    <Box bgColor="#FFF" pb="28">
      <Center>
        <Heading
          textShadow="0 0 8px #DA0EFC, 0 0 2px #000, -1px 0 2px #DA0EFC, 0 0 3px #fff"
          fontFamily="roboto"
          pt="16"
          color="#FFF"
        >
          CONTATOS
        </Heading>
      </Center>
      <Center>
        <Text fontWeight="bold">Entre em contato conosco pelos canais:</Text>
      </Center>
      <HStack spacing="20%" mt="40" mx="32">
        <Box>
          <Center>
            <Link isExternal href="https://www.instagram.com/sancathon/">
              <Image width="71px" height="71px" src={instagram} />
            </Link>
          </Center>
          <Center>
            <Text fontSize="small">@sancathon</Text>
          </Center>
        </Box>

        <Box>
          <Center>
            <Link isExternal href="https://www.facebook.com/sancathon">
              <Image width="71px" height="71px" src={facebook} />
            </Link>
          </Center>
          <Center>
            <Text fontSize="small">@fb.com/sancathon</Text>
          </Center>
        </Box>

        <Box>
          <Center>
            <Link isExternal href="https://www.linkedin.com/company/sancathon/">
              <Image width="71px" height="71px" src={linkedin} />
            </Link>
          </Center>
          <Center>
            <Text fontSize="small">/company/sancathon</Text>
          </Center>
        </Box>

        <Box>
          <Center>
            <Link isExternal href="mailto:sancathon@eesc.usp.br">
              <Image width="71px" height="71px" src={email} />
            </Link>
          </Center>
          <Center>
            <Text fontSize="small">sancathon@eesc.usp.br</Text>
          </Center>
        </Box>
      </HStack>
    </Box>
  )
}
