import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { axiosSearchSuccess } from "../redux/search/actions";
import { useSelector } from "react-redux";
import SongCard from "../components/songcard";
import {v4 as uuid} from "uuid";
import PlayListModal from "../components/playlistModal";
import EventEmitter from "events";
import { addSongToPlaylist } from "../redux/playlist_song/actions";

const SearchedSong: React.FC = () => {
  const dispatch = useDispatch();
  const emitter=new EventEmitter();
  let selected:any=null;

  const sendIdToModal=(id:any)=>{
    emitter.emit("ID_Event",id);
  }

  let { data, loading, error } = useSelector((state: any) => {
    return {
      data: state.Search.data,
      loading: state.Search.loading,
      error: state.error,
    };
  });

 const handleChange=()=>{

 }

 const handleSubmit=(obj:any)=>{
    console.log("ID Modal",obj);
    selected=obj;
    //sendIdToModal(obj);
 }

 const handleSubmitModal=(playlistid:any)=>{
  let obj={
    id:selected.id,
    img:selected.img,
    url:selected.url,
    title:selected.title,
    type:selected.type,
    playlistid
  }
  console.log("Modal",obj);
  dispatch(addSongToPlaylist(obj));
 }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>

      <div className="container-fluid">
        <div className="row row-cols-4">
        {data.map((track: any,index:any) => {
          return (
            <div className="col pt-4">
            <SongCard
                key={uuid()}
              title={track.track.title}
              type={track.track.type}
              img={track.track.images.background}
              url={track.track.url}
              btn1="Add To Favourites"
              btn2="Add To Playlist"
              id={uuid()}
              handleSubmit={handleSubmit}
            />
            </div>
          
          );
        })}
          </div>
      </div>
      <PlayListModal handleSubmitModal={handleSubmitModal}/>
    </>
  );
};

export default SearchedSong;
