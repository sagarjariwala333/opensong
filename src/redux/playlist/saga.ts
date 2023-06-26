import { takeEvery,put } from "redux-saga/effects";
import { ADD_PLAYLIST,
REMOVE_PLAYLIST,
PLAYLIST_ERROR,
LIST_PLAYLIST_REQUEST,
LIST_PLAYLIST_SUCCESS,
PLAYLIST_CLEAR
} from "./types";
import { PLAYLISTS } from "../../helpers/constants";
import {v4 as uuid} from 'uuid';

function* addPlaylist(action:any)
{
    const {name}=action;
    let ps=localStorage.getItem(PLAYLISTS);
    let parr=[];
    if(ps)
    {
        parr=JSON.parse(ps);
    }
    let id=uuid().toString();
    parr.push({
        id,
        name,
        songs:[]
    });
    let np=JSON.stringify(parr);
    localStorage.setItem(PLAYLISTS,np);
    yield put({type:LIST_PLAYLIST_SUCCESS,data:parr})
}

function* removePlaylist(action:any)
{
    const {id}=action;
    let ps=localStorage.getItem(PLAYLISTS);
    let parr=[];
    if(ps)
    {
        parr=JSON.parse(ps);
    }
    parr=parr.filter((x:any)=>x.id !== id)
    localStorage.setItem(PLAYLISTS,JSON.stringify(parr));
    yield put({type:LIST_PLAYLIST_SUCCESS,data:parr});
}

function* listPlaylistRequest()
{
    let ps=localStorage.getItem(PLAYLISTS);
    let parr=[];
    if(ps)
    {
        parr=JSON.parse(ps);
    }
    yield put({type:LIST_PLAYLIST_SUCCESS,data:parr})
}

function* clearPlaylist()
{
    
}

function* playlistSaga()
{
    yield takeEvery(ADD_PLAYLIST,addPlaylist);
    yield takeEvery(REMOVE_PLAYLIST,removePlaylist);
    yield takeEvery(LIST_PLAYLIST_REQUEST,listPlaylistRequest);
    yield takeEvery(PLAYLIST_CLEAR,clearPlaylist);
}

export default playlistSaga;