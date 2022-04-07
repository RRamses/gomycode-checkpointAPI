

export const setproducts =(products)=>{
    return{
        type:"SET_PRODUCT",
        payload: products,
    }
}

export const selectedProduct = (product) =>{

    return{
        type:"SELECTED_PRODUCT",
        payload:product,
    }
}





