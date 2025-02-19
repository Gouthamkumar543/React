import React from 'react'
import { Count } from './functional_components/count/count'
import { Login } from './functional_components/login/login'

export const App = () => {
  return (
    <div>
      <Count />
      <Login />
    </div>
  )
}
