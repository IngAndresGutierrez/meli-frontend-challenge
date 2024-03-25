import store from '@/redux/store'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import theme from '../modules/common/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
