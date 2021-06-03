import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Nav, NavList, NavSection, NavItem } from "./styled"

const Navigator = ({isVisible} : {isVisible: boolean}) => {
  const data = useStaticQuery(graphql`
    query DocsIndex {
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
              padding: '8px 0 8px 8px',
            }}
            activeStyle={{
              color: '#663399',
              backgroundColor: 'rgb(255 255 255 / 50%)',
              boxShadow: '0 .8rem .8rem rgb(0 0 0 / 10%)'
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
    <Nav isVisible={isVisible}>
      { PageList(indexTree) }
    </Nav>
  )
}

export default Navigator;
