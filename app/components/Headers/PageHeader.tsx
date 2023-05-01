import { Flex, FlexProps, Heading, Image } from '@chakra-ui/react'

interface PageHeaderProps extends FlexProps {
  title: string
  src?: string
  fallbackSrc?: string
}
export const PageHeader: React.FC<PageHeaderProps> = ({ title, src, fallbackSrc, ...rest }) => (
  <Flex
    borderRadius="0.5rem"
    backgroundSize="cover"
    height="200px"
    color="white"
    justifyContent="center"
    alignItems="center"
    backgroundImage={'linear-gradient(to right, #B83280, #6a82fb)'}
    position="relative"
    overflow="hidden"
    {...rest}
  >
    {src && (
      <Image
        src={src}
        fallbackSrc={fallbackSrc}
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        width="100%"
        height="100%"
      />
    )}
    <Heading
      size={{ base: 'lg', md: '2xl' }}
      textShadow="dark-lg"
      zIndex={1}
    >
      {title}
    </Heading>
  </Flex>
)
