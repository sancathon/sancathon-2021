import { Box, Flex, Center, Heading, Text} from "@chakra-ui/react"


export const TerceiroPainel = () =>{
  return(
        <Box 
        bgColor='#302E2E'
        backgroundImage="/img/Hex.png"
        bgPosition="right"
        bgRepeat="no-repeat"
        pb='28'
        >
        <Center><Heading textShadow="0 0 8px #DA0EFC, -1px 0 2px #DA0EFC, 0 0 3px #fff" pt='16' color='#302E2E'>CRONOGRAMA</Heading></Center>
        <Flex fontWeight='bold' mt='52' mx='32'>
            <Box align="center" w='full' maxW='2xs' color='white'>
            <Text fontSize='2xl' >Inscrições</Text>
            <Text mt='2'>23/08/2021 a 03/09/2021</Text>
            <Text fontSize='xs'>12h00 12h00</Text>
            </Box>

            <Box  align="center" w='full' maxW='2xs' color='white'>
            <Text  fontSize='2xl' >Warmup e imersão</Text>
            <Text mt='2'>05/09/2021 a 10/09/2021</Text>
            <Text fontSize='xs'>12h00  18h00</Text>
            </Box>

            <Box align="center" w='full' maxW='2xs' color='white'>
            <Text fontSize='2xl' >Maratona de desenvolvimento</Text>
            <Text mt='2'>10/09/2021 a 12/09/2021</Text>
            <Text fontSize='xs'>18h00          18h00</Text>
            </Box>
        
            <Box align="center" w='full' maxW='2xs' color='white'>
            <Text fontSize='2xl'>Entrega da solução desenvolvida</Text>
            <Text mt='2'>12/09/2021</Text>
            <Text fontSize='xs'>19h00</Text>
            </Box>

            <Box align="center" w='full' maxW='2xs' color='white'>
            <Text fontSize='2xl' >Resultado Final</Text>
            <Text mt='2'>a divulgar</Text>
            
            </Box>
        </Flex>
        </Box>
  )
}