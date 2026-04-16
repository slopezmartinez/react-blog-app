import { useState } from 'react'
import './App.css'
import BlogPost from './BlogPost'
import Header from './Header.jsx'
import Footer from './Footer'
import BlogPostsPage from './BlogPostsPage'
import IndividualPostPage from './IndividualPostPage'
import ContactPage from './ContactPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {ThemeProvider} from './ThemeContext'
import Login from './Login'




function App() {
  

  return (
    <ThemeProvider>
      <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<BlogPostsPage />} />
          <Route path="/post/:id" element={<IndividualPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/login" element={<Login />} /> 
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

