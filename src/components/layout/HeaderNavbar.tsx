import React, { useState } from 'react'
import Link from 'next/link'
import * as _ from 'lodash'
import { Home } from '@components/icons'
import DropDownItem from '@components/dropdown/DropDownItem'

// const VALID_PATH = ['t-shirt', 'winter-uniform', 'office-uniform', 'kid-uniform', 'work-uniform', 'equipment']

const HeaderNavbar = () => {
  const listNav = [
    { title: 'Trang chủ', href: '/' },
    { title: 'Danh mục sản phẩm', href: '/products' },
    { title: 'Về chúng tôi', href: '/about-us' },
    { title: 'Quà tặng doanh nghiệp', href: '/gift' },
    { title: 'Liên hệ', href: '/contact' },
  ]
  const listProducts = [
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
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const handleAction = {
    onMouseEnter: () => {
      setShowDropdown(true)
    },
    onMouseLeave: () => {
      setShowDropdown(false)
    },
  }

  const renderDropdownProducts = (
    <ul className="divide-y divide-black divide-opacity-10 text-sm font-normal capitalize rounded-b">
      {listProducts.map((products, index) => {
        const { title, url, listSub } = products
        const last = listProducts.length - 1 == index
        return <DropDownItem {...products} last={last} key={index} />
      })}
    </ul>
  )

  return (
    <div className="w-full bg-gradient-to-b from-green-600 to-green-800">
      <div className="layout h-full flex items-center text-white font-semibold text-sm uppercase divide-x">
        {_.map(listNav, (nav, index) => {
          const { title, href } = nav
          return (
            <div
              onMouseEnter={index == 1 ? handleAction.onMouseEnter : () => {}}
              onMouseLeave={index == 1 ? handleAction.onMouseLeave : () => {}}
              className="h-full py-4"
            >
              <Link href={href}>
                <a href="#" className={`${index == 0 ? 'pr-4' : 'px-4'} hover:text-yellow-500 flex`}>
                  {index == 0 && <Home hoverColor="" color="" />}
                  <span className="ml-2">{title}</span>
                </a>
              </Link>
              {showDropdown && index == 1 && (
                <div className="absolute z-[999] mt-[16px] bg-gray-100 text-black shadow-2xl">
                  {renderDropdownProducts}
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
