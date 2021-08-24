import { Icon } from '@chakra-ui/react'

export const HamburgerIcon = (props) => {
  return (
    <Icon viewBox="0 0 27 16" {...props}>
      <line
        x1="1.5"
        y1="1.5"
        x2="25.5"
        y2="1.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="7.5"
        x2="25.5"
        y2="7.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="14.5"
        x2="25.5"
        y2="14.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Icon>
  )
}
