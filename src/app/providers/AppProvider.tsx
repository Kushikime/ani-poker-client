import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter'

export const AppProvider = () => {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}
