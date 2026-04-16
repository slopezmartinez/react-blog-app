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
// import Login from './Login'




function App() {
  const myContent = {
    title: "My First Blog Post",
    content: "This is the content of my first blog post. Welcome to my blog! Hope you enjoy reading it.",
    author : "Sarah Lopez",
    date : "2025-03-26"
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<BlogPostsPage />} />
          <Route path="/post/:id" element={<IndividualPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

