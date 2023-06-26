import React, { ChangeEvent, useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Link, useNavigate } from "react-router-dom";
import { axiosSearchRequest } from "../redux/search/actions";
import { useDispatch, useSelector } from "react-redux";
import Search from "./search";

const Nav: React.FC = () => {
  const { keycloak, initialized } = useKeycloak();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosSearchRequest("Hello World"));
  }, [dispatch]);

  const { data, isLoading } = useSelector((state) => {
    return {
      data: state,
      isLoading: false,
    };
  });

  console.warn("Data from server", data);

  const navigate = useNavigate();

  const [state, setState] = useState({
    searchkey: "",
  });

  

 
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Open Music
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/playlist">
                  Playlists
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/favourite">
                Favourites
                </Link>
              </li>
        
              {/* <li className="nav-item">
               <Search/>
              </li> */}

            </ul>
            <Search/>

           
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
