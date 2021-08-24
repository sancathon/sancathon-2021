import { Flex, Link, Text } from '@chakra-ui/react'

import { links } from '../../../../../sancathonx/const/links'
import { GithubIcon } from '../../../../atoms/Icon/GithubIcon'

export const Footer = () => {
  return (
    <Flex as="footer" zIndex="2000" w="full" bg="darkGray">
      <Flex
        w="full"
        px={{ base: '5', lg: '20' }}
        mx="auto"
        maxW="8xl"
        align="center"
        justifyContent="space-between"
        bg="darkGray"
        fontSize="sm"
        py="8"
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'left', md: 'center' }}
        >
          <Text fontWeight="700" color="white">
            Sancathon 2021
          </Text>
          <Text fontWeight="700" color="white">
            -
          </Text>
          <Text fontWeight="700" color="white">
            Todos os direitos reservados
          </Text>
        </Flex>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'left', md: 'center' }}
          color="white"
        >
          <Link isExternal href={links.repositorio} fontWeight="700" mr="8">
            <Flex align="center">
              <Text fontWeight="700" mr="2">
                Repositório
              </Text>
              <GithubIcon />
            </Flex>
          </Link>
          <Text fontWeight="700" my="2" mr="2">
            Made by:
          </Text>
          <Link isExternal href={links.joseVictor} fontWeight="700" mx="2">
            Zé Victor
          </Link>

          <Link isExternal href={links.joseGuilherme} fontWeight="700" mx="2">
            José Guilherme
          </Link>

          <Link isExternal href={links.marine} fontWeight="700" mx="2">
            Marine
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
