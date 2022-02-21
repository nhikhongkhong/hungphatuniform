import React from 'react'
import Link from 'next/link'
import * as _ from 'lodash'
import { Home } from '@components/icons'

const HeaderNavbar = () => {
  const listNav = ['Trang chủ', 'Danh mục sản phẩm', 'Về chúng tôi', 'Liên hệ']

  const handleAction = {
    onMouseEnter: () => {
      console.log('hover')
    },
    onMouseLeave: () => {},
  }

  return (
    <div className="w-full bg-gradient-to-b from-green-600 to-green-800 py-4">
      <div className="layout flex items-center text-white font-semibold text-base uppercase divide-x-2">
        {_.map(listNav, (nav, index) => {
          return (
            <Link href="#">
              <a
                href="#"
                className={`${index == 0 ? 'pr-4' : 'px-4'} hover:text-yellow-500 flex`}
                onMouseEnter={index == 1 ? handleAction.onMouseEnter : () => {}}
              >
                {index == 0 && <Home hoverColor="" color="" />}
                <span className="ml-2">{nav}</span>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default HeaderNavbar
