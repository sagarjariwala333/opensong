import React from "react";
import { useDispatch } from "react-redux";
import { axiosRemoveFromFavourite } from "../redux/favourite/actions";
import "./cardstyle.css";

interface songProps {
  id:string,
    title:string;
    type:string;
    img:string,
    url:string,
    btn1:string,
    btn2:string,
    handleRemove:any
}

const FavouriteCard: React.FC<songProps> = (props) => {

  const dispatch=useDispatch();

    const {id,title,type,img,url,btn1,btn2,handleRemove} = props;

    const handleFavourites=()=>{
      //dispatch(axiosRemoveFromFavourite(id));
      handleRemove(id);
      alert("Removed...")
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
          <p className="card-text">
            {type}
          </p>
        </div>
        <div className="card-body">
          <a href="#" className="card-link" role="button" onClick={handleFavourites}>
           {btn1}
          </a>
          <a href="#" className="card-link" role="button">
            {btn2}
          </a>
        </div>
      </div>
    </>
  );
};

FavouriteCard.defaultProps = {
  id:"",
    title:"None",
    type:"None",
    img:"",
    url:"",
    btn1:"None",
    btn2:"None"
}

export default FavouriteCard;
