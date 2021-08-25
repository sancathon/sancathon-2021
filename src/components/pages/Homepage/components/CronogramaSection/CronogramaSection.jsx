import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export const CronogramaSection = () => {
  return (
    <Box
      as="section"
      bgColor="darkGray"
      backgroundImage="/img/hex.png"
      bgPosition="right top"
      bgRepeat="no-repeat"
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
        CRONOGRAMA
      </Heading>

      <Flex
        justifyContent="center"
        wrap="wrap"
        fontWeight="bold"
        mt={{ base: '16', md: '32' }}
        mx="auto"
      >
        <Box align="center" w="72" color="white" mt="12">
          <Text h={{ base: 'auto', md: '4.5rem' }} fontSize="2xl">
            Inscrições
          </Text>
          <Text mt="2">25/08/2021 - 03/09/2021</Text>
          <Text fontSize="xs">Até 18h00</Text>
        </Box>

        <Box align="center" w="72" color="white" mt="12">
          <Text h={{ base: 'auto', md: '4.5rem' }} fontSize="2xl">
            Inscrições em <br />
            Grupo
          </Text>
          <Text mt="2">06/09/2021 - 09/09/2021</Text>
          <Text fontSize="xs">Até 18h00</Text>
        </Box>

        <Box align="center" w="72" color="white" mt="12">
          <Text h={{ base: 'auto', md: '4.5rem' }} fontSize="2xl">
            Warmup e imersão
          </Text>
          <Text mt="2">06/09/2021 a 08/09/2021</Text>
          <Text fontSize="xs">Até 22h00</Text>
        </Box>

        <Box align="center" w="72" color="white" mt="12">
          <Text h="4.5rem" fontSize="2xl">
            Maratona de <br /> desenvolvimento
          </Text>
          <Text mt="2">10/09/2021 a 12/09/2021</Text>
          <Text fontSize="xs">00h00 19h00</Text>
        </Box>

        <Box align="center" w="72" color="white" mt="12">
          <Text h="4.5rem" fontSize="2xl">
            Entrega da <br /> solução desenvolvida
          </Text>
          <Text mt="2">12/09/2021</Text>
          <Text fontSize="xs">19h00</Text>
        </Box>

        <Box align="center" w="72" color="white" mt="12">
          <Text h={{ base: 'auto', md: '4.5rem' }} fontSize="2xl">
            Resultado <br /> Final
          </Text>
          <Text mt="2">24/09/2021</Text>
          <Text fontSize="xs">19h00</Text>
        </Box>
      </Flex>
    </Box>
  )
}
