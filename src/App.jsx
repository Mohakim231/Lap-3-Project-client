import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import secureRoute from './components/secureRoute';
import { Create, Forum, Home, PublicNote, Signup, Login } from './pages'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <secureRoute path='home' element={<Home/>}/>
          <secureRoute path='forum' element={<Forum/>}/>
          <secureRoute path='create' element={<Create/>}/>
          <secureRoute path='Public' element={<PublicNote/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
