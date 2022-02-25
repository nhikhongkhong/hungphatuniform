import React from 'react'
import Image from 'next/image'
import * as _ from 'lodash'
import Marquee from 'react-fast-marquee'

import BgName from '@assets/images/bg_name.png'
import LineStar from '@assets/images/line_name.png'
const ListCustomer = () => {
  const listCustomer = [
    { src: '/images/customer/baolong.png', alt: 'baolong' },
    { src: '/images/customer/baoviet.jpg', alt: 'baoviet' },
    { src: '/images/customer/cadisun.png', alt: 'cadisun' },
    { src: '/images/customer/ducar.png', alt: 'ducar' },
    { src: '/images/customer/abc.jpg', alt: 'abc' },
    { src: '/images/customer/viettin.jpg', alt: 'viettin' },
    { src: '/images/customer/techcombank.jpg', alt: 'techcombank' },
    { src: '/images/customer/tienphong.png', alt: 'tienphong' },
  ]

  return (
    <div className="layout">
      <h1
        style={{
          backgroundImage: `url(${BgName.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="uppercase font-bold text-xl text-black text-center my-2"
      >
        Đối tác - Khách hàng tiêu biểu
      </h1>
      <div
        style={{
          backgroundImage: `url(${LineStar.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="h-[10px]"
      ></div>
      <div className="relative flex bg-gray-300 py-2 my-5 overflow-hidden group">
        <Marquee pauseOnHover={true} pauseOnClick={true} speed={30} gradient={false}>
          {_.map(listCustomer, (cus) => {
            return (
              <div className="mx-2 shadow-lg object-fit relative box-border">
                <Image src={cus.src} layout="fixed" width="184" height="118" alt={cus.alt} />
              </div>
            )
          })}
        </Marquee>
        {/* <div className="absolute animate-marquee2 customMarque flex">
          {_.map(listCustomer, (cus) => {
            return (
              <div className="mx-2 shadow-lg object-fit w-[184px] h-[120px] relative box-border">
                <Image src={cus.src} layout="fixed" width="184" height="118" alt={cus.alt} />
              </div>
            )
          })}
        </div> */}
      </div>
    </div>
  )
}

export default ListCustomer
