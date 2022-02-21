import React from 'react'
import { IconExit, Home, IconProduct, IconAboutUs, IconContact } from '@components/icons'
interface NavBarMobileITF {
  closeNavBar: (event: React.MouseEvent<HTMLElement>) => void
}

const NavBarMobile = (props: NavBarMobileITF) => {
  const { closeNavBar } = props
  const listNav = [
    { title: 'Trang chủ', url: '/', Icon: Home },
    { title: 'Danh mục sản phẩm', url: '/', Icon: IconProduct },
    { title: 'Về chúng tôi', url: '/', Icon: IconAboutUs },
    { title: 'Liên hệ', url: '/', Icon: IconContact },
  ]

  return (
    <div className="h-full flex flex-col fixed top-0 right-0 w-full z-[99] bg-gradient-to-b from-gray-100 to-gray-300 px-5 pt-5 divide-y divide-black divide-opacity-30">
      <div onClick={closeNavBar} className="cursor-pointer mb-5">
        <IconExit color="text-back" hoverColor="" />
      </div>
      <div className="mt-3 flex-1 grow">
        {listNav.map((item, index) => {
          const { url, title, Icon } = item
          return (
            <a
              href={url}
              className="hover:bg-primary-3/10 hover:text-primary-3  py-3 flex items-center text-light text-sm cursor-pointer group"
              key={index}
            >
              <Icon color="text-black" hoverColor="" />
              <span className="ml-3">{title}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default NavBarMobile
