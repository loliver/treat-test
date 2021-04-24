import React from 'react'
import BodyClassName from 'react-body-classname'
import { useStyles } from 'react-treat'
import cn from 'classnames'
import 'normalize.css'

import * as styleRefs from './global.treat'
import { GlobalStylesInterface } from './index.typed'

const GlobalStyles = ({ children }: GlobalStylesInterface) => {
  const styles = useStyles(styleRefs)
  return (
    <BodyClassName
      className={cn({
        [styles.bodyStyle]: true
      })}>
      <>{children}</>
    </BodyClassName>
  )
}

export default GlobalStyles
