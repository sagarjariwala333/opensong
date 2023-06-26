import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosAddToFavourite } from "../redux/favourite/actions";
import { useSelector } from "react-redux";
import "./cardstyle.css";

interface songProps {
  id: string;
  title: string;
  type: string;
  img: string;
  url: string;
  btn1: string;
  btn2: string;
  handleSubmit:any;
}

const SongCard: React.FC<songProps> = (props) => {
  const dispatch = useDispatch();

  const { id, title, type, img, url, btn1, btn2, handleSubmit } = props;

  const handleFavourites = () => {
    const obj = {
      id,
      title,
      type,
      img,
      url,
    };
    alert("Song added to your favourites");
    dispatch(axiosAddToFavourite(obj));
  };

  const { data, loading, error } = useSelector((state: any) => {
    return {
      data: state.PlayList.data,
      loading: state.PlayList.loading,
      error: state.PlayList.error,
    };
  });


  const handleModal=()=>{
    
    //console.log("Submit "+state.playlistid);
    let obj={
      id,
      title,
      type,
      url,
      img
    }
    handleSubmit(obj);
  }

  const myStyle = {
    width: "18rem",
  };

  //const url1 = "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/b5/ae/26/b5ae2651-542a-9ee9-be4c-278791e2918f/mzi.ncrxyndi.jpg/400x400cc.jpg";

  return (
    <>
      <div className="card" style={myStyle}>
        <a href={url} target="_blank">
          <img src={img} className="card-img-top" alt="..." />
        </a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{type}</p>
        </div>
        <div className="card-body">
          <a
            href="#"
            className="card-link"
            role="button"
            onClick={handleFavourites}
          >
            {btn1}
          </a>
          <a
            href="#"
            className="card-link "
            role="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handleModal}
          >
            {btn2}
          </a>
        </div>
      </div>
    </>
  );
};

SongCard.defaultProps = {
  id: "",
  title: "None",
  type: "None",
  img: "",
  url: "",
  btn1: "None",
  btn2: "None",
};

export default SongCard;
