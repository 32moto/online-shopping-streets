import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const Store: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      {JSON.stringify(router)}
    </div>
  )
}

export default Store
