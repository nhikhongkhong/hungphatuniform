import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { AppProps } from 'next/app'
import * as _ from 'lodash'

import WithLayout from '@hoc/WithLayout'
import Collection from '@components/collection'
import { LatestCollection, TrendingCollection, PopularCollection } from '@assets/data'
import { SideNav } from '@components/side-nav'
import { validPath } from '@helpers/utils'
import { getDataFromPath } from '@helpers/utils'
import TextBg from '@assets/images/text_bg.png'
import { Pagination } from '@components/pagination'
import Item from '@components/collection/Item'

interface Props {
  data: { title: string; list: Array<Record<string, any>> }
  metaData: { totalPage: number; totalItems: number }
}

const Home: NextPage<Props> = (props: Props) => {
  const { data, metaData } = props
  const { title, list } = data
  const { totalPage, totalItems } = metaData
  return (
    <>
      <Head>
        <title>Hưng Phát Uniform</title>
        <meta name="description" content="A Product of Vinox Co., Ltd" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className="layout md:grid md:grid-cols-5 py-12">
        <div className="hidden md:block md:col-span-1">
          <SideNav />
        </div>
        <div className="col-span-4 md:ml-5">
          <div className="bg-gradient-to-b from-green-600 to-green-800 h-[45px]">
            <h1
              className="font-bold uppercase text-white text-left pl-[50px] h-[45px] flex items-center"
              style={{
                backgroundImage: `url('/images/text_bg.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
              }}
            >
              {title}
            </h1>
          </div>
          <div className="my-12 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
            {_.map(list, (item) => {
              const { imgSrc, title, code } = item
              return <Item imgSrc={imgSrc} title={title} code={code} />
            })}
          </div>
          <Pagination pageCount={totalPage} />
        </div>
        <div className="mt-8 md:hidden">
          <SideNav />
        </div>
      </div>
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
  const { id, page = 1 } = context.query
  if (id && validPath(id as string)) {
    const data = getDataFromPath(id as string)

    const metaData = { totalPage: Math.ceil(data.list.length / 20), totalItems: data.list.length }
    const _start = +page - 1 > 0 ? (+page - 1) * 20 : 0
    const _end = +page * 20
    const _list = data.list.slice(_start, _end)
    data.list = _list
    return {
      props: { data, metaData },
    }
  }
  return { notFound: true }
}
