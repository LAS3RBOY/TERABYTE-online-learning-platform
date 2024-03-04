// Import necessary dependencies
import React from 'react';
import Navbar from './component/Navbar/Navbar';
import About from './component/About/About';
import Roadmap from './component/Roadmap/Roadmap';
import Footer from './component/Footer';
import Compiler from './component/Compiler/Compiler';
import Quiz from './component/Quiz/Quiz';
import Login from './component/Users/Login';
import Register from './component/Users/Register';
import { AuthProvider } from './component/Users/AuthContext';
import CoursePage from './component/Course/CoursePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/course' element={<CoursePage />} />
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/compiler' element={<Compiler />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
