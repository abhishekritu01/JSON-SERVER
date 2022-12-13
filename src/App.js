import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Edit_users from './components/Edit_users'
import Add_users from './components/Add_users'
import Nav from './components/Nav'
import Home from './components/Home'
import All_users from './components/All_users'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add_users />} />
        <Route path='/edit/:id' element={<Edit_users />} />
        <Route path='/all' element={<All_users />} />
        {/* <Route element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App