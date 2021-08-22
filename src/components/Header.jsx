import { Button, HStack, Heading, Link } from '@chakra-ui/react'

export default function Header() {
    return(
    <HStack pl="4%"  h="103px" bg='#3C64B111' spacing="12%" align="center"> 
  
        <Heading fontWeight='700' as='h1' color='black' >SancaThon</Heading>
        <HStack spacing="10%">
            <Link  href="">Desafio</Link>
            <Link variant="menu" href="">Cronograma</Link>
            <Link variant="menu" href="">Apoio</Link>
            <Link variant="menu" href="">Premiação</Link>
            <Link variant="menu" href="">Edições Anteriores</Link>
        </HStack>
        <HStack>
            <Button borderRadius="none" color="#3C64B1">Regulamento</Button>
            <Button borderRadius="none" color='#fff' bg="#DA0EFC">Inscreva-se</Button>
        </HStack>
  </HStack>
    )
}
