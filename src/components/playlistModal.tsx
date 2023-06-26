import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listPlaylistRequest } from "../redux/playlist/actions";
import { useSelector } from "react-redux";

interface PlayListModalProps{
    handleSubmitModal:any
}

const PlayListModal:React.FC<PlayListModalProps>=(props)=>{

    const {handleSubmitModal}=props;
    const dispatch=useDispatch();
    const [state,setState]=useState({
        playlistid:""
    });
    
    useEffect(()=>{
        listPlaylistRequest();
    },[])

    const {data,loading,error}=useSelector((state:any)=>{
        return{
        data:state.PlayList.data,
        loading:state.PlayList.loading,
        error:state.PlayList.error
        }
    })

    const handleChange=(e:any)=>{
        setState({
            ...state,
            playlistid:e.target.value
        })
    }

    const handleEvent=(data:any)=>{
        console.warn("Event data",data);
    }

    const handleSubmit=()=>{
        handleSubmitModal(state.playlistid);
    }

    return(
        <>
          <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Select Playlist
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                    <select className="form-select" aria-label="Default select example" onChange={handleChange}>
                    <option value="0" selected>Select Playlist</option>
                      {data === null ||
                      data.length === 0 ||
                      typeof data === "undefined" ? (
                        <div>No Playlist exist</div>
                      ) : (
                        data.map((item: any) => {
                          return <option value={item.id}>{item.name}</option>;
                        })
                      )}
                      </select>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={handleSubmit}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default PlayListModal;