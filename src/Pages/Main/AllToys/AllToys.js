import React from "react";
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const AllToys = () => {
  const navigate = useNavigate();

  //  const LoadDetails = (id) => {
  //         navigate("/details" + id);
  //  }

    const [allToys, setAllToys] = useState([])
    useEffect( () => {
      fetch("https://assignment-11-car-store-server.vercel.app/inventory").then(res => {
        return res.json();
      }).then((resp) => {
        console.log(resp);
        setAllToys(resp)
      }).catch((err) => {
        console.log(err.message)
      })
    }, [])

    

    const displayData = (id) => {
          navigate("//details"+id)
    } 
    return (
        <div className='container'>
            <div className="card">

                <div className="card-title">
                 <h3 className='text-center'>All Toy Information</h3>
                </div>

                <div className="card-body">
                  <table className='table table-bordered'>
                    <thead className='bg-dark text-white text-center'>
                      <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View details</th>
                      </tr>
                    </thead>

                    <tbody>
                        {
                          allToys.map((allToy, index) => (
                            
                            <tr key={allToy._id}>
                            <td>{allToy.supplier}</td>
                            <td>{allToy.name}</td>
                            <td>{allToy.category}</td>
                            <td>{allToy.price}</td>
                            <td>{allToy.quantity}</td>
                            <td>{allToy._id}</td>
                            <td> 
                              <Link to={`/details/${allToy._id}`}>

                              <Button
                              onClick={() => {displayData(allToy.id)}}
                              className="w-100"
                              variant="outline-themeButton"> View Details
                              </Button>
                            </Link> </td>
                        </tr>
                          ))
                        }
                    </tbody>

                  </table>
                </div>

            </div>
        </div>
    );
};

export default AllToys;