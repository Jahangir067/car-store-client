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
        fetch(`https://assignment-11-car-store-server.vercel.app/inventory/`+id).then(res => {
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
             <div className='container d-flex justify-content-evenly align-items-center mt-5'  style={{ width: '18rem' }}>
             <div><img className='w-70' src={allToys?.img} alt="" /></div>
             
             <div className="ms-5 ps-5">
               <h5>Name:{allToys?.name}</h5>
               <p>Price:{allToys?.price}</p>
               <p>Quantity:{allToys?.quantity}</p>
               <p>Category:{allToys?.category}</p>
               <p>Supplier:{allToys?.supplier}</p>
               <p>Rating:{allToys?.rating}</p>
               <p>Description:{allToys?.description}</p>
               <button className='btn btn-primary'>Buy Now</button>
             </div>
             
           </div>
          }

        </div>
    );
};

export default Details;