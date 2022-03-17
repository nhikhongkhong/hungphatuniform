import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { GrLocation } from 'react-icons/gr'
import { AiOutlineMenu } from 'react-icons/ai'
import { useMedia, useClickAway } from 'react-use'

import { LocationMaker } from '@components/icons'
import { Info } from '@assets/info'
import HeaderNavbar from './HeaderNavbar'
import SearchForm from './SearchForm'
import NavBarMobile from './NavBarMobile'

const Header = () => {
  const isMobile = useMedia('(max-width: 640px)')
  const [enableSidebarMobile, setEnableSidebarMobile] = useState<boolean>(false)
  const handleAction = {
    closeNavBar: () => {
      setEnableSidebarMobile(false)
    },
    toggleNavBar: () => {
      setEnableSidebarMobile(!enableSidebarMobile)
    },
  }
  const renderMobile = (
    <div className="w-full bg-white md:hidden">
      <div className="flex justify-between items-center p-2">
        <div
          className="bg-green-700 w-[40px] h-[40px] flex justify-center items-center cursor-pointer"
          onClick={handleAction.toggleNavBar}
        >
          <AiOutlineMenu className="fill-white w-[25px] h-[25px]" />
        </div>
        <Image src="/logo.jpg" alt="logo" width={60} height={60} />
        <div></div>
      </div>
      <div className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 p-2">
        <SearchForm />
      </div>
      {enableSidebarMobile && <NavBarMobile closeNavBar={handleAction.closeNavBar} />}
    </div>
  )
  const renderWebview = (
    <div className="w-full bg-white hidden  md:block lg:block xl:block 2xl:block">
      <div className="w-full bg-gradient-to-b from-green-500 to-green-600">
        <div className="flex justify-between items-center layout h-[40px] ">
          <p className="text-sm italic text-white font-semibold">{Info.welcomeMessage} !</p>
          <p className="text-sm text-white hover:text-yellow-400 flex items-center group">
            <LocationMaker color="" hoverColor="" />
            <span className="ml-2">{Info.companyAddress}</span>
          </p>
        </div>
      </div>
      <div className="layout flex justify-between items-center">
        <div className="flex items-center mr-20">
          <div className="object-cover">
            <Image src="/logo.jpg" alt="logo" width={100} height={100} />
          </div>
          <div className="flex flex-col justify-between ml-2 h-[60px]">
            <h1 className="text-[18px] font-bold w-[200px]">{Info.companyName}</h1>
            <p className="mt-1 text-sm italic">{Info.slogan}</p>
          </div>
        </div>
        <SearchForm />
        <div className="text-right ml-20">
          <p className="text-sm">Hotline tư vấn</p>
          <ul>
            <li>
              <a href={`tel:${Info.hotline}`} className="text-lg text-red-700 font-semibold">
                {Info.hotline}
              </a>
            </li>
            <li>
              <a href={`mailto:${Info.email}`} className="text-sm text-green-700">
                {Info.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <HeaderNavbar />
    </div>
  )

  return (
    <>
      {renderMobile} {renderWebview}
    </>
  )
}

export default Header
