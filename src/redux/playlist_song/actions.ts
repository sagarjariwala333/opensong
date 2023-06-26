import { ADD_SONG_TO_PLAYLIST,
    REMOVE_SONG_FROM_PLAYLIST,
    EMPTY_PLAYLIST,
    LIST_PLAYLIST_SONGS_REQUEST,
    PLAYLIST_ERROR,
    LIST_PLAYLIST_SONGS_SUCCESS
 } from "./types";

 export const addSongToPlaylist=(obj:any)=>{
    return({
        type:ADD_SONG_TO_PLAYLIST,
        obj
    })
 }

 export const removeFromPlaylist=(obj:any)=>{
    return({
        type:REMOVE_SONG_FROM_PLAYLIST,
        obj
    })
 }

 export const emptyPlaylist=(id:any)=>{
    return({
        type:EMPTY_PLAYLIST,
        id
    })
 }

 export const listPlaylistSonngRequest=(id:any)=>{
    return({
        type:LIST_PLAYLIST_SONGS_REQUEST,
        id
    })
 }

 export const listPlaylistSongSuccess=(data:any)=>{
    return({
        type:LIST_PLAYLIST_SONGS_SUCCESS,
        data
    })
 }

 export const playlistError=(error:any)=>{
    return({
        type:PLAYLIST_ERROR,
        error
    })
 }