import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Content } from "../components/styled"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Content>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Content>
  </Layout>
)

export default NotFoundPage
