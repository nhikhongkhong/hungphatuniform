import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import * as _ from 'lodash'

import WithLayout from '@hoc/WithLayout'
import Collection from '@components/collection'
import { validPath, getDataFromPath } from '@helpers/utils'
import { ItemModelITF } from '@interfaces'

interface Props {
  item: ItemModelITF
  data: any
}

const Home: NextPage<Props> = (props) => {
  const { item, data } = props
  const { title, code, imgSrc } = item

  return (
    <>
      <Head>
        <title>Hưng Phát Uniform</title>
        <meta name="description" content="A Product of Vinox Co., Ltd" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className="layout my-4 md:my-12">
        <div className="md:flex mb-6 md:mb-12">
          <div className="w-full md:w-1/3 border border-gray-300 shadow-2xl">
            <Image src={imgSrc} alt={title} width={400} height={450} layout="responsive" />
          </div>
          <div className="w-full mt-3 md:mt-0 md:w-2/3 md:ml-5 flex flex-col">
            <h1 className="text-xl font-bold text-black">{title}</h1>
            <p className="text-sm mt-2 font-semibold">
              <span>Mã sản phẩm: </span>
              <span className="text-green-600 text-base">{code}</span>
            </p>
            <p className="text-sm font-semibold">
              <span>Giá sản phẩm: </span>
              <span className="text-red-600 uppercase text-base">Liên hệ</span>
            </p>
            <h2 className="text-sm mt-3 text-blue-600 font-semibold">Chi tiết sản phẩm</h2>
            <ul className="mt-1 p-2 border border-gray-300 shadow-xl flex-1 list-disc list-inside bg-white">
              <li>
                <span className="italic font-bold">
                  Quần áo bảo hộ lao động / may đồng phục bảo hộ lao động, Công ty Hưng Phát
                </span>{' '}
                chuyên thiết kế – sản xuất, may đo & bán quần áo bảo hộ may sẵn đẹp, đa dạng, chất lượng tốt, nhận in –
                thêu áo với nội dung theo yêu cầu. cam kết in – thêu đẹp chất lượng với giá rẻ nhất.
              </li>
              <li>
                Địa chỉ may đồng phục bảo hộ cho công nhân, kỹ sư, bảo vệ, quần áo phòng sạch cho nhiều công ty, doanh
                nghiệp tại Hải Dương, Hà Nội, Đà Nẵng, TPHCM, …
              </li>
              <li>
                <span className="italic font-bold"> Đồng phục Hưng Phát</span> hiểu được nhu cầu của công nhân cũng như
                các doanh nghiệp. Chúng tôi nhận may theo mẫu, bán đồng phục bảo hộ may sẵn đẹp, giá rẻ, giúp cho khách
                hàng giảm được một khoản chi phí đáng kể. Các sản phẩm đồng phục của chúng tôi luôn được may với chất
                vải bền, đẹp. Thiết kế đảm bảo sự thoải mái, tiện lợi nhất với tính chất công việc của bạn. Quần áo công
                nhân mùa hè, mùa đông, quần áo phản quang, giày, mũ bảo hộ, … với nhiều mẫu mã, kiểu dáng đa dạng. Quý
                khách vui lòng liên hệ với chúng tôi để được hưởng những dịch vụ ưu đãi nhất.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Collection listItems={data.list} title={'Sản phẩm cùng loại'} color="" className="mb-5" />
    </>
  )
}

export default WithLayout(Home)

/**
 * *get sesssion from ssr
 * @param {*} context
 * @returns
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, slug } = context.query
  const data = getDataFromPath(id as string)
  const item = _.find(data.list, { code: slug })
  if (item)
    return {
      props: { item, data },
    }
  return { notFound: true }
}
