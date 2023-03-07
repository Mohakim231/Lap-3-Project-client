import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Create, Forum, Home, PublicNote, Signup, Login } from './pages'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='home' element={<Home/>}/>
          <Route path='forum' element={<Forum/>}/>
          <Route path='create' element={<Create/>}/>
          <Route path='Public' element={<PublicNote/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
