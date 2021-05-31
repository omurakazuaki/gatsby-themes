import React, { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Content } from '../components/styled';
import Prism from 'prismjs';
import { StaticImage } from "gatsby-plugin-image"
import 'prismjs/themes/prism-okaidia.css';

export default function Default({children, pageContext}) {

  const components = {
    h2: props => <h2 id={props.children} style={{paddingTop: 32, paddingBottom: 8, border: 0, borderBottom: 1, borderStyle: 'solid', borderColor: '#b0b0bb'}} {...props}/>,
    h3: props => <h3 id={props.children} style={{paddingTop: 16}} {...props}/>,
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout>
      <Seo title={pageContext.frontmatter.title} />
      <Content>
        <h1>{pageContext.frontmatter.title}</h1>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Content>
    </Layout>);
};
