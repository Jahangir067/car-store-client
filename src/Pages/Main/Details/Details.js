import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import allToys from '../AllToys/AllToys';

const Details = () => {
    const{id} = useParams();
    console.log(id,8);
    const [allToys, setallToys] = useState([])
    console.log(allToys)
    useEffect( () => {
        fetch(`http://localhost:5000/inventory/`+id).then(res => {
        return res.json();
      }).then((resp) => {
        console.log(resp);
        setallToys(resp)
      }).catch((err) => {
        console.log(err.message)
      })
    }, [])
    return (
        <div> 
          { allToys &&
             <Card className='ms-5 ps-5'  style={{ width: '18rem' }}>
             <Card.Img variant="top" src={allToys?.img} />
             <Card.Body>
               <Card.Title>Name: {allToys?.name}</Card.Title>
               
             </Card.Body>
             <ListGroup className="list-group-flush">
               <ListGroup.Item>Price: {allToys?.price}</ListGroup.Item>
               <ListGroup.Item>Quantity: {allToys?.quantity}</ListGroup.Item>
               <ListGroup.Item>Category: {allToys?.category}</ListGroup.Item>
               <ListGroup.Item>Supplier: {allToys?.supplier}</ListGroup.Item>
               <ListGroup.Item>Rating: {allToys?.rating}</ListGroup.Item>
             </ListGroup>
             <Card.Text>
             Description: {allToys?.description}
               </Card.Text>
           </Card>
          }

        </div>
    );
};

export default Details;