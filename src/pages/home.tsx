import React,{useEffect, useState} from "react";
import SongCard from "../components/songcard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsRequest } from "../redux/songs/actions";
import { listFavouriteRequest } from "../redux/favourite/actions";
import { listPlaylistRequest } from "../redux/playlist/actions";
import HomeCard from "../components/homecard";
import { Link } from "react-router-dom";


const Home: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(listFavouriteRequest());
    dispatch(listPlaylistRequest());
  },[]);

  const {favourites,playlists,floading,fplaylist,ferror,perror} = useSelector((state:any)=>{
    return {
      favourites:state.Favourite.data,
      playlists:state.PlayList.data,
      floading:state.Favourite.loading,
      fplaylist:state.PlayList.loading,
      ferror:state.Favourite.error,
      perror:state.PlayList.error
    }
  });

  //console.warn("Data from redux",data);

  return (
    <>
    <div>
      <div className="container-fluid">
      <h4>
          Favourite
        </h4>
        <Link to="/favourite">See All</Link>
      <div className="row row-cols-4">
        
        {
          (typeof favourites==='undefined' || favourites.length===0 || favourites===null) ?
          <div>No data found</div> :
          favourites.slice(0,4).map((item:any)=>{
            return(
              <div className="col pt-4">
              <HomeCard id={item.id}
              title={item.title}
              img={item.img}
              url={item.url}
              type={item.type}
              />
              </div>
            )
          })
        }
        </div>
      </div>
    </div>

    <div>
      <div className="container-fluid">
      <h4>
          Playlists
        </h4>
        <Link to="/playlist">See All</Link>
      <div className="row row-cols-4">
        {
          (typeof playlists==='undefined' || playlists.length===0 || playlists===null) ?
          <div>No data found</div> :
          playlists.slice(0,4).map((item:any)=>{
            return(
              <div className="col pt-4">
              <HomeCard id={item.id}
              title={item.name}
              img={item.img}
              url="/playlist"
              type={item.type}
              />
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
