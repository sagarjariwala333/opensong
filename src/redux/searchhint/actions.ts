import { AXIOS_SEARCH_HINT_FAILURE,
    AXIOS_SEARCH_HINT_SUCCESS,
    AXIOS_SEARCH_HINT_REQUEST } from "./types";

export const axiosSearch_hintRequest = (searchkey:string) => {
    return({
        type: AXIOS_SEARCH_HINT_REQUEST,
        searchkey
    })
}

export const axiosSearch_hintSuccess = (data:any)=>{
    return({
        type: AXIOS_SEARCH_HINT_SUCCESS,
        data
    })
}

export const axiosSearch_hintFailure=(error:any)=>{
    return({
        type:AXIOS_SEARCH_HINT_FAILURE,
        error
    });
}
