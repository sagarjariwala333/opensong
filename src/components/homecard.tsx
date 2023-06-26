import React from "react";
import staticimg from "../dummy/playlist_img2.jpeg";
import { Link } from "react-router-dom";
import "./cardstyle.css";

interface HomeCardProps {
  img: string;
  url: string;
  id: string;
  title: string;
  type: string;
}

const HomeCard: React.FC<HomeCardProps> = (props) => {
  const { id, url, img, title, type } = props;
  return (
    <>
      <div className="card" style={{ width: "18rem;" }}>
        <Link to={url} target="_blank">
        <img src={img} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <p className="card-text">
            {title}
          </p>
        </div>
      </div>
    </>
  );
};

HomeCard.defaultProps={
    img:staticimg,
}

export default HomeCard;
