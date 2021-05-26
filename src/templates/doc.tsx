import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Content, Index } from "../components/styled"

export default function Doc({children}) {
  return (
  <Layout>
    <Seo title="Page two" />
    <Content>
      {children}
    </Content>
    <Index>
      Index
      Todo
    </Index>
  </Layout>)
};
