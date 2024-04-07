/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
// import SeviceCard from "./SeviceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    } , [])



    return (
        <div className="text-center">
            <h3 className="text-3xl text-orange-500 font-bold">Our Services</h3>
            <h2 className="text-5xl">Our Service Area</h2>
            <p>The majority that suffered alteration in some form,by injected humor, or randomised words which don't look even sligthly believable</p>
            {/* <h1>{services.length}</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;