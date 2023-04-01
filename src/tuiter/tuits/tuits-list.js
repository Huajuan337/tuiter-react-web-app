import React, {useEffect} from "react";
import TuitItem from './tuit-item'; 
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks.js";

const TuitsList = () => {

    const {tuits, loading} = useSelector(state => state.tuitsData);   // grabs tuits and loading from reducer
    const dispatch = useDispatch();                                   // dispatches action to reducer
    
    // invokes when component is first loads
    useEffect(() => {
        dispatch(findTuitsThunk())
      }, [])      

    return (
        
        <ul className="list-group">
            
            {/* if loading, show loading message */}
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            
            {/* otherwise show the tuits */}
            {
                !loading &&
                tuits.map(tuit => 
                    <TuitItem key={tuit._id} tuit={tuit}/>
                )
            }
        </ul>
    )
}

export default TuitsList; 
