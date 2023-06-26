import { ADD_TO_FAVOURITE,REMOVE_FROM_FAVOURITE,CLEAR_FAVOURITE,FAVOURITE_ERROR, LIST_FAVOURITE_REQUEST, LIST_FAVOURITE_SUCCESS } from "./types";

const initialState:any={
    loading:false,
    data:[],
    error:null
}

const favouriteReducer=(state=initialState,action:any)=>{
    const{type,data,error,id,obj}=action;

    switch (type) {
        case ADD_TO_FAVOURITE:
            //state.data.push(obj);
            return{
                loading:false,
                obj,
                error:null,
            }
            break;

        case REMOVE_FROM_FAVOURITE:
            //state.data=state.data.filter((x:any)=>x.id!==id)
            return{
                loading:false,
                id,
                error:null
            }
            break;

        case CLEAR_FAVOURITE:
            return{
                loading:false,
                error:null
            }
        break;

        case LIST_FAVOURITE_REQUEST:
            return{
                loading:true,
                error:null
            }
        break;

        case LIST_FAVOURITE_SUCCESS:
            return{
                loading:false,
                data,
                error:null
            }
        break;

        case FAVOURITE_ERROR:
            return{
                loading:false,
                error
            }
        break;

        default:
            return state
        break;
    }
}

export default favouriteReducer;