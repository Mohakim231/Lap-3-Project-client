import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Notes, Forum, Home, Signup, Login } from './pages';
import { AuthProvider } from "./context";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/notes" element={<Notes />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div >
  );
}

export default App;
