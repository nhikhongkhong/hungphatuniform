import React from 'react'
import Image from 'next/image'

const ArrowNext = () => {
  return (
    <div className="absolute top-1/2 right-0">
      <Image src="/images/arr-next.png" width={20} height={20} alt="Arrow Prev" />
    </div>
  )
}

export default ArrowNext
