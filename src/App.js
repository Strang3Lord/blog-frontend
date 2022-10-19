import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import { Container } from 'react-bootstrap'
import BlogPage from './pages/BlogPage'
import Home from './pages/Home'
import CreateBlog from './pages/CreateBlog'

function App() {
  return (
    <Router>
      <Header />
      <main className='main'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<CreateBlog />} />
            <Route path='/:blogId' element={<BlogPage />} />
            <Route path='/search/:keyword' element={<Home />} />
          </Routes>
        </Container>
      </main>
    </Router>
  )
}

export default App
