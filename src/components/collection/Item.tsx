import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ItemModelITF } from '@interfaces'
import { getPathFromCode } from '@helpers/utils'
interface ItemPropsType extends ItemModelITF {}

const Item = (props: ItemPropsType) => {
  const { imgSrc, title, code } = props
  return (
    <Link href={getPathFromCode(code)}>
      <a href="#">
        <div
          className="w-full bg-white rounded overflow-hidden pb-2 hover:-translate-y-4 transition duration-450 ease-in-out group hover:shadow-md hover:shadow-white border border-gray-200
    "
        >
          <Image
            src={imgSrc || '/images/t-shirt/tshirt-2.jpg'}
            width={184}
            height={184}
            layout="responsive"
            alt={title}
            className="object-fit"
          />
          <div className="rounded text-center border-gray-200 group-hover:border-none border py-2 m-2 break-words group-hover:bg-blue-600 group-hover:text-white">
            <span className="text-sm ">Giá sản phẩm: </span>
            <span className="text-sm font-bold text-red-600 group-hover:text-white ">Liên hệ</span>
          </div>
          <p className="text-center text-sm">{title}</p>
        </div>
      </a>
    </Link>
  )
}

export default Item
