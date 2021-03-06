import type { NextPage } from 'next'
import Head from 'next/head'
import WithLayout from '@hoc/WithLayout'
import { GiVibratingSmartphone, GiMailbox, GiHomeGarage } from 'react-icons/gi'
import { Info } from '@assets/info'

const Contact: NextPage = () => {
  const listItem = [
    { imgSrc: '/images/t-shirt/tshirt-2.jpg', title: 'Áo phông T02' },
    { imgSrc: '/images/t-shirt/tshirt-2.jpg', title: 'Áo phông T02' },
    { imgSrc: '/images/t-shirt/tshirt-2.jpg', title: 'Áo phông T02' },
    { imgSrc: '/images/t-shirt/tshirt-2.jpg', title: 'Áo phông T02' },
    { imgSrc: '/images/t-shirt/tshirt-2.jpg', title: 'Áo phông T02' },
    { imgSrc: '/images/t-shirt/tshirt-2.jpg', title: 'Áo phông T02' },
    { imgSrc: '/images/t-shirt/tshirt-2.jpg', title: 'Áo phông T02' },
  ]

  return (
    <>
      <Head>
        <title>Hưng Phát Uniform</title>
        <meta name="description" content="A Product of Vinox Co., Ltd" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className="layout py-12 md:pt-24  md:pb-48 text-center border shadow-2xl">
        <h1 className="text-4xl font-bold">Liên hệ với chúng tôi</h1>
        <p className="text-base md:w-2/3 my-8 mx-auto text-gray-600">
          Bạn có thể liên hệ với chúng tôi theo bất kỳ cách nào thuận tiện cho bạn. Chúng tôi luôn sẵn sàng 24/7 qua
          điện thoại hoặc email hoặc mời bạn đến thăm trực tiếp công ty của chúng tôi.
        </p>
        <div className="md:flex md:w-4/5 md:justify-between mx-auto divide-y md:divide-y-0 md:divide-x divide-gray-300">
          <div className="text-center p-2 md:w-1/3">
            <a href={`tel:${Info.hotline}`}>
              <GiVibratingSmartphone size={50} className="mx-auto" />
              <h3 className="mt-4 font-semibold text-xl">Điện thoại</h3>
              <h2 className="mt-2 font-bold text-lg text-red-700">{Info.hotline}</h2>
            </a>
          </div>
          <div className="text-center p-2 md:w-1/3 break-word">
            <GiHomeGarage size={50} className="mx-auto" />
            <h3 className="mt-4 font-semibold text-xl">Địa chỉ</h3>
            <h2 className="mt-2 font-bold text-lg text-red-700">{Info.shortCompanyAddress}</h2>
          </div>
          <div className="text-center p-2 md:w-1/3">
            <a href={`mailto:${Info.email}`}>
              <GiMailbox size={50} className="mx-auto" />
              <h3 className="mt-4 font-semibold text-xl">Email</h3>
              <h2 className="mt-2 font-bold text-lg text-red-700">{Info.email}</h2>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default WithLayout(Contact)
