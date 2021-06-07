import * as React from "react"
import { graphql, Link } from "gatsby"
import {
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = props => (
  <Layout>
    <Seo title="Home" />
    <List>
      {
        props.data.allMdx.edges.map(({node}) => (
        <>
          <Link to={node.fields.slug} key={node.fields.slug}>
            <ListItem>
              <ListItemText primary={node.frontmatter.title} />
            </ListItem>
          </Link>
          <Divider />
        </>
        ))
      }
    </List>
  </Layout>
)

export const pageQuery =
  graphql`{
    allMdx(
      filter: {
        fileAbsolutePath: {glob: "**/articles/**"}
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }`;

export default IndexPage
