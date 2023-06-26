import React from "react";
import { useDispatch } from "react-redux";
import { removeFromPlaylist } from "../redux/playlist_song/actions";
import "./cardstyle.css";

interface PlaylistSongProps {
    id:string,
    title:string,
    btn1:string,
    img:string,
    url:string,
    playlistid:string,
    handleRemoveCard:any
}

const PlaylistSongCard:React.FC<PlaylistSongProps>=(props)=>{
    
    const {id,title,btn1,img,url,playlistid,handleRemoveCard}=props;

    const dispatch=useDispatch();

    const myStyle = {
        width: "18rem",
      };

    const handleClick=()=>{

    }

    const handleRemove=()=>{
      // let obj={
      //   id,
      //   playlistid
      // }
      // dispatch(removeFromPlaylist(obj));
      handleRemoveCard(id);
    }


    return(
        <>
        <div className="card" style={myStyle}>
        <a href={url} target="_blank">
          <img src={img} className="card-img-top" onClick={handleClick} alt="..." />
          </a>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
          {/* <div className="card-body">
            <a href="#" className="card-link" role="button" onClick={handleRemove}>
             {btn1}
            </a>
          </div> */}
        </div>
      </>
    )
}

PlaylistSongCard.defaultProps={
    id:"",
    title:"None",
    btn1:"None",
    img:"#",
    url:"#",
    playlistid:"",
    handleRemoveCard:null
}

export default PlaylistSongCard;