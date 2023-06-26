import { ADD_SONG_TO_PLAYLIST, EMPTY_PLAYLIST, LIST_PLAYLIST_SONGS_REQUEST, LIST_PLAYLIST_SONGS_SUCCESS, PLAYLIST_ERROR, REMOVE_SONG_FROM_PLAYLIST } from "./types";

const initialState={
    loading:false,
    data:[],
    error:null
}

const playlist_songReducer=(state=initialState,action:any)=>{
    const {type,data,error,obj}=action;

    switch (type) {
        case ADD_SONG_TO_PLAYLIST:
            return{
                loading:false,
                obj,
                error:null
            }
            break;

        case REMOVE_SONG_FROM_PLAYLIST:
            return{
                loading:false,
                obj,
                error:null
            }
            break;

        case EMPTY_PLAYLIST:
            return{
                loading:false,
                error:null
            }
            break;

        case LIST_PLAYLIST_SONGS_REQUEST:
            return{
                loading:true,
                error:null
            }
            break;

        case LIST_PLAYLIST_SONGS_SUCCESS:
            return{
                loading:false,
                error:null,
                data
            }
            break;

        case PLAYLIST_ERROR:
            return{
                loading:false,
                error
            }
            break;
    
        default:
            return state;
            break;
    }
}

export default playlist_songReducer;