import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// import Header from '../header' El header se debe posicionar absoluto, lo comente para que el carousel del home se vea bien #MIGUEL
import './layout.css'
import { GlobalFonts } from '../styledComponents'

// Los componentes se conectan a graphql con "Static Query" (OJO solo debe ser usado para componentes que deban consultar)
// De resto los que deben conectarse son los contenedores y enviarlo a los componentes

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        { /*<Header siteTitle={data.site.siteMetadata.title} />*/}
        <GlobalFonts />
        <div
          style={{
            margin: '0 auto',
            // maxWidth: 960,
            // padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
