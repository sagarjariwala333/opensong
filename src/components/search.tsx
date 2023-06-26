import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { axiosSearch_hintRequest } from "../redux/searchhint/actions";
import { axiosSearchRequest } from "../redux/search/actions";
import { useSelector } from "react-redux";
import { data, event } from "jquery";

const Search = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    searchkey: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(axiosSearchRequest(state.searchkey));
    setState({
      ...state,
      searchkey: "",
    });
    navigate("/search");
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
    dispatch(axiosSearch_hintRequest(e.target.value));
  };

  const { data, loading, error } = useSelector((state: any) => {
    return {
      data: state.SearchHint.data,
      loading: state.SearchHint.loading,
      error: state.SearchHint.error,
    };
  });

  console.log("data ui", data);

  return (
    <>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <div className="dropdown">
          <input
            className="form-control me-2 dropdown-toggle input-lg"
            type="search"
            name="searchkey"
            placeholder="Search"
            aria-label="Search"
            value={state.searchkey}
            data-bs-toggle="dropdown"
            onChange={handleSearchChange}
            required
          />

          <div className="dropdown-menu container-fluid">
            {loading ? (
              <li>
                <a className="dropdown-item" href="#">
                  Loading ...
                </a>
              </li>
            ) : typeof data === "undefined" ||
              data === null ||
              data?.length == 0 ? (
              <>No data found</>
            ) : (
              data?.map((item: any) => {
                return (
                  <li>
                    {/* {item.tem} */}
                    <a className="dropdown-item" onClick={
                     (e)=>{
                      e.preventDefault();
                      dispatch(axiosSearchRequest(item.term))
                      setState({
                        ...state,
                        searchkey:""
                      })
                      navigate("/search");
                     }
                    } 
                      role="button">
                      {
                      (item.term.length<25) ? item.term : item.term.substring(0,25)
                      }
                    </a>
                  </li>
                );
              })
            )}
          </div>

         
        </div>
        {/* <Link className="btn btn-outline-success" type="submit" to={"/searched"} state={{searchkey:state.searchkey}}>
                  Search
                </Link> */}
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
