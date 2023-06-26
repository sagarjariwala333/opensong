import { LIST_PLAYLIST_SUCCESS,
    PLAYLIST_ERROR,
    LIST_PLAYLIST_REQUEST,
    ADD_PLAYLIST,
    REMOVE_PLAYLIST,
    PLAYLIST_CLEAR
} from "./types";

export const addPlayList=(name:any)=>{
    return({
        type:ADD_PLAYLIST,
        name
    })
}

export const removePlaylist=(id:any)=>{
    return({
        type:REMOVE_PLAYLIST,
        id
    })
}

export const listPlaylistRequest=()=>{
    return({
        type:LIST_PLAYLIST_REQUEST
    })
}

export const listPlaylistSuccess=(data:any)=>{
    return({
        type:LIST_PLAYLIST_SUCCESS,
        data
    })
}

export const listPlaylistFailure=(error:any)=>{
    return({
        type:PLAYLIST_ERROR,
        error
    })
}

export const clearPlaylist=()=>{
    return({
        type:PLAYLIST_CLEAR
    })
}