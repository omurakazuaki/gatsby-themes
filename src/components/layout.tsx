/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import "modern-css-reset"

import { Container, Main, Nav } from "./styled"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query DocsIndex {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(
        filter: {
          fileAbsolutePath: {glob: "**/docs/**"}
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
    }
  `);

  // TODO : get index from graphql
  const edges = data.allMdx.edges;

  return (
    <Container>
      <Nav>
        <h1>{data.site.siteMetadata.title}</h1>
        <ul>
          {edges.map(item => (
            <Link key={item.node.fields.slug} to={item.node.fields.slug}>
              <li>{item.node.frontmatter.title}</li>
            </Link>
          ))}
        </ul>
      </Nav>
      <Main>
        {children}
      </Main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
