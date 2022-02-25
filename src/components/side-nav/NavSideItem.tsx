import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

interface NavSideItemProps {
  url: string
  title: string
  last: boolean
  listSub?: Array<any>
}

const NavSideItem = (props: NavSideItemProps) => {
  const { url, title, last, listSub } = props
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const handleAction = {
    onMouseEnter: () => {
      setShowDropdown(true)
    },
    onMouseLeave: () => {
      setShowDropdown(false)
    },
  }
  const renderItem = (url: string, title: string, last: boolean) => (
    <li
      className={`w-full py-2 px-4 ${last ? 'rounded-b' : ''} group hover:bg-cyan-700 hover:text-white`}
      onMouseEnter={handleAction.onMouseEnter}
      onMouseLeave={handleAction.onMouseLeave}
    >
      <a href={url} className="flex items-center">
        <span className="flex-1">{title}</span>
        <MdKeyboardArrowRight
          size={18}
          className="transition transform duration-100 ease-in-out group-hover:-rotate-180"
        />
      </a>
    </li>
  )
  return (
    <div className="relative w-full">
      {renderItem(url, title, last)}
      {listSub && showDropdown && (
        <ul className="absolute top-0 transform translate-x-full bg-gray-300 divide-y divide-black divide-opacity-10 rounded-b shadow-lg">
          {listSub.map((subProduct, index) => {
            const { title, url } = subProduct
            const last = listSub.length - 1 == index
            return renderItem(url, title, last)
          })}
        </ul>
      )}
    </div>
  )
}

export default NavSideItem
