import React from 'react'
import { TreatProvider } from 'react-treat'

import GlobalStyles from './global-styles/src'

export default ({ children, theme }) => (
  <TreatProvider theme={theme}>
    <GlobalStyles>
      {children}
    </GlobalStyles>
  </TreatProvider>
)
