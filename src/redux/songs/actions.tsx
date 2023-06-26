import { FETCH_SONGS_FAILURE,FETCH_SONGS_REQUEST,FETCH_SONGS_SUCCESS } from "./types";

export const fetchSongsRequest=()=>{
  return {
    type: FETCH_SONGS_REQUEST
  }
}

export const fetchSongsSuccess=(data:any)=>{
  return {
    type:FETCH_SONGS_SUCCESS,
    data
  }
} 

export const fetchSongsError=(error:any)=>{
  return {
    type:FETCH_SONGS_FAILURE,
    error
  }
}