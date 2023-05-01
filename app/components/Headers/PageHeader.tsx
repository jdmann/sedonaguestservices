import type { FlexProps } from '@chakra-ui/react'
import { Flex, Heading } from '@chakra-ui/react'

export const PageHeader: React.FC<FlexProps> = ({ children, ...rest }) => (
  <Flex
    borderRadius="0.5rem"
    backgroundSize="cover"
    height="200px"
    color="white"
    justifyContent="center"
    alignItems="center"
    backgroundImage={'linear-gradient(to right, #B83280, #6a82fb)'}
    {...rest}
  >
    <Heading
      size={{ base: 'lg', md: '2xl' }}
      textShadow="dark-lg"
    >
      {children}
    </Heading>
  </Flex>
)
