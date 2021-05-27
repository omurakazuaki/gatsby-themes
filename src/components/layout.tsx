/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.css"
import logo from "../images/gatsby-icon.png"

import { Container, Main, Nav, SiteName, Logo, NavList, NavSection, NavItem } from "./styled"

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

  const indexTree = data.allMdx.edges.reduce((tree, {node}) => {
    const path = node.fields.slug.split('/').filter(v=>v.length > 0);
    let current = tree;
    while (path.length) {
      const dir = path.shift();
      if (path.length) {
        if (current[dir] == undefined) {
          current[dir] = {dir};
        }
      } else {
        current[dir] = {
          dir,
          isLeaf: true,
          slug: node.fields.slug,
          title: node.frontmatter.title
        };
      }
      current = current[dir];
    }
    return tree;
  }, {});

  const PageList = (node) => {
    if (node.isLeaf) {
      return (
        <NavItem key={node.slug}>
          <Link to={node.slug}
            style={{
              display: 'flex',
              padding: 8
            }}
            activeStyle={{
              color: '#6d2f9c',
              backgroundColor: '#F2F2FA'
            }}
          >
          {node.title}
          </Link>
        </NavItem>);
    } else {
      return (
        <div key={node.dir}>
          { node.dir ? <NavSection>{node.dir}</NavSection> : <></>}
          <NavList>
            {Object.keys(node)
              .filter(key=>key != 'dir')
              .map(key=>node[key])
              .sort((a, b) => {
                if (a.isLeaf && !b.isLeaf) return -1;
                if (!a.isLeaf && b.isLeaf) return 1;
                return a.dir.localeCompare(b.dir);
              })
              .map(newNode=>PageList(newNode))}
          </NavList>
        </div>);
    }
  };

  return (
    <Container>
      <Nav>
        <SiteName>
          <Logo src={logo} width={24} />
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </SiteName>
        { PageList(indexTree) }
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
