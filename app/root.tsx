import { Box, ChakraProvider, Container } from '@chakra-ui/react'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { theme } from './components/Theme'

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
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
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
