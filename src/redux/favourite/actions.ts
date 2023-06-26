import { ADD_TO_FAVOURITE,REMOVE_FROM_FAVOURITE,FAVOURITE_ERROR,CLEAR_FAVOURITE, LIST_FAVOURITE_SUCCESS, LIST_FAVOURITE_REQUEST } from "./types";

export const axiosAddToFavourite=(obj:any)=>{
    return({
        type:ADD_TO_FAVOURITE,
        obj
    })
}

export const axiosRemoveFromFavourite=(id:any)=>{
    return({
        type:REMOVE_FROM_FAVOURITE,
        id
    })
}

export const axiosFavouriteError=(error:any)=>{
    return({
        type:FAVOURITE_ERROR,
        error
    })
}

export const axiosClearFavourite=()=>{
    return({
        type:CLEAR_FAVOURITE,
    })
}

export const listFavouriteRequest=()=>{
    return({
        type:LIST_FAVOURITE_REQUEST
    })
}

export const listFavouriteSuccess=(data:any)=>{
    return({
        type:LIST_FAVOURITE_SUCCESS,
        data
    })
}