import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'

import { MedalIcon } from '../../../../atoms/Icon/MedalIcon'

export const PremiacaoSection = () => {
  return (
    <Box
      bgColor="darkGray"
      bgImage="img/premiacao-bg.png"
      bgRepeat="no-repeat"
      pt="16"
      pb={{ base: '10', sm: '20' }}
    >
      <Heading
        textAlign="center"
        as="h1"
        fontWeight="black"
        color="transparent"
        fontSize={{ base: '4xl', sm: '5xl' }}
        sx={{ WebkitTextStroke: '2px #DA0EFC' }}
      >
        PREMIAÇÃO
      </Heading>

      <Flex
        justifyContent="center"
        wrap="wrap"
        fontWeight="bold"
        mt="20"
        mx="auto"
        color="white"
      >
        <Box p="12">
          <Flex>
            <MedalIcon boxSize="16" />
            <Center>
              <Heading>1° Lugar</Heading>
            </Center>
          </Flex>
          <Center>
            <Text fontWeight="bold" fontSize="2xl">
              R$2500,00
            </Text>
          </Center>
        </Box>

        <Box p="12">
          <Flex>
            <MedalIcon boxSize="16" />
            <Center>
              <Heading>2° Lugar</Heading>
            </Center>
          </Flex>
          <Center>
            <Text fontWeight="bold" fontSize="2xl">
              R$1000,00
            </Text>
          </Center>
        </Box>

        <Box p="12">
          <Flex>
            <MedalIcon boxSize="16" />
            <Center>
              <Heading>3° Lugar</Heading>
            </Center>
          </Flex>
          <Center>
            <Text fontWeight="bold" fontSize="2xl">
              R$500,00
            </Text>
          </Center>
        </Box>
      </Flex>
    </Box>
  )
}
