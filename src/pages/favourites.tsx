import React,{useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { axiosRemoveFromFavourite, listFavouriteRequest } from "../redux/favourite/actions";
import { useSelector } from "react-redux";
import FavouriteCard from "../components/favouritecard";

const Favourites:React.FC=()=>{

    const [state,setState]=useState({
        data:[]
    })

    const dispatch=useDispatch();

    let {data,loading,error}=useSelector((state:any)=>{
        console.warn("favourites",state.Favourite.data);
        return{
            data:state.Favourite.data,
            loading:state.Favourite.loading,
            error:state.Favourite.error
        }
    })

    useEffect(()=>{
        dispatch(listFavouriteRequest())
    },[])

    useEffect(()=>{
        setState({
            ...state,
            data
        })
    },[data])

    console.warn("State",state);

    const handleRemove=(id:any)=>{
        let result=state.data;
        result=result.filter((x:any)=>x.id!==id)
        dispatch(axiosRemoveFromFavourite(id));
        setState({
            ...state,
            data:result
        })
        console.log("Hello World "+id);
    }

    if(loading)
    {
        return <div>Loading...</div>
    }

    if(error)
    {
        return <div>{error}</div>
    }

    return(
        <>
        <div className="container-fluid">
        <div className="row row-cols-4">
        {
            (data===null || data?.length===0) ? 
            <>No data found</>:
            state?.data?.map((track:any,index:any)=>{
                console.log(track.id);
                return(
                    <div className="col pt-4">
                        <FavouriteCard
                        handleRemove={handleRemove}
                        key={track.id}
                        title={track.title} 
                        type={track.type} 
                        img={track.img} 
                        url={track.url} 
                        id={track.id}
                        btn1="Remove"
                        btn2="Add To Playlist"
                        />
                    </div>
                )
            })
        }
        </div>
        </div>
        </>
    )
}

export default Favourites;