import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'

const ListItem = ({ item }) => {
  const navigate = useNavigate()

  const submitHandler = (e, keyword) => {
    e.preventDefault()
    navigate(`/search/${keyword}`)
    window.location.reload()
  }

  return (
    <Card key={item.id} className=' list-item '>
      <LinkContainer to={`/${item._id}`}>
        <Row>
          <div className='home-title'>{item.heading}</div>
        </Row>
      </LinkContainer>
      <Row>
        <Col
          className='fs-4  mx-2 mt-3 '
          style={{ maxWidth: 'min-content', fontStyle: 'italic' }}
        >
          #keywords
        </Col>
        {item.keywords?.map((keyword) => (
          <Col
            key={0}
            className='fs-3 keywords mx-2 mt-3 '
            onClick={(e) => {
              submitHandler(e, keyword)
            }}
          >
            {keyword && keyword}
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default ListItem
