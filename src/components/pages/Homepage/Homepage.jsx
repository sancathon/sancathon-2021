import {
  Button,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { Element, Link as ScrollLink } from 'react-scroll'

import { links } from '../../../sancathonx/const/links'
import { HamburgerIcon, SancathonLogo } from '../../atoms/Icon'
import {
  ApoioSection,
  ContatosSection,
  CronogramaSection,
  DesafioSection,
  OrganizacaoSection,
  PremiacaoSection,
  SancathonSection
} from './components'
import { Footer } from './components/Footer'

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
        px={{ base: '5', md: '20' }}
        mx="auto"
        maxW="8xl"
        align="center"
        justifyContent="space-between"
        bg="white"
        position="sticky"
        top="0"
        fontSize="sm"
      >
        <Flex align="center">
          <Menu>
            <MenuButton
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="unstyled"
              mr="4"
            >
              <HamburgerIcon
                boxSize="8"
                display={{ base: 'flex', xl: 'none' }}
              />
            </MenuButton>

            <MenuList bg="white">
              <MenuItem>
                <ScrollLink
                  to="desafio"
                  spy={true}
                  smooth={true}
                  duration={500}
                  hashSpy={true}
                  offset={-50}
                  onSetActive={() => handleSetActive('desafio')}
                >
                  <Text
                    cursor="pointer"
                    color={activeSection === 'desafio' ? 'mariner' : 'black'}
                  >
                    Desafio
                  </Text>
                </ScrollLink>
              </MenuItem>

              <MenuItem>
                <ScrollLink
                  to="cronograma"
                  spy={true}
                  smooth={true}
                  duration={500}
                  hashSpy={true}
                  offset={-50}
                  onSetActive={() => handleSetActive('cronograma')}
                >
                  <Text
                    cursor="pointer"
                    color={activeSection === 'cronograma' ? 'mariner' : 'black'}
                  >
                    Cronograma
                  </Text>
                </ScrollLink>
              </MenuItem>

              <MenuItem>
                <ScrollLink
                  to="apoio"
                  spy={true}
                  smooth={true}
                  duration={500}
                  hashSpy={true}
                  offset={-50}
                  onSetActive={() => handleSetActive('apoio')}
                >
                  <Text
                    cursor="pointer"
                    color={activeSection === 'apoio' ? 'mariner' : 'black'}
                  >
                    Apoio
                  </Text>
                </ScrollLink>
              </MenuItem>

              <MenuItem>
                <ScrollLink
                  to="premiacao"
                  spy={true}
                  smooth={true}
                  duration={500}
                  hashSpy={true}
                  offset={-50}
                  onSetActive={() => handleSetActive('premiacao')}
                >
                  <Text
                    cursor="pointer"
                    color={activeSection === 'premiacao' ? 'mariner' : 'black'}
                  >
                    Premiação
                  </Text>
                </ScrollLink>
              </MenuItem>

              <MenuItem>
                <ScrollLink
                  to="contatos"
                  spy={true}
                  smooth={true}
                  duration={500}
                  hashSpy={true}
                  offset={-50}
                  onSetActive={() => handleSetActive('contatos')}
                >
                  <Text
                    cursor="pointer"
                    color={activeSection === 'contatos' ? 'mariner' : 'black'}
                  >
                    Contatos
                  </Text>
                </ScrollLink>
              </MenuItem>

              <MenuItem>
                <ScrollLink
                  to="organizacao"
                  spy={true}
                  smooth={true}
                  duration={500}
                  hashSpy={true}
                  offset={-50}
                  onSetActive={() => handleSetActive('organizacao')}
                >
                  <Text
                    cursor="pointer"
                    color={
                      activeSection === 'organizacao' ? 'mariner' : 'black'
                    }
                  >
                    Organização
                  </Text>
                </ScrollLink>
              </MenuItem>
            </MenuList>
          </Menu>

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
        </Flex>

        <HStack
          display={{ base: 'none', xl: 'flex' }}
          fontFamily="Mulish"
          fontWeight="700"
          spacing="8"
        >
          <ScrollLink
            to="desafio"
            spy={true}
            smooth={true}
            duration={500}
            hashSpy={true}
            offset={-50}
            onSetActive={() => handleSetActive('desafio')}
          >
            <Text
              cursor="pointer"
              color={activeSection === 'desafio' ? 'mariner' : 'black'}
            >
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
            <Text
              cursor="pointer"
              color={activeSection === 'cronograma' ? 'mariner' : 'black'}
            >
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
            <Text
              cursor="pointer"
              color={activeSection === 'apoio' ? 'mariner' : 'black'}
            >
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
            <Text
              cursor="pointer"
              color={activeSection === 'premiacao' ? 'mariner' : 'black'}
            >
              Premiação
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
            <Text
              cursor="pointer"
              color={activeSection === 'contatos' ? 'mariner' : 'black'}
            >
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
            <Text
              cursor="pointer"
              color={activeSection === 'organizacao' ? 'mariner' : 'black'}
            >
              Organização
            </Text>
          </ScrollLink>
        </HStack>

        <Flex display={{ base: 'none', md: 'flex' }} align="center">
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

      <Footer />
    </>
  )
}
