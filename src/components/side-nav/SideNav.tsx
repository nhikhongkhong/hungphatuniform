import React, { useState } from 'react'
import { BsListUl } from 'react-icons/bs'
import NavSideItem from './NavSideItem'

interface SideNav {}

const SideNav = () => {
  const listProduct = [
    {
      title: 'Đồng phục áo phông',
      url: '/products/t-shirt',
      // listSub: [
      //   { title: 'Trang phục bảo hộ lao động 1', url: '/products/' },
      //   { title: 'Trang phục bảo hộ lao động 2', url: '/products/' },
      // ],
    },
    {
      title: 'Đồng phục văn phòng',
      url: '/products/office-uniform',
    },
    { title: 'Đồng phục bảo hộ lao động', url: '/products/work-uniform', listSub: [] },
    { title: 'Đồng phục mầm non', url: '/products/kid-uniform', listSub: [] },
    { title: 'Đồng phục mùa đông', url: '/products/winter-uniform', listSub: [] },
    { title: 'Thiết bị bảo hộ lao động', url: '/products/equipment', listSub: [] },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-full text-white h-[45px]">
        <span className="p-2 bg-green-900 pos-center">
          <BsListUl size={25} />
        </span>
        <span className="font-bold text-sm uppercase bg-gradient-to-b from-green-600 to-green-800 flex-1 pos-center">
          Danh mục sản phẩm
        </span>
      </div>
      <ul className="w-full divide-y divide-black divide-opacity-10 text-sm font-normal capitalize rounded-b bg-white border border-gray-300">
        {listProduct.map((product, index) => {
          const { title, url, listSub } = product
          const last = listProduct.length - 1 == index
          return <NavSideItem {...product} last={last} key={index} />
        })}
      </ul>
    </div>
  )
}

export default SideNav
