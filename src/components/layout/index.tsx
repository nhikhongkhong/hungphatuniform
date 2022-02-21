import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { FCProps } from '@interfaces/index'

const Layout = (props: FCProps) => {
  const { children } = props
  return (
    <div className={`flex flex-col items-center min-h-screen w-full`}>
      <Header />
      <div className="w-full lg:w-3/5 flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
