import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        className='h-6 w-auto'
        src={'/logo.svg'}
        width={100}
        height={24}
        priority
      />
    </Link>
  )
}
export default Logo
