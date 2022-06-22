//whole section, contain individual scoop options
//each section accept a prop that describe it
import axios from 'axios';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';

export default function Options({optionsType}){

const [items, setItems] = useState([]);

useEffect(()=>{
    axios.get('http://localhost:3030/'+optionsType)
    .then((response) => setItems(response.data))
    .catch((error) => {
      console.log(error);
    });
},[optionType]);

const itemComponent = optionsType == scoop ? <ScoopOption/> : null;

//render an array of itemComponent
const optionItems = items.map((item)=><itemComponent key={item.name} name={item.name} imagePath={item.imagePath}/>);

    return <Row>{optionItems}</Row>;
}