import React from 'react'
interface WithLayoutITF {}
import Layout from '@components/layout'

const WithLayout = <P extends Record<string, unknown>>(Component: React.ElementType): React.FC<P & WithLayoutITF> => {
  const withLayoutWrap = ({ ...props }: WithLayoutITF) => {
    return (
      <Layout>
        <div className="bg-[#EFEFEF] w-full">
          <Component {...(props as P)} />
        </div>
      </Layout>
    )
  }
  return withLayoutWrap
}

export default WithLayout
