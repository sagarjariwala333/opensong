import { takeEvery,put } from "redux-saga/effects";
import { AXIOS_SEARCH_FAILURE,AXIOS_SEARCH_REQUEST,AXIOS_SEARCH_SUCCESS } from "./types";
import dummyData from '../../dummy/searchResponse.json';
import axios from "axios";

function* getSearch(action:any):any {
  const {searchkey} = action;
  //console.warn("Hello from reducer", action);


  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: {
      term: searchkey,
      locale: 'en-US',
      offset: '0',
      limit: '5'
    },
    headers: {
      'X-RapidAPI-Key': '3abedbea3cmsh44fcacf0301967dp1c376fjsnda4e22c591d8',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  
  try {
    const response = yield axios.request(options);
    console.log("API RESPONSE",response.data.tracks.hits);
    let data=response.data.tracks.hits;
    //let data=dummyData;
    yield put({type:AXIOS_SEARCH_SUCCESS, data});
  } catch (error) {
    yield put({type:AXIOS_SEARCH_FAILURE,error});
  }

   
}

function* searchSaga()
{
    yield takeEvery(AXIOS_SEARCH_REQUEST,getSearch);
}

export default searchSaga;