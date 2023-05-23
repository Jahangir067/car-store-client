import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventory from "../../../hooks/useInventory";
import Loading from "../../Shared/Loading/Loading";
import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import SingleInventroy from "../SingleInventroy/SingleInventroy";
import Supplier from "../Supplier/Supplier";
import Tabs from "../Tabs/Tabs";

const Home = () => {
  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  // Get data from hook
  const [inventoris] = useInventory();
  console.log(inventoris)
  // Inventory slice for home
  const slicedInventoris = inventoris.slice(0, 6);
  return (
    <div>
      {/* Banner section */}
      <Banner />
      {/* Inventory Section */}

      {/* <div className='container'>

        <div className='bloc-tabs'>
            <div onClick={ () => toggleTab(1)} className={toggleState === 1 ? "tabs active-tabs" : "tabs"}>Racing Car</div>
            <div onClick={ () => toggleTab(2)} className={toggleState === 2 ? "tabs active-tabs" : "tabs"}>Remote Control</div>
            <div onClick={ () => toggleTab(3)} className={toggleState === 3 ? "tabs active-tabs" : "tabs"}>Truck</div>
        </div>

         <div className="content-tabs">

            <div className={toggleState === 1 ? "content active-content" : "content"}>
                
            </div>

            <div className={toggleState === 2 ? "content active-content" : "content"}>
                <h3>Content 2</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illum?</p>
            </div>

            <div className={toggleState === 3 ? "content active-content" : "content"}>
                <h3>Content 3</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illum?</p>
            </div>
            
         
        

        </div>
    </div> */}
    <Tabs></Tabs>

      
      {/* <Tabs /> */}
      {/* Supplier section */}
      <Supplier />
      {/* Footer section */}
      <Newsletter />
    </div>
  );
};

export default Home;
