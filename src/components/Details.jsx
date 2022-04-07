
import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { selectedProduct } from "../redux/action";


 const Detail =()=> {
    const product=useSelector((state)=>state.product)
    const {image,title,price,category,description}=product 
    
    const {productId}=useParams()
    const dispatch = useDispatch()
    const fetchProductsDetail=() =>{
        const response = await axios.get (`https://fakestoreapi.com/products/${productid}`)
        .catch((err)=>{
            console.log("Err", err)
        });
        dispatch(selectedProduct(response.data))
    };

    useEffect(()=>{
        if(productId && productId !== "")fetchProductsDetail();  
    }, [productId])

    return(

        <div className="ui grid container">
            <div className="ui placeholder segment">
                <div className=""
            </div>

        </div>
    )
}



export default Detail;