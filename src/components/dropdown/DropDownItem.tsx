import React, { useState } from 'react'

interface DropDownItemProps {
  url: string
  title: string
  last: boolean
  listSub?: Array<any>
}

const DropDownItem = (props: DropDownItemProps) => {
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
      className={`px-6 py-2 ${last ? 'rounded-b' : ''} hover:bg-gray-300`}
      onMouseEnter={handleAction.onMouseEnter}
      onMouseLeave={handleAction.onMouseLeave}
    >
      <a href={url}>
        <span>{title}</span>
      </a>
    </li>
  )
  return (
    <div className="relative">
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

export default DropDownItem
