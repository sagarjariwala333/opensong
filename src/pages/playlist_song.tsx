import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { listPlaylistSonngRequest, removeFromPlaylist } from "../redux/playlist_song/actions";
import { useSelector } from "react-redux";
import PlaylistSongCard from "../components/playlistsongcard";

const PlaylistSong:React.FC=()=>{

    const location=useLocation();
    let playlistid;
    
    if(location.state !== null){
        const {id}=location.state;
        playlistid=id;
    }
    
    const dispatch=useDispatch();
    const [state,setState]=useState({
        data:[],
        playlistid
    })
    
    useEffect(()=>{
        dispatch(listPlaylistSonngRequest(state.playlistid));
        setState({
            ...state,
            data:playlist_songs
        })
    },[])

    const {data,loading,error,playlist_songs}=useSelector((state:any)=>{
        return{
        data:state.PlaylistSong.data,
        loading:state.PlaylistSong.loading,
        error:state.PlaylistSong.error,
        playlist_songs:state.PlaylistSong.data[0]?.songs
        }
    })

    const handleRemoveCard=(sonngid:any)=>{
        let newdata=state.data.filter((x:any)=>x.id!==sonngid)
        setState({
            ...state,
            data:newdata
        })
        let obj={
            id:sonngid,
            playlistid:state.playlistid
        }
        dispatch(removeFromPlaylist(obj));
    }

    //const playlist_songs=data[0]?.songs;
    console.log(data);

    console.log("Playlist Song",data);

    return(
        <>
        {
            (typeof state.data==="undefined" || state.data===null || state.data.length===0 ) ?
            <div>No Songs</div> :

            <div className="container-fluid">
            <div className="row row-cols-4">
            {state.data.map((item:any)=>{
                return(
                    <div className="col pt-4">
                    <PlaylistSongCard 
                    title={item.title} 
                    id={item.id} 
                    key={item.id} 
                    url={item.url}
                    img={item.img}
                    playlistid={state.playlistid}
                    btn1="Remove"
                    handleRemoveCard={handleRemoveCard}
                    />
                    </div>
                )
            })}
            </div>
            </div>
        }
        
        </>
    )
}

export default PlaylistSong;