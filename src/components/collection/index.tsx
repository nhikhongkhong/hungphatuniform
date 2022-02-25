import React from 'react'
import Item from './Item'
import Slider from 'react-slick'
import * as _ from 'lodash'
const BgName = '@assets/images/bg_name.png'

import { ItemModelITF } from '@interfaces'

interface CollcetionPropsITF {
  color?: string
  title?: string
  className?: string
  listItems: Array<ItemModelITF>
}

const index = (props: CollcetionPropsITF) => {
  const { color, title, listItems, className } = props
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 500,
    arrow: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className={`layout-slider ${color || 'bg-red-600'} p-1 rounded ${className}`}>
      <h1
        style={{
          backgroundImage: `url('/images/bg_name.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="uppercase font-bold text-xl text-white text-center my-2"
      >
        {title || 'sản phẩm mới nhất'}
      </h1>
      <Slider {...settings}>
        {_.map(listItems, (item) => {
          return <Item {...item} />
        })}
      </Slider>
    </div>
  )
}

export default index
