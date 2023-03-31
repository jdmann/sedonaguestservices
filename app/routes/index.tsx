import { Box, Container } from '@chakra-ui/react'
import type { V2_MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Sedona Guest Services' }]
}

export default function Index() {
  return (
    <>
      <Navbar />
      <Box
        bg="linkedin.50"
        minH="100vh"
      >
        <Container
          maxW="6xl"
          pt={5}
          pb={10}
        >
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </>
  )
}
