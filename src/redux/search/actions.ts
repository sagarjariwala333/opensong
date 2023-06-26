import { AXIOS_SEARCH_FAILURE,AXIOS_SEARCH_SUCCESS,AXIOS_SEARCH_REQUEST } from "./types";

export const axiosSearchRequest=(searchkey:string)=>{
    return({
        type:AXIOS_SEARCH_REQUEST,
        searchkey
    })
}

export const axiosSearchSuccess=(data:any)=>{
    return({
        type:AXIOS_SEARCH_SUCCESS,
        data
    })
}

export const axiosSearchFailure=(error:any)=>{
    return({
        type:AXIOS_SEARCH_FAILURE,
        error
    })
}

