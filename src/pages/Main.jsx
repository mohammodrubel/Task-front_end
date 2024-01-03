import React from 'react'
import {Outlet} from 'react-router-dom'
import Navigation from '../components/Navigation'

function Main() {
  return (
    <div>
        <Navigation />
        <Outlet/>
        <footer>this is footer</footer>
    </div>
  )
}

export default Main
