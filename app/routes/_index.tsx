import type { LoaderFunction, V2_MetaFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Sedona Guest Services' }]
}

export const loader: LoaderFunction = async () => {
  return redirect('/about')
}

export default function Index() {
  return null
}
