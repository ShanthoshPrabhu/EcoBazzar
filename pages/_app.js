import '../styles/globals.css'
import { Provider as AuthProvider, SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export default function App({ Component,pageProps:{session, ...pageProps} }) {
  return (
    <SessionProvider>
       <Provider store={store}>
         <Component {...pageProps} />
       </Provider>
    </SessionProvider>
  )
}
