import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Searchbox = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <div id='searchboxid' className='ms-auto input-group mb-9'>
        <input
          type='text'
          style={{
            borderBottom: '1px solid white',
            background: 'white',
          }}
          name='q'
          className='form-control'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Product...'
          aria-label="Recipient's username"
          aria-describedby='button-addon2'
        />
        <button
          style={{
            background: '#00000000',
            color: 'white',
            margin: '1px',
            border: '1px solid white',
          }}
          type='submit'
          id='button-addon2'
        >
          search
        </button>
      </div>
    </Form>
  )
}

export default Searchbox
