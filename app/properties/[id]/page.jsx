'use client';

import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation'

const PropertyPage = () => {
  const router = useRouter()
  const {id} = useParams()
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  console.log('hey man')
  const pathname = usePathname()
  return (
    <div>
      <button onClick={() => router.push('/')} className='bg-blue-500 p-2'>
        Go home {pathname}
      </button>
      <h1>
        Property Page
      </h1>
    </div>
  )
}

export default PropertyPage