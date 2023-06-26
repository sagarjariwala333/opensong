import { FAV } from "../../helpers/constants";
import { LIST_FAVOURITE_REQUEST, LIST_FAVOURITE_SUCCESS, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, FAVOURITE_ERROR, CLEAR_FAVOURITE } from "./types";
import { takeEvery, put } from "redux-saga/effects";

function* getFavouriteList() {
    const favstr = localStorage.getItem(FAV);
    const data = (favstr === null) ? [] : JSON.parse(favstr);
    yield put({ type: LIST_FAVOURITE_SUCCESS, data })
}

function* addFavourite(action: any) {
    const { obj } = action;
    const favstr = localStorage.getItem(FAV);
    console.log("Add Fav " + localStorage.getItem(FAV));
    let fav = [];
    if (favstr) {
        fav = JSON.parse(favstr);
    }

    if (!isExist(obj.id, fav)) {
        fav.push(obj);
    }
    const updatedfavstr = JSON.stringify(fav);
    localStorage.setItem(FAV, updatedfavstr);
    console.log("Add Fav " + localStorage.getItem(FAV));
    yield put({type:LIST_FAVOURITE_SUCCESS,data:fav})
}

const isExist: any = (id: any, fav: any) => {
    for (let i = 0; i < fav.length; i++) {
        if (fav.id === id) {
            return true;
        }
    }
    return false;
}

function* removeFavourite(action: any) {

    console.log("Add Fav " + localStorage.getItem(FAV));
    const { id } = action;
    const favstr = localStorage.getItem(FAV);
    console.warn("Fav", favstr);
    let fav = [];
    if (favstr) {
        fav = JSON.parse(favstr);
    }

    fav = fav.filter((item: any) => {
        return item.id !== id
    })
    localStorage.setItem(FAV, JSON.stringify(fav));
    console.log("Add Fav " + localStorage.getItem(FAV));
    yield put({type:LIST_FAVOURITE_SUCCESS,data:fav})
}

function* clearFavourite() {

}

function* favouriteSaga() {
    yield takeEvery(LIST_FAVOURITE_REQUEST, getFavouriteList);
    yield takeEvery(ADD_TO_FAVOURITE, addFavourite);
    yield takeEvery(REMOVE_FROM_FAVOURITE, removeFavourite);
    yield takeEvery(CLEAR_FAVOURITE, clearFavourite);
}

export default favouriteSaga;