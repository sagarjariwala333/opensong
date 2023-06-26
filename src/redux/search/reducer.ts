import { AXIOS_SEARCH_FAILURE,AXIOS_SEARCH_REQUEST,AXIOS_SEARCH_SUCCESS } from "./types";

const initialSate: any = {
    loading:false,
    data:[],
    error:null
}

const searchReducer=(state=initialSate,action:any): any => {

    const {type,data,error,searchkey}=action;

    switch (type) {
        case AXIOS_SEARCH_REQUEST:
        return{
            ...state,
            loading:true,
            error:null,
            searchkey
        }
        break;
        
        case AXIOS_SEARCH_SUCCESS:
        return{
            ...state,
            loading:false,
            error:null,
            data
        }
        break;

        case AXIOS_SEARCH_FAILURE:
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

export default searchReducer;