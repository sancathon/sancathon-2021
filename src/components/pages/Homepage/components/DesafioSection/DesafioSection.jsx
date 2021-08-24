import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'

import { links } from '../../../../../sancathonx/const/links'
import { CubeIcon, PcScreenIcon } from '../../../../atoms/Icon'
import { loader } from '../../../../atoms/loader'

export const DesafioSection = () => {
  return (
    <Flex as="section" direction="column" align="center" w="full" minH="xl">
      <Flex
        w="full"
        direction={{ base: 'column', lg: 'row' }}
        minW="xs"
        maxW="container.xl"
        minH="lg"
        align="center"
        px="10"
        justifyContent="space-between"
      >
        <Box mt={{ base: 14, lg: 0 }} mr={{ base: 0, lg: 20 }}>
          <Box w="full" maxW="xl">
            <Heading fontSize={{ base: '2xl', lg: '3xl' }}>
              Hackathon realizado por estudantes da comunidade de São Carlos/SP
            </Heading>
          </Box>

          <Flex direction={{ base: 'column', sm: 'row' }} w="full" maxW="xl">
            <Box mr={{ base: '0', sm: '4' }}>
              <CubeIcon boxSize="1.875rem" my="3" />
              <Text w="full" maxW="md">
                Buscar soluções inovadores de negócios, tecnologia, produtos e
                serviços para a mobilidade urbana e o transporte coletivo.
              </Text>
            </Box>

            <Box>
              <PcScreenIcon boxSize="1.875rem" my="3" />
              <Text w="full" maxW="md">
                Podem participar estudantes maiores de 18 anos de todas as
                Universidades Brasileiras.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box my={{ base: 8, lg: 0 }}>
          <Flex position="relative">
            <Image
              loader={loader}
              src="/img/sao-carlos.png"
              height={440}
              width={580}
            />

            <Box
              w="100%"
              height="100%"
              bg="rgba(48, 46, 46, 0.7)"
              position="absolute"
            />

            <Heading
              as="h1"
              fontWeight="black"
              color="transparent"
              fontSize={{ base: '4xl', sm: '5xl' }}
              sx={{ WebkitTextStroke: '2px white' }}
              lineHeight="3.5rem"
              position="absolute"
              right="5"
              bottom="5"
            >
              O DESAFIO
            </Heading>
          </Flex>

          <Text align="right" fontSize="2xs">
            Foto: Alberto Medeiros - Pinterest
          </Text>
        </Box>
      </Flex>

      <Text w="full" textAlign="center" mb="5">
        Para mais informações e um cronograma detalhado, consulte o
        <Link ml="1" href={links.regulamento} color="red">
          regulamento do evento
        </Link>
      </Text>
    </Flex>
  )
}
