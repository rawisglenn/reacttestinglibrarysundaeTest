//whole section, contain individual scoop options
//each section accept a prop that describe it
import axios from 'axios';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOptions from './ScoopOption';
import ToppingOptions from './ToppingOption';
import AlertBanner from '../common/AlertBanner';

export default function Options({optionType}){

const [items, setItems] = useState([]);
const [isError, setError] = useState(false);

useEffect(()=>{
    axios.get(`http://localhost:3030/${optionType}`)
    .then((response) => setItems(response.data))
    .catch((error) => {
      setError(true);
    });
},[optionType]);

if(isError){return(<AlertBanner/>);}

const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOptions;

//render an array of itemComponent
const optionItems = items.map((item)=> (
    <ItemComponent 
    key={item.name} 
    name={item.name} 
    imagePath={item.imagePath}
    />
    ));

    return <Row>{optionItems}</Row>;
}