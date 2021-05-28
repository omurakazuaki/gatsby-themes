import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Content, Index, NavItem, NavList, PageIndex } from '../components/styled';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

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
    h2: props => <h2 id={props.children} style={{paddingTop: 32, paddingBottom: 8, border: 0, borderBottom: 1, borderStyle: 'solid', borderColor: '#b0b0bb'}} {...props}/>,
    h3: props => <h3 id={props.children} style={{paddingTop: 16}} {...props}/>,
  };

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Layout>
      <Seo title={pageContext.frontmatter.title} />
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
