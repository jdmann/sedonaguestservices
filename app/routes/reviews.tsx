import { ElfsightWidget } from 'react-elfsight-widget'
import { PageHeader } from '../components/Headers'

export default function Reviews() {
  return (
    <>
      <PageHeader
        title="Reviews"
        borderBottomRadius={0}
      />
      <ElfsightWidget widgetID="d254839d-abb3-4085-b4a1-59a38451e70f" />
    </>
  )
}
