import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Create, Forum, Home, Signup, Login } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
