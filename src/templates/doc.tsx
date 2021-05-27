import * as React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Content, Index, NavItem, NavList, PageIndex } from "../components/styled"

export default function Doc({children, pageContext}) {
  const navItems = children
    .filter(e => ['h2', 'h3'].includes(e.props.mdxType))
    .map((e, i) => (
      <NavItem key={i}>
        <Link to={`#${e.props.children}`}
          style={{
            display: 'flex',
            padding: 8,
            paddingLeft: e.props.mdxType == 'h2' ? 0 : 8
          }}>
          {e.props.children}
        </Link>
      </NavItem>
    ));

  const components = {
    h2: props => <h2 id={props.children} {...props}/>,
    h3: props => <h3 id={props.children} {...props}/>,
  };

  return (
    <Layout>
      <Seo title="Page two" />
      <Content>
        <h1>{pageContext.frontmatter.title}</h1>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Content>
      <Index>
        <PageIndex>INDEX</PageIndex>
        <NavList>
          {navItems}
        </NavList>
      </Index>
    </Layout>);
};
