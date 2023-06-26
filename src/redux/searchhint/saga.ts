import { call, put, takeEvery } from "redux-saga/effects";
import { AXIOS_SEARCH_HINT_REQUEST, AXIOS_SEARCH_HINT_SUCCESS, AXIOS_SEARCH_HINT_FAILURE } from "./types";
import axios from 'axios';
import { API_END_POINT, API_HOST, API_KEY } from "../../helpers/constants";
import dummydata from "../../dummy/searchhint.json";

function* getSearchHint(action: any): any {
    const { searchkey } = action;

    const options = {
        method: 'GET',
        url: API_END_POINT + "auto-complete",
        params: {
            term: searchkey,
            locale: 'en-US'
        },
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        }
    };

    try {
        const res = yield axios.request(options);
        //const data=dummydata.hints;
        const data=res.data.hints;
        console.log("Saga",res.data.hints);
        yield put({ type: AXIOS_SEARCH_HINT_SUCCESS, data })
    } catch (error) {
        console.error(error);
        yield put({ type: AXIOS_SEARCH_HINT_FAILURE, error })
    }
}

function* searchHintSaga() {
    yield takeEvery(AXIOS_SEARCH_HINT_REQUEST, getSearchHint);
}

export default searchHintSaga;