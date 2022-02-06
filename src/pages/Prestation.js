import React from 'react';
import {useEffect, useState} from 'react'
import Nav from '../components/Nav';

const Prestation = () => {

    const  [prestation, setPrestation] = useState([])
    useEffect(() => {
        fetch("https://emancipateur.com/api/public/api/prestations", {
     
        headers: {
     
          'Accept': 'application/json',
        }})
          .then((res) => res.json())
          .then((data) => setPrestation(data));
        
      }, []);
  
   
console.log(prestation)

    return (

        <div className='prestation'>
            <Nav />
            <div className="prestationContent">

            <h1>Tarifs et prestations</h1>
            {prestation.map((item) => { return (
<div className="prestationDiv">
    <h2>{item.title}</h2>
    <p>{item.description}</p>

    <p>{item.price == 0 ? ( "Tarifs sur mesure" ) : item.price} €</p>
</div>
            )})}
            </div>
        </div>
    );
};

export default Prestation;