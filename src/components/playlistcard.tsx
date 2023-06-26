import React from "react";
import { useDispatch } from "react-redux";
import { removePlaylist } from "../redux/playlist/actions";
import staticimg from "../dummy/playlist_img2.jpeg";
import { Link, useNavigate } from "react-router-dom";
import "./cardstyle.css";

interface songProps {
  id:string,
    title:string;
    btn1:string,
}

const PlaylistCard: React.FC<songProps> = (props) => {

  const dispatch=useDispatch();

  const navigate=useNavigate();

    const {id,title,btn1} = props;

    const handleRemove=(e:any)=>{
      //e.prevetDefault();
      dispatch(removePlaylist(id));
    }

  const myStyle = {
    width: "18rem",
  };

  //const url1 = "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/b5/ae/26/b5ae2651-542a-9ee9-be4c-278791e2918f/mzi.ncrxyndi.jpg/400x400cc.jpg";
  const url="/playlist_song";
  const img=staticimg;

  const handleClick=()=>{
    const obj={
      id
    }
    navigate("/playlistsongs",{state:{id}});
  }


  return (
    <>
      <div className="card" style={myStyle}>
        <img src={img} className="card-img-top" onClick={handleClick} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="card-body">
          <a href="#" className="card-link" role="button" onClick={handleRemove}>
           {btn1}
          </a>
        </div>
      </div>
    </>
  );
};

PlaylistCard.defaultProps = {
  id:"",
    title:"None",
    btn1:"None",
}

export default PlaylistCard;
