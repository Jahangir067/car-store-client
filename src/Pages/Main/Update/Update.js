import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:5000/inventory/`+id).then(res => {
        return res.json();
      }).then((resp) => {
        console.log(resp);
        setItems(resp)
      }).catch((err) => {
        console.log(err.message)
      })
    }, [])

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(price, quantity, description)
        const updatedData = {price, quantity, description}

        fetch(`http://localhost:5000/inventory/${items.id}`, {
            method: 'PUT',
            headers: {
                'content-type:': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            {    items &&
             <form onSubmit={handleUpdate} className='text-center mb-3'>
                <input type="number" name="price" defaultValue={items?.price} id="" /> <br />
                <br />
                <input type="number" name="quantity" defaultValue={items?.quantity} id="" /> <br />
                <br />

                <input type="text" name="description" placeholder='description'  id="" /> <br />
                <br />
                <input className='btn btn-primary' type="submit" value="Update" />
             </form>
               
            }
        </div>
    );
};

export default Update;