import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Container, Main, Header } from "./styled"
import Logo from './logo';
import Navigator from './navigator';
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [ isVisibleNav, setVisibleNav ] = useState(false);

  return (
    <Container>
      <Header>
        <Logo width={24} height={24} color={'#663399'} style={{ marginRight: 8 }} onClick={_ => {
          setVisibleNav(!isVisibleNav);
        }} />
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </Header>
      <Navigator isVisible={isVisibleNav}/>
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
