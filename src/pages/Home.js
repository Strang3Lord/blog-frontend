import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './pages.css'
import ListItem from './ListItem'
import { Button, Row } from 'react-bootstrap'
import searchIcon from '../assets/search.png'
import closeIcon from '../assets/close.png'

const Home = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const keyword = window.location.pathname.split('/')[2]
    ? window.location.pathname.split('/')[2]
    : ''

  useEffect(() => {
    receive()
  }, [])

  const [toggleSearch, setToggleSearch] = useState(false)
  const receive = async () => {
    await axios
      .get(`http://localhost:4000/blogs?keyword=${keyword}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((error) => setError(error))
  }

  function searchToggle() {
    setToggleSearch(!toggleSearch)
  }

  const receiveWithKeyword = async (e, word) => {
    e.preventDefault()

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        'http://localhost:4000/blogs/searchwithkeywords',
        { keyword: word },
        config
      )
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className={(toggleSearch ? 'active ' : '') + ' search-wrapper '}>
        <div className='input-holder'>
          <input
            type='text'
            className='search-input'
            placeholder='Type to search'
            onChange={(e) => {
              receiveWithKeyword(e, e.target.value)
              console.log(e.target.value)
            }}
          />
          <button className='search-icon' onClick={searchToggle}>
            {toggleSearch ? (
              <img style={{ height: '40px' }} src={closeIcon} alt='' />
            ) : (
              <img style={{ height: '40px' }} src={searchIcon} alt='' />
            )}
          </button>
        </div>
      </div>

      {data.map((item) => (
        <ListItem item={item} />
      ))}
    </>
  )
}

export default Home
