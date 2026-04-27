import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import BioPage from './components/BioPage'

export default function App() {
  return (
    <Provider store={store}>
      <BioPage />
    </Provider>
  )
}
