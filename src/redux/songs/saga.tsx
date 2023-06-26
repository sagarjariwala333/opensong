import { takeEvery,put } from "redux-saga/effects";
import { FETCH_SONGS_REQUEST,FETCH_SONGS_SUCCESS } from "./types";

function* getSongs(action:any) {
    let data = [
        {
          id:"1",
          title:"None",
          artist:"None"
        },
        {
          id:"1",
          title:"None",
          artist:"None"
        }
      ];
    console.warn("Saga");
    yield put({type:FETCH_SONGS_SUCCESS,data:data})
}

function* songSaga() {
    yield takeEvery(FETCH_SONGS_REQUEST,getSongs);
}

export default songSaga;