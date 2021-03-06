import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SliderTop } from '@components/slider-top'
import WithLayout from '@hoc/WithLayout'
import Collection from '@components/collection'
import { LatestCollection, TrendingCollection, PopularCollection } from '@assets/data'

const Home: NextPage = () => {
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
      <div className="w-full md:w-8/12 mx-auto"></div>
      <div className="layout">
        <SliderTop />
      </div>
      <Collection listItems={LatestCollection} title={'Sản phẩm mới nhất'} color="" className="mb-5" />
      <Collection listItems={TrendingCollection} title={'Sản phẩm nổi bật'} color="bg-[#176334]" className="mb-5" />
      <Collection listItems={PopularCollection} title={'Quan tâm nhiều nhất'} color="bg-[#FE8A25]" className="mb-5" />
    </>
  )
}

export default WithLayout(Home)
