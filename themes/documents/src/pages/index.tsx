import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Content } from "../components/styled"

const IndexPage = ({children, title}) => (
  <Layout>
    <Seo title={title}/>
    <Content>
      {children}
    </Content>
  </Layout>
)

export default IndexPage
