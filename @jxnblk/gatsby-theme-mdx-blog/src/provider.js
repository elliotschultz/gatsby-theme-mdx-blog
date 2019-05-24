import React from 'react'
import { Global } from '@emotion/core'
import { css } from 'theme-ui'
import merge from 'lodash.merge'
// todo...
// import components from './components'

const reset = (
  <Global
    styles={theme => css({
      '*': { boxSizing: 'border-box' },
      body: {
        margin: 0,
        color: 'text',
        bg: 'background',
      }
    })(theme)}
  />
)

export default props => {
  return (
    <>
      {reset}
      {props.children}
    </>
  )
}
