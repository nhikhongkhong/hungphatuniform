import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FaBusinessTime, FaCcVisa } from 'react-icons/fa'
import { LocationMaker } from '@components/icons'
import { AiOutlinePhone, AiOutlineMail, AiOutlineBank } from 'react-icons/ai'
import { HiOutlineCash } from 'react-icons/hi'
import { GiFactory } from 'react-icons/gi'
import { MdSendToMobile } from 'react-icons/md'
import { SliderTop } from '@components/slider-top'
import WithLayout from '@hoc/WithLayout'
import Collection from '@components/collection'
import { LatestCollection, TrendingCollection, PopularCollection } from '@assets/data'
import { Info } from '@assets/info'

const Gift: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hưng Phát Uniform</title>
        <meta name="description" content="A Product of Vinox Co., Ltd" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className="layout">
        <Image src={'/images/gift/gift-8.jpg'} width={1349} height={456} alt="image" />
        <div className="mt-5 mb-12 p-5 shadow-2xl border border-gray-300">
          <h1 className="text-xl uppercase font-bold text-center">Kính gửi quý khách hàng</h1>
          <p className="mt-5 text-sm">
            Trải qua chặng đường dài phát triển Hưng Phát Uniform đã không ngừng phát triển và lớn mạnh với một mục tiêu
            duy nhất là đem lại ngày càng nhiều lợi ích thiết thực nhất cho quý khách hàng. Bên cạnh đó chúng tôi cũng
            đã nhận được rất nhiều ý kiến đóng góp và xây dựng của Quý khách hàng để hoàn thiện hơn nữa trên con đường
            phát triển của mình.
            <br />
            <br /> Để đáp lại sự tin tưởng của Quý khách hàng và thay lời cảm ơn sâu sắc đến Quý khách hàng đã gắn bó
            với Công ty chúng tôi trong thời gian qua Hưng Phát xin gởi đến Quý khách hàng lời chúc tốt đẹp nhất và bên
            cạnh đó là chương trình Tri Ân Khách Hàng với những quà tặng như sau: <br />
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:mb-12">
          <Image alt="gift-1" src={'/images/gift/gift-1.jpg'} width="500" height="300" />
          <Image alt="gift-2" src={'/images/gift/gift-2.jpg'} width="500" height="300" />
          <Image alt="gift-3" src={'/images/gift/gift-3.jpg'} width="500" height="300" />
          <Image alt="gift-4" src={'/images/gift/gift-4.jpg'} width="500" height="300" />
          <Image alt="gift-5" src={'/images/gift/gift-5.jpg'} width="500" height="300" />
          <Image alt="gift-6" src={'/images/gift/gift-6.jpg'} width="500" height="300" />
          <Image alt="gift-7" src={'/images/gift/gift-7.jpg'} width="500" height="300" />
          <Image alt="gift-7" src={'/images/gift/gift-8.jpg'} width="500" height="300" />
        </div>
      </div>
    </>
  )
}

export default WithLayout(Gift)
