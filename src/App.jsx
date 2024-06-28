import React from 'react'
import Header from './Components/Header'
import SideContent from './Components/SideContent'
import Tab from './Components/Tab'
import Home from './Components/Home'

export default function App() {
  return (
    <div>
      <Header/>
      <Tab/>
      <SideContent/>  
      <Home/>
    </div>
  )
}
