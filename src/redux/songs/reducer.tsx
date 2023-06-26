// reducer.ts

import { FETCH_SONGS_REQUEST,FETCH_SONGS_FAILURE,FETCH_SONGS_SUCCESS } from "./types";

  const initialState: any = {
    loading: false,
    songs: [],
    error: null,
  };
  
  const songsReducer = (state = initialState, action: any): any => {

    const { type,data,error } = action;

    switch (type) {

      case FETCH_SONGS_REQUEST:
        console.warn("Request","Request from frontend");
        return {
          ...state,
          loading: true,
          error: null,
        };

      case FETCH_SONGS_SUCCESS:
        return {
          ...state,
          loading:false,
          data,
          error:null
        }

      case FETCH_SONGS_FAILURE:
        return {
          ...state,
          loading: false,
          error: error
        }

      default:
        return state;
    }
  };
  
  export default songsReducer;
  