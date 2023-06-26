import {
    LIST_PLAYLIST_SUCCESS,
    PLAYLIST_ERROR,
    LIST_PLAYLIST_REQUEST,
    ADD_PLAYLIST,
    REMOVE_PLAYLIST,
    PLAYLIST_CLEAR
} from "./types";

const initialState = {
    loading: false,
    data: [],
    error: null
}

const playlistReducer = (state = initialState, action: any) => {
    const { type, data, error, id, name } = action;

    switch (type) {
        case ADD_PLAYLIST:
            return {
                loading: false,
                error: null,
                name
            }
            break;

        case REMOVE_PLAYLIST:
            return {
                loading: false,
                id,
                error: null
            }
            break;

        case LIST_PLAYLIST_REQUEST:
            return {
                loading: true,
                error: null
            }
            break;

        case LIST_PLAYLIST_SUCCESS:
            return {
                loading: false,
                error: null,
                data
            }
            break;

        case PLAYLIST_CLEAR:
            return {
                loading:false,
                error:null,
            }

        case PLAYLIST_ERROR:
            return {
                loading: false,
                error
            }

        default:
            return state;
            break;
    }
}

export default playlistReducer;