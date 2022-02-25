import React from 'react'
import { Info } from '@assets/info'
import { useMedia, useClickAway } from 'react-use'
import { FaBusinessTime, FaCcVisa } from 'react-icons/fa'
import { LocationMaker } from '@components/icons'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineCash } from 'react-icons/hi'
import { GiFactory } from 'react-icons/gi'
import { MdSendToMobile } from 'react-icons/md'
import ListCustomer from '@components/ListCustomer'
const bfooter = '@assets/images/bfooter.png'

const Footer = () => {
  const isMobile = useMedia('(max-width: 640px)')

  const renderCompanyAddress = (
    <>
      <div>
        <h2 className="text-base font-semibold">Nhà máy sản xuất</h2>
        <p className="text-sm my-3 flex text-white">
          <span>
            <GiFactory size={20} />
          </span>
          <span className="ml-2">{Info.factoryAddress}</span>
        </p>
        <p className="text-sm my-3 flex">
          <span>
            <AiOutlinePhone size={20} />
          </span>
          <a href={`tel:${Info.hotline}`}>
            <span className="ml-2">Hotline: {Info.hotline}</span>
          </a>
        </p>
      </div>
      <div className="mx-auto">
        <h2 className="text-base font-semibold">Văn phòng Hải dương</h2>
        <p className="text-sm my-3 flex text-white">
          <span>
            <LocationMaker color="" hoverColor="" />
          </span>
          <span className="ml-2">{Info.companyAddress}</span>
        </p>
        <p className="text-sm my-3 flex">
          <span>
            <AiOutlinePhone size={20} />
          </span>
          <a href={`tel:${Info.hotline}`}>
            <span className="ml-2">Hotline: {Info.hotline}</span>
          </a>
        </p>
      </div>
    </>
  )
  const renderCompanyInfo = (
    <div className="col-span-1 break-words">
      <h1 className="text-base md:text-lg font-semibold uppercase">{Info.companyFullName}</h1>
      <p className="text-sm my-3 flex">
        <span>
          <FaBusinessTime size={20} />
        </span>
        <span className="ml-2"> {Info.businessPaper}</span>
      </p>
      <p className="text-sm my-3 flex text-white">
        <span>
          <LocationMaker color="" hoverColor="" />
        </span>
        <span className="ml-2">{Info.companyAddress}</span>
      </p>
      <p className="text-sm my-3 flex">
        <span>
          <AiOutlinePhone size={20} />
        </span>
        <a href={`tel:${Info.hotline}`}>
          <span className="ml-2">Hotline: {Info.hotline}</span>
        </a>
      </p>
      <p className="text-sm my-3 flex">
        <span>
          <AiOutlineMail size={20} />
        </span>
        <a href={`mailto:${Info.email}`}>
          <span className="ml-2">Email: {Info.email}</span>{' '}
        </a>
      </p>
    </div>
  )

  const renderMobile = (
    <div className="bg-[#006332] w-full text-white py-4 px-2 divide-y divide-gray-100 divide-opacity-20">
      {renderCompanyInfo}
      {renderCompanyAddress}
    </div>
  )

  const renderWebView = (
    <div className="bg-[#006332] w-full text-white py-12">
      <div className="layout ">
        <div className="grid grid-cols-3">
          {renderCompanyInfo}
          <div className="col-span-2 divide-y divide-white divide-opacity-70 ml-12">
            <div className="grid grid-cols-2 justify-items-center">{renderCompanyAddress}</div>
            <div className="pt-5 grid grid-cols-3">
              <div>
                <h2 className="text-base font-semibold uppercase truncate">Thông tin chung</h2>
                <ul className="text-sm font-normal mt-3">
                  <li className="py-1 hover:underline">
                    <a href="#">Giới thiệu về chúng tôi</a>
                  </li>
                  <li className="py-1 hover:underline">Hướng dẫn mua hàng</li>
                  <li className="py-1 hover:underline">Hướng dẫn thanh toán</li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-semibold uppercase truncate ">Chính sách - Dịch vụ</h2>
                <ul className="text-sm font-normal mt-3">
                  <li className="py-1 hover:underline">
                    <a href="#">Chính sách bảo mật</a>
                  </li>
                  <li className="py-1 hover:underline">Chính sách đổi trả hàng</li>
                  <li className="py-1 hover:underline">Chính sách vận chuyển</li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-semibold uppercase truncate ">Hình thức thanh toán</h2>
                <div className="mt-3 flex justify-between items-center">
                  <FaCcVisa size={30} />
                  <HiOutlineCash size={30} />
                  <MdSendToMobile size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )

  return (
    <div className="w-full bg-[#EFEFEF]">
      <ListCustomer />
      <div
        style={{
          backgroundImage: `url('/images/bfooter.png')`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center bottom',
          backgroundSize: 'contain',
        }}
        className="h-[95px] w-full bg-[#f2f2f2]"
      ></div>
      {isMobile ? renderMobile : renderWebView}
      <div className="bg-[#034826] w-full ">
        <p className="layout text-white text-sm py-2 md:px-0">@2022 - Hưng Phát Uniform</p>
      </div>
    </div>
  )
}

export default Footer
