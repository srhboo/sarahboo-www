import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import './normalize.css'

const base = css`
  min-height: 100vh;
`

const Layout = ({ children }) => <div css={base}>{children}</div>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
