
const initialstate={
    products: [],
}

function Reduce(state=initialstate,action){

    switch(action.type){

    case"SET_PRODUCT" :{
        return{...state,products:payload} 
    }

    default:
        return state;
    
    }
}





function selectedProductReducer(state={},action){
    switch(action.type){
        case"selectedProduct":{
            return {...state,...payload}
        };
        default:
            return state;

    }
};

export default selectedProductReducer ; Reduce;