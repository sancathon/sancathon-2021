import { Button, Flex, HStack, Link, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Element, Link as ScrollLink } from 'react-scroll'

import { links } from '../../../sancathonx/const/links'
import { SancathonLogo } from '../../atoms/Icon'
import {
  ApoioSection,
  ContatosSection,
  CronogramaSection,
  DesafioSection,
  OrganizacaoSection,
  PremiacaoSection,
  SancathonSection
} from './components'

export const Homepage = () => {
  const [activeSection, setActiveSection] = useState('')

  const handleSetActive = (section) => {
    setActiveSection(section)
  }

  return (
    <>
      <Flex
        as="nav"
        zIndex="2000"
        w="full"
        h="20"
        px="20"
        mx="auto"
        maxW="8xl"
        align="center"
        justifyContent="space-between"
        bg="white"
        position="sticky"
        top="0"
        fontSize="sm"
      >
        <ScrollLink
          to="sancathon"
          spy={true}
          smooth={true}
          duration={500}
          hashSpy={true}
          offset={-50}
          onSetActive={() => handleSetActive('sancathon')}
        >
          <SancathonLogo w="52" h="12" />
        </ScrollLink>

        <HStack fontFamily="Mulish" fontWeight="700" spacing="8">
          <ScrollLink
            to="desafio"
            spy={true}
            smooth={true}
            duration={500}
            hashSpy={true}
            offset={-50}
            onSetActive={() => handleSetActive('desafio')}
          >
            <Text color={activeSection === 'desafio' ? 'mariner' : 'black'}>
              Desafio
            </Text>
          </ScrollLink>

          <ScrollLink
            to="cronograma"
            spy={true}
            smooth={true}
            duration={500}
            hashSpy={true}
            offset={-50}
            onSetActive={() => handleSetActive('cronograma')}
          >
            <Text color={activeSection === 'cronograma' ? 'mariner' : 'black'}>
              Cronograma
            </Text>
          </ScrollLink>

          <ScrollLink
            to="apoio"
            spy={true}
            smooth={true}
            duration={500}
            hashSpy={true}
            offset={-50}
            onSetActive={() => handleSetActive('apoio')}
          >
            <Text color={activeSection === 'apoio' ? 'mariner' : 'black'}>
              Apoio
            </Text>
          </ScrollLink>

          <ScrollLink
            to="premiacao"
            spy={true}
            smooth={true}
            duration={500}
            hashSpy={true}
            offset={-50}
            onSetActive={() => handleSetActive('premiacao')}
          >
            <Text color={activeSection === 'premiacao' ? 'mariner' : 'black'}>
              Premiacao
            </Text>
          </ScrollLink>

          <ScrollLink
            to="contatos"
            spy={true}
            smooth={true}
            duration={500}
            hashSpy={true}
            offset={-50}
            onSetActive={() => handleSetActive('contatos')}
          >
            <Text color={activeSection === 'contatos' ? 'mariner' : 'black'}>
              Contatos
            </Text>
          </ScrollLink>

          <ScrollLink
            to="organizacao"
            spy={true}
            smooth={true}
            duration={500}
            hashSpy={true}
            offset={-50}
            onSetActive={() => handleSetActive('organizacao')}
          >
            <Text color={activeSection === 'organizacao' ? 'mariner' : 'black'}>
              Organização
            </Text>
          </ScrollLink>
        </HStack>

        <Flex align="center">
          <Link
            href={links.regulamento}
            color="mariner"
            fontFamily="Mulish"
            fontWeight="700"
            mr="5"
          >
            Regulamento
          </Link>

          <Link href={links.inscricao} isExternal>
            <Button
              as="a"
              color="white"
              bg="psyPurple"
              w="28"
              h="10"
              fontSize="sm"
              borderRadius="none"
              _hover={{ bg: 'darkPurple' }}
            >
              INSCREVA-SE
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Element id="sancathon" className="element">
        <SancathonSection />
      </Element>

      <Element id="desafio" className="element">
        <DesafioSection />
      </Element>

      <Element id="cronograma" className="element">
        <CronogramaSection />
      </Element>

      <Element id="apoio" className="element">
        <ApoioSection />
      </Element>

      <Element id="premiacao" className="element">
        <PremiacaoSection />
      </Element>

      <Element id="contatos" className="element">
        <ContatosSection />
      </Element>

      <Element id="organizacao" className="element">
        <OrganizacaoSection />
      </Element>
    </>
  )
}
