import type { NextPage } from 'next'
import Head from 'next/head'
import * as _ from 'lodash'
import Fuse from 'fuse.js'
import WithLayout from '@hoc/WithLayout'
import { AllCollection } from '@assets/data'
import { SideNav } from '@components/side-nav'
import { GetServerSideProps } from 'next'
import Item from '@components/collection/Item'
import TextBg from '@assets/images/text_bg.png'
import { Pagination } from '@components/pagination'

interface Props {
  list: Array<Record<string, any>>
  metaData: { totalPage: number; totalItems: number }
  keyword: string
}

const Home: NextPage<Props> = (props: Props) => {
  const { list, metaData, keyword } = props
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
                backgroundImage: `url('/images/text_bg/png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
              }}
            >
              {`Có ${totalItems} kết quả với từ khoá`} <span className="text-red-600 ml-2">{keyword}</span>
            </h1>
          </div>
          <div className="my-12 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
            {_.map(list, (item) => {
              const { imgSrc, title, code } = item
              return <Item imgSrc={imgSrc} title={title} code={code} />
            })}
          </div>
          {totalItems > 0 && <Pagination pageCount={totalPage} />}
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
  const { page = 1, keyword } = context.query
  const options = {
    keys: ['title', 'code'],
  }
  const fuse = new Fuse(AllCollection, options)

  const dataSearch = keyword
    ? _.map(fuse.search(keyword as string), (res) => {
        return res.item
      })
    : []
  console.log(dataSearch)

  const metaData = { totalPage: Math.ceil(dataSearch.length / 20), totalItems: dataSearch.length }
  const _start = +page - 1 > 0 ? (+page - 1) * 20 : 0
  const _end = +page * 20
  const list = dataSearch.slice(_start, _end)

  return {
    props: { list, metaData, keyword },
  }
}
