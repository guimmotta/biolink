import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store'
import BioPage from './components/BioPage'
import SaveTheDatePage from './components/SaveTheDatePage'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BioPage />} />
          <Route path="/save-the-date" element={<SaveTheDatePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
