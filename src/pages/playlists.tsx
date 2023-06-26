import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayList, listPlaylistRequest } from "../redux/playlist/actions";
import { useSelector } from "react-redux";
import PlaylistCard from "../components/playlistcard";

const Playlists: React.FC = () => {
  const dispatch = useDispatch();

  const [state,setState]=useState({
    playlist:""
  })

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Name",state.playlist);
    dispatch(addPlayList(state.playlist));
    setState({
      ...state,
      playlist:""
    })
  };

  useEffect(()=>{
    dispatch(listPlaylistRequest());
  },[])

  let {data,loading,error}=useSelector((state:any)=>{
    return{
      data:state.PlayList.data,
      loading:state.PlayList.loading,
      error:state.PlayList.error
    }
  })

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    
    setState({
      ...state,
      playlist:e.target.value
    })

    console.log(state.playlist);
  }


  if(loading)
  {
    return <div>Loading...</div>
  }

  if(error)
  {
    return <div>{error}</div>
  }

  return (
    <>
      <form
        className="d-flex"
        role="search"
        onSubmit={handleSubmit}
        style={{ width: "25%" }}
      >
        <input
          className="form-control input"
          type="text"
          name="playlist"
          placeholder="Create Playlist"
          onChange={handleChange}
          required
        />

        <button className="btn btn-outline-success" type="submit">
          Create
        </button>
      </form>

      <div className="container-fluid">

       {
       (typeof data === 'undefined' || data===null || data?.length===0) ?
       <div>Data not found</div> :
        <div className="row row-cols-4">
          {
            data?.map((item:any)=>{
              return(
                <div className="col pt-4">
                  <PlaylistCard title={item.name} btn1="Remove" id={item.id} key={item.id}/>
                </div>
              )
            })
          }
        </div>}
      </div>
    </>
  );
};

export default Playlists;
