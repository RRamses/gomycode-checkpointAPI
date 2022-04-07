import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Article from './Article'
import{useEffect} from 'react'
import axios from 'axios';
import { setproducts } from '../redux/action';


const Home = () => {
    // useSeletor permet d attribuer un etat qui se trouve dans un autre composant
    // a un etat dans le composant ou on a besoin de lui 
    const products=useSelector((state)=>state)
    let dispatch = useDispatch();
 
     const fetchProducts = async () =>{
        const response = await axios
        .get ('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setproducts(response.data))
        
    };

    useEffect(()=>{
        return fetchProducts;
    }, [] );
console.log("Products: ",products); 


    { /*useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
        .then(json=>{dispatch(setproducts(json))})  
    })*/}

    return (
        <div className='ui grid container'>
            <Article />

        </div>


    )

}



export default Home;