/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
const Container = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding: 20px;
	text-align:center;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
						title,
						subTitle
          }
        }
      }
    `}
    render={({site:{siteMetadata}}) => (
      <>
        <Header siteTitle={siteMetadata.title} siteSubtitle={siteMetadata.subTitle} />
        <Container>
          <section>{children}</section>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
