import {all, fork} from 'redux-saga/effects';
import songSaga from './songs/saga';
import searchSaga from './search/saga';
import searchHintSaga from './searchhint/saga';
import favouriteSaga from './favourite/saga';
import playlistSaga from './playlist/saga';
import playlistSongsSaga from './playlist_song/saga';

const rootSaga = function* sagas()
{
    yield all([
        fork(songSaga),
        fork(searchSaga),
        fork(searchHintSaga),
        fork(favouriteSaga),
        fork(playlistSaga),
        fork(playlistSongsSaga)
    ])
};

export default rootSaga;