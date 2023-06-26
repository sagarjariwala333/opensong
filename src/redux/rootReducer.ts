import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "./songs/reducer";
import searchReducer from "./search/reducer";
import searchhintReducer from "./searchhint/reducer";
import favouriteReducer from "./favourite/reducer";
import playlistReducer from "./playlist/reducer";
import playlist_songReducer from "./playlist_song/reducer";


const rootReducer = combineReducers({
    Songs: songsReducer,    
    Search: searchReducer,
    SearchHint: searchhintReducer,
    Favourite: favouriteReducer,
    PlayList: playlistReducer,
    PlaylistSong: playlist_songReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;