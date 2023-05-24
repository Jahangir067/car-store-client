import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useInventory from "../../../hooks/useInventory";
import { Link, useNavigate } from "react-router-dom";

const MyItem = () => {
  // Get user
  const [user] = useAuthState(auth);
  // Get data from hook
  const [inventoris, setInventoris] = useInventory();
  // Load & set user item on state
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user.email;
    const getItems = async () => {
      const url = `https://assignment-11-car-store-server.vercel.app/inventory?email=${email}`;
      const { data } = await axios.get(url);
      setItems(data);
      console.log(data)
    };
    getItems();
  }, [user, inventoris]);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
      navigate("//update/"+id)
  }

  // Delete Item form DB
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://assignment-11-car-store-server.vercel.app/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaing = inventoris.filter(
            (inventory) => inventory._id !== id
          );
          setInventoris(remaing);
        });
    }
  };
  return (
    <div className='container'>
    <div className="card">

        <div className="card-title">
         <h3 className='text-center'>My Toys Information</h3>
        </div>

        <div className="card-body">
          <table className='table table-bordered'>
            <thead className='bg-dark text-white text-center'>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>View details</th>
              </tr>
            </thead>

            <tbody>
                {
                  items.map((item, index) => (
                    
                    <tr 
                    key={item._id}>

                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.rating}</td>
                    <td>{item.quantity}</td>
                    
                    <td> 
                    <Link to={`/update/${item._id}`}>

                      <Button
                      onClick={() => {LoadDetail(item.id)}}
                      className="w-100"
                      variant="outline-themeButton"> Update
                      </Button>
                    </Link> </td>
                    <td>
                    <Button
                  onClick={() => handleDelete(item._id)}
                  className="w-100 mb-2"
                  variant="outline-themeButton"
                >
                  Delete
                </Button>
                    </td>
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

export default MyItem;
