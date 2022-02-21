import React from 'react'
import { IconPropsITF } from '@interfaces'

const Product = (props: IconPropsITF) => {
  const { color, hoverColor } = props
  return (
    <svg
      className={`fill-current ${color} hoverColor:fill-current hoverColor:${hoverColor} group-hoverColor:${hoverColor}`}
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 0H1V2H17V0ZM18 10V8L17 3H1L0 8V10H1V16H11V10H15V16H17V10H18ZM9 14H3V10H9V14Z" />
    </svg>
  )
}

export default Product
