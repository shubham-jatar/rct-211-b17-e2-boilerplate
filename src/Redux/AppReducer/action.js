//Create ActionCreator functions here
import * as type from"./actionTypes"

const getShoesDataRequest=()=>{
    return{type:type.GET_SHOES_DATA_REQUEST};
}

const getShoesDataSuccess=(payload)=>{
    return{type:type.GET_SHOES_DATA_SUCCESS};
}

const getShoesDataFailure=()=>{
    return{type:type.GET_SHOES_DATA_FAILURE};
}