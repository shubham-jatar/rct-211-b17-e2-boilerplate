//Create ActionCreator functions here
import * as type from"./actionTypes"

export const getShoesDataRequest=()=>{
    return{type:type.GET_SHOES_DATA_REQUEST};
}

export const getShoesDataSuccess=(payload)=>{
    return{type:type.GET_SHOES_DATA_SUCCESS};
}

export const getShoesDataFailure=()=>{
    return{type:type.GET_SHOES_DATA_FAILURE};
}