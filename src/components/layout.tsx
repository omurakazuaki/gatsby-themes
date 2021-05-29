/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.css"

import { Container, Main, Nav, Header, NavList, NavSection, NavItem } from "./styled"
import Logo from './logo';

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
              color: '#663399',
              backgroundColor: '#fff'
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

  const [ isVisibleNav, setVisibleNav ] = useState(false);

  return (
    <Container>
      <Header>
        <Logo width={24} height={24} color={'#663399'} style={{ marginRight: 8 }} onClick={_ => {
          setVisibleNav(!isVisibleNav);
        }} />
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </Header>
      <Nav isVisible={isVisibleNav}>
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
