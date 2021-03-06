/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import '@fontsource/roboto';
import { ThemeProvider, createMuiTheme, Container } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2A2F33',
    },
    secondary: {
      main: '#BBB5A3',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container maxWidth="md">
        <div style={{paddingTop: 96}}>{children}</div>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
