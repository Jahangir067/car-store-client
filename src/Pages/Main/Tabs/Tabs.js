import React, { useEffect, useState } from 'react';
import './Tabs.css';
import Tab from '../Tab/Tab';

const Tabs = () => {

    const [tabs, setTabs] = useState([]);
    const [activeTab, setActiveTab] = useState("racing");

    useEffect( () => {
        fetch("http://localhost:5000/inventory")
        .then(res => res.json())
        .then(inventoris => {
            setTabs(inventoris)
        })
    }, []);


  
    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };
    return (
        <div>
        <h1 className="title text-center mt-5 p-5">Available Job's</h1>
        <div className="tab-container text-center">
          <div className="text-center w-100 m-auto">
            <div className="tabs d-flex justify-content-center align-items-center">
              <div
                onClick={() => handleTabClick("racing")}
                className={`tab  tab2 racing ${
                  activeTab === "racing" ? " bg-danger text-white" : ""
                }`}
              >
                Racing Car
              </div>
              <div
                onClick={() => handleTabClick("remoteControl")}
                className={`tab  tab2 remoteControl ${
                  activeTab === "remoteControl" ? " bg-danger text-white" : ""
                }`}
              >
                Remote Control
              </div>
              <div
                onClick={() => handleTabClick("truck")}
                className={`tab  tab2 truck ${
                  activeTab === "truck" ? " bg-danger text-white" : ""
                }`}
              >
                Truck
              </div>
            </div>
          </div>
        </div>
        <div className="jobs-container mt-5 row">
            {
                 tabs?.map((tab) => (
                    <Tab key={tab._id} tab={tab}></Tab>
                 ))
            }
        </div>
      </div>
    );
};

export default Tabs;