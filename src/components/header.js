import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  .container {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div className="container">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
