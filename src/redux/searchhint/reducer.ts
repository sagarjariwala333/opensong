import {
    AXIOS_SEARCH_HINT_REQUEST,
    AXIOS_SEARCH_HINT_SUCCESS,
    AXIOS_SEARCH_HINT_FAILURE
} from "./types";

const initialState = {
    loading: false,
    data: [],
    error: null
} 

const searchhintReducer=(state=initialState,action:any)=>{
    const {type,data,error,searchkey}=action;

    switch(type)
    {
        case AXIOS_SEARCH_HINT_REQUEST:
        return{
            ...state,
            loading:true,
            error:null,
            searchkey
        }
        break;

        case AXIOS_SEARCH_HINT_SUCCESS:
        return{
            ...state,
            loading:false,
            data,
            error:null
        }
        break;

        case AXIOS_SEARCH_HINT_FAILURE:
        return{
            ...state,
            loading:false,
            error
        }
        break;

        default:
        return state;
    }
}

export default searchhintReducer;