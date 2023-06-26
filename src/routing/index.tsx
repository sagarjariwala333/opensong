import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const SeachedSong = lazy(() => import("../pages/searchedsong"));
const Favourite = lazy(()=>import("../pages/favourites"));
const Playlists = lazy(()=>import("../pages/playlists"));
const PlaylistSong = lazy(()=>import("../pages/playlist_song"));

const Routing = () => {
  return (
    
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/home" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          {/* <Route
              path="/securedpage"
              element={
                <PrivateRoute>
                  <SecuredPage />
                </PrivateRoute>
              }
            ></Route> */}
          <Route path="/search" Component={SeachedSong}></Route>
          <Route path="/favourite" Component={Favourite}></Route>
          <Route path="/playlist" Component={Playlists}></Route>
          <Route path="/playlistsongs" Component={PlaylistSong}></Route>
        </Routes>
      </Suspense>
  );
};

export default Routing;
