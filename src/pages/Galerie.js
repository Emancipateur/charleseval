import React from 'react';
import {useEffect, useState} from 'react'
import Nav from '../components/Nav';

const Galerie = () => {
   const  [pictures, setPictures] = useState([])
   const radios = ["Mariage", "Grossesse", "Bébé", "Famille", "Baptême", "Couple" ];
   const [selectedRadio, setSelectedRadio] = useState('');
   const [category, setCategory] = useState()

        useEffect(() => {
      fetch("https://emancipateur.com/api/public/api/pictures", {
   
      headers: {
   
        'Accept': 'application/json',
      }})
        .then((res) => res.json())
        .then((data) => setPictures(data));
      
    }, []);



    switch (selectedRadio){
      case "Mariage" :
        setSelectedRadio("/api/categories/1");
        break;
      case "Grossesse":
        setSelectedRadio("/api/categories/2")
        break;
      case "Bébé" :
        setSelectedRadio("/api/categories/3");
        break;
      case "Famille":
        setSelectedRadio("/api/categories/4")
        break;
      case "Baptême" :
        setSelectedRadio("/api/categories/5");
        break;
      case "Couple":
        setSelectedRadio("/api/categories/6")
        break;
      
    }

  
    return (
        <div className='galerie'>
          <Nav />
            <div className="choiceCategory">
            <ul>
          {radios.map((radio) => {
            return (
              <li className="radioTheme" key={radio}>
                <input
                  type="radio"
                  name="choiceCategory"
                  value={radio}
                  id={radio}
       
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <label className='labelChoice' htmlFor={radio}>{radio} </label>
              </li>
            );
          })}
        </ul>
            </div>


          <div className="galerieContent">
      
          {(!selectedRadio  == "") ? (
      pictures.filter(picture => picture.category.includes(selectedRadio))
      .map(picture => (

          <img className='picGalerie' src={picture.url} alt={picture.title} />)
          )) :



        pictures.map( (picture) => { return (
        
        <img className='picGalerie' src={picture.url} alt={picture.title} />)
})}
     
      
        </div>
              
        </div>
    );
};

export default Galerie;