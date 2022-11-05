import React from 'react'
import {Card, Col , Row} from 'react-bootstrap'
import data from '../helper/data'


const Albums = () => {


  const renderAlbums = (props, index) => {
  return (
    <div>
      <Card key={index}>
        <Card.Title className='title'>{props.title}</Card.Title>
        <Card.Img variant='bottom' src={props.image}/>
        
      </Card>
    </div>
  )
  }
  return(
    <div className='flex'>{data.map(renderAlbums)}</div>
  )
}

export default Albums