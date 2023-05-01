import { Box } from '@chakra-ui/react'
import { ElfsightWidget } from 'react-elfsight-widget'
import { PageHeader } from '~/components/Headers'

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" />
      <Box
        mt={8}
        borderWidth="3px"
        borderRadius="lg"
        p={8}
        minH={{ lg: '512px' }}
      >
        <ElfsightWidget widgetID="1d6f76ef-e10d-4d99-b958-0a49cca41cb9" />
      </Box>
    </>
  )
}
