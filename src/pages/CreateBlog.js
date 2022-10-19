import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import './pages.css'

const CreateBlog = () => {
  const [keywords, setKeywords] = useState([])
  const [keyword, setKeyword] = useState()
  const [img, setImg] = useState()
  const [heading, setHeading] = useState()

  const initialState = {
    desc: '',
    code: '',
    image: '',
  }
  const [obs, setObs] = useState([])
  const [ob, setOb] = useState(initialState)

  const add = () => {
    obs.push(ob)
    setOb(initialState)
    // console.log(obs)
  }

  const uploadImage = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await axios.post(
        'http://localhost:4000/upload/',
        formData,
        config
      )
      setOb({ ...ob, image: data })
    } catch (error) {
      console.error(error)
    }
  }

  const submitHandler = () => {
    const obj = {
      heading: heading,
      keywords: keywords,
      blogdata: obs,
    }
    axios
      .post('http://localhost:4000/blogs/', obj)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error))
  }

  return (
    <Form>
      <Button
        style={{ width: '100%' }}
        className='py-3 my-3'
        onClick={() => {
          add()
        }}
      >
        Add Data
      </Button>
      {'sjnsdv' + img}

      <FloatingLabel controlId='floatingInput' label='Heading' className='mb-3'>
        <Form.Control
          type='text'
          className='form-input'
          placeholder='name@example.com'
          onChange={(e) => setHeading(e.target.value)}
        />
      </FloatingLabel>

      <Row>
        <Col md={3}>
          <FloatingLabel
            controlId='floatingInput'
            label='Add Keywords'
            className='mb-3'
          >
            <Form.Control
              type='text'
              className='form-input '
              placeholder='name@example.com'
              onChange={(e) => setKeyword(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <Button
            onClick={() => {
              keywords.push(keyword)
              setKeyword('')
            }}
            className='py-3'
            variant='success'
          >
            Add Keywords
          </Button>
        </Col>
      </Row>

      <Row>
        <Col md={5}>
          <Form.Group controlId='formFile' className='mb-3'>
            <Form.Label>Select Image</Form.Label>
            <Form.Control type='file' onChange={(e) => uploadImage(e)} />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Add Description</Form.Label>
            <Form.Control
              as='textarea'
              className='form-input '
              onChange={(e) => setOb({ ...ob, desc: e.target.value })}
              rows={10}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Add Codes</Form.Label>
            <Form.Control
              as='textarea'
              className='form-input '
              onChange={(e) => setOb({ ...ob, code: e.target.value })}
              rows={20}
            />
          </Form.Group>
        </Col>
      </Row>

      <Button
        variant='primary'
        style={{ width: '100%' }}
        type='submit'
        className='fs-1 mt-5 mx-2 p-4'
        onClick={submitHandler}
      >
        POST
      </Button>
    </Form>
  )
}

export default CreateBlog
