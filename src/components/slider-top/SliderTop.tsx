import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import * as _ from 'lodash'
import { useMedia } from 'react-use'

const SliderTop = () => {
  const isMobile = useMedia('(max-width: 640px)')

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    speed: 500,
    arrow: false,
  }
  const settingProduct = {
    dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    speed: 500,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const listImage = [
    '/images/slider-image/slider-1.jpeg',
    '/images/slider-image/slider-2.jpeg',
    '/images/slider-image/slider-3.jpeg',
    '/images/slider-image/slider-4.jpeg',
  ]

  const listProduct = [
    { url: '/images/slide-product/ao-phong.png', title: 'Áo phông' },
    { url: '/images/slide-product/aophanquang.png', title: 'Áo phản quang' },
    { url: '/images/slide-product/camp-clothes.png', title: 'Áo bảo hộ' },
    { url: '/images/slide-product/fire.png', title: 'Bình cứu hoả' },
    { url: '/images/slide-product/glasses.png', title: 'Kính mắt' },
    { url: '/images/slide-product/gloves.png', title: 'Găng tay' },
    { url: '/images/slide-product/helmet.png', title: 'Mũ bảo hộ' },
    { url: '/images/slide-product/mask.png', title: 'Mặt nạ bảo hộ' },
    { url: '/images/slide-product/shoes.png', title: 'Giày bảo hộ' },
    { url: '/images/slide-product/uniform.png', title: 'Quần áo bảo hộ' },
  ]

  return (
    <>
      <Slider {...settings} className="">
        {_.map(listImage, (image) => {
          return <Image src={image} width={1349} height={456} alt="image" />
        })}
      </Slider>
      <Slider {...settingProduct} className="my-12">
        {_.map(listProduct, (prod) => {
          return (
            <div className="flex flex-col items-center border-x text-center text-gray-500">
              <Image
                src={prod.url}
                width={isMobile ? 40 : 70}
                height={isMobile ? 40 : 70}
                alt="image"
                className="opacity-70"
              />
              <p className="text-sm truncate">{prod.title}</p>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default SliderTop
