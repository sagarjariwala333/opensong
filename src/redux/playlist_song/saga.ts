import { put, takeEvery } from "redux-saga/effects";
import { ADD_SONG_TO_PLAYLIST, EMPTY_PLAYLIST, LIST_PLAYLIST_SONGS_REQUEST, LIST_PLAYLIST_SONGS_SUCCESS, REMOVE_SONG_FROM_PLAYLIST } from "./types";
import { PLAYLISTS } from "../../helpers/constants";

function* getPlaylistSongs(action:any)
{
    const {id}=action;
    let ps=localStorage.getItem(PLAYLISTS);
    let parr=[];
    if(ps)
    {
        parr=JSON.parse(ps);
    }
    let nparr=parr.filter((x:any)=>x.id.toString()===id.toString())
    yield put({type:LIST_PLAYLIST_SONGS_SUCCESS,data:nparr});
}

function* addSongPlaylist(action:any)
{
    const {obj}=action;
    const {id,playlistid,title,type,url,img} = obj;
    let ps=localStorage.getItem(PLAYLISTS);
    let parr=[];
    if(ps)
    {
        parr=JSON.parse(ps);
    }

    parr.map((item:any)=>{
        if(item.id.toString()===playlistid.toString())
        {
            item.songs.push({
                id,
                title,
                type,
                url,
                img
            })
        }
    })
    let nparr=parr.filter((x:any)=>x.id===playlistid)
    localStorage.setItem(PLAYLISTS,JSON.stringify(parr));
    yield put({type:LIST_PLAYLIST_SONGS_SUCCESS,data:nparr})
}

function* removeSongFromPLaylist(action:any)
{
    const {obj} = action;
    const {id,playlistid} = obj;
    let ps=localStorage.getItem(PLAYLISTS);
    let parr=[];
    if(ps)
    {
        parr=JSON.parse(ps);
    }

    parr.map((item:any)=>{
        if(item.id===playlistid)
        {
            item.songs=item.filter((X:any)=>X.id!==id)
        }
    })
    let nparr=parr.filter((x:any)=>x.id===playlistid)
    localStorage.setItem(PLAYLISTS,JSON.stringify(parr));
    yield put({type:LIST_PLAYLIST_SONGS_SUCCESS,data:nparr})
}

function* emptyPlaylist(action:any)
{
    const {id}=action;
}

function* playlistSongsSaga()
{
    yield takeEvery(LIST_PLAYLIST_SONGS_REQUEST,getPlaylistSongs);
    yield takeEvery(ADD_SONG_TO_PLAYLIST,addSongPlaylist);
    yield takeEvery(REMOVE_SONG_FROM_PLAYLIST,removeSongFromPLaylist);
    yield takeEvery(EMPTY_PLAYLIST,emptyPlaylist);
}

export default playlistSongsSaga;