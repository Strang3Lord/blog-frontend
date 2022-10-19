import React, { useState } from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './pages.css'

const Header = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    }
    window.location.reload()
  }
  const [toggleSearch, setToggleSearch] = useState(false)

  function searchToggle() {
    // var container = obj.closest('.search-wrapper')
    // console.log(0)

    // if (!container.hasClass('active')) {
    //   console.log(1)

    //   container.addClass('active')
    //   console.log(2)

    //   evt.preventDefault()
    //   console.log(3)
    // } else if (
    //   container.hasClass('active') &&
    //   obj.closest('.input-holder').length === 0
    // ) {
    //   console.log(4)

    //   container.removeClass('active')
    //   console.log(5)

    //   // clear input
    //   container.find('.search-input').val('')
    // }
    // console.log(6)

    setToggleSearch(!toggleSearch)
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        variant='dark'
        className='mx-1 px-5 py-3 mb-4 nvbar'
      >
        <Navbar.Brand className='fs-1' href='/'>
          Pi-Blogs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
