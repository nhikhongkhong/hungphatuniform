/* eslint-disable react/display-name */
import React from 'react'
interface WithLayoutITF {}
import Layout from '@components/layout'

const WithLayout = <P extends Record<string, unknown>>(Component: React.ElementType): React.FC<P & WithLayoutITF> => {
  return ({ ...props }: WithLayoutITF) => {
    return (
      <Layout>
        <Component {...(props as P)} />
      </Layout>
    )
  }
}

export default WithLayout
