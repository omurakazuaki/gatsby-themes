import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

export default function Articles({children, pageContext}) {
  const navItems = children
    .filter(e => ['h2', 'h3'].includes(e.props.mdxType))
    .map((e, i) => (
      <Link to={`#${e.props.children}`}>
        <ListItem>
          <ListItemText primary={e.props.children} />
        </ListItem>
      </Link>
    ));

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
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <h1>{pageContext.frontmatter.title}</h1>
          <MDXProvider components={components}>{children}</MDXProvider>
        </Grid>
        <Grid item xs={12} md={3}>
          <List>
            {navItems}
          </List>
        </Grid>
      </Grid>
    </Layout>);
};
