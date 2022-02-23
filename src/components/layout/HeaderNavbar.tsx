import React, { useState } from 'react'
import Link from 'next/link'
import * as _ from 'lodash'
import { Home } from '@components/icons'
import DropDownItem from '@components/dropdown/DropDownItem'

const HeaderNavbar = () => {
  const listNav = ['Trang chủ', 'Danh mục sản phẩm', 'Về chúng tôi', 'Liên hệ']
  const listProduct = [
    {
      title: 'Trang phục bảo hộ lao động',
      url: '/',
      listSub: [
        { title: 'Trang phục bảo hộ lao động 1', url: '/' },
        { title: 'Trang phục bảo hộ lao động 2', url: '/' },
      ],
    },
    {
      title: 'Trang phục bảo hộ lao động',
      url: '/',
    },
    { title: 'Trang phục bảo hộ lao động', url: '/', listSub: [] },
    { title: 'Trang phục bảo hộ lao động', url: '/', listSub: [] },
    { title: 'Trang phục bảo hộ lao động', url: '/', listSub: [] },
    { title: 'Trang phục bảo hộ lao động', url: '/', listSub: [] },
    { title: 'Trang phục bảo hộ lao động', url: '/', listSub: [] },
    {
      title: 'Trang phục bảo hộ lao động',
      url: '/',
      listSub: [
        { title: 'Trang phục bảo hộ lao động 3', url: '/' },
        { title: 'Trang phục bảo hộ lao động 4', url: '/' },
      ],
    },
  ]
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const handleAction = {
    onMouseEnter: () => {
      setShowDropdown(true)
    },
    onMouseLeave: () => {
      setShowDropdown(false)
    },
  }

  const renderDropdownProduct = (
    <ul className="divide-y divide-black divide-opacity-10 text-sm font-normal capitalize rounded-b">
      {listProduct.map((product, index) => {
        const { title, url, listSub } = product
        const last = listProduct.length - 1 == index
        return <DropDownItem {...product} last={last} key={index} />
      })}
    </ul>
  )

  return (
    <div className="w-full bg-gradient-to-b from-green-600 to-green-800">
      <div className="layout h-full flex items-center text-white font-semibold text-sm uppercase divide-x">
        {_.map(listNav, (nav, index) => {
          return (
            <div
              onMouseEnter={index == 1 ? handleAction.onMouseEnter : () => {}}
              onMouseLeave={index == 1 ? handleAction.onMouseLeave : () => {}}
              className="h-full py-4"
            >
              <Link href="#">
                <a href="#" className={`${index == 0 ? 'pr-4' : 'px-4'} hover:text-yellow-500 flex`}>
                  {index == 0 && <Home hoverColor="" color="" />}
                  <span className="ml-2">{nav}</span>
                </a>
              </Link>
              {showDropdown && index == 1 && (
                <div className="absolute z-[999] mt-[16px] bg-gray-100 text-black shadow-2xl">
                  {renderDropdownProduct}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HeaderNavbar
