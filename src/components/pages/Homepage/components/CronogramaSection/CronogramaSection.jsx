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
        mt="32"
        mx="auto"
      >
        <Box align="center" w="72" color="white" mt="12">
          <Text h="4.5rem" fontSize="2xl">
            Inscrições
          </Text>
          <Text mt="2">23/08/2021 a 03/09/2021</Text>
          <Text fontSize="xs">12h00 12h00</Text>
        </Box>

        <Box align="center" w="72" color="white" mt="12">
          <Text h="4.5rem" fontSize="2xl">
            Warmup e imersão
          </Text>
          <Text mt="2">05/09/2021 a 10/09/2021</Text>
          <Text fontSize="xs">12h00 18h00</Text>
        </Box>

        <Box align="center" w="72" color="white" mt="12">
          <Text h="4.5rem" fontSize="2xl">
            Maratona de <bk /> desenvolvimento
          </Text>
          <Text mt="2">10/09/2021 a 12/09/2021</Text>
          <Text fontSize="xs">18h00 18h00</Text>
        </Box>

        <Box align="center" w="72" color="white" mt="12">
          <Text h="4.5rem" fontSize="2xl">
            Entrega da <bk /> solução desenvolvida
          </Text>
          <Text mt="2">12/09/2021</Text>
          <Text fontSize="xs">19h00</Text>
        </Box>

        <Box align="center" w="72" color="white" mt="12">
          <Text h="4.5rem" fontSize="2xl">
            Resultado <bk /> Final
          </Text>
          <Text mt="2">a divulgar</Text>
        </Box>
      </Flex>
    </Box>
  )
}
