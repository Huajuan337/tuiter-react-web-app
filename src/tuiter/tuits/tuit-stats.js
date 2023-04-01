import React from 'react'; 
// import {updateTuit} from '../reducers/tuits-reducer';
import {useDispatch} from 'react-redux';
import { updateTuitThunk } from '../../services/tuits-thunks';



const TuitStats = ({tuit}) => {

    const dispatch = useDispatch();

    return(
        <div>
            <ul className="nav nav-tab mt-2">
                <li className="nav-item me-5">
                    <i className="bi bi-chat me-1"></i><span>{tuit.replies}</span>
                </li>
                <li className="nav-item me-5">
                    <i 
                        onClick={()=> dispatch(updateTuitThunk({
                            ...tuit,
                            liked: !tuit.liked,
                            likes: tuit.liked? tuit.likes-1: tuit.likes+1
                        }))}
                        className={`${tuit.liked? 'bi bi-heart-fill text-danger': 'bi bi-heart'} me-1`}/>

                    {tuit.liked}
                        
                    <label htmlFor='like'>{tuit.likes}</label>

                </li>
                <li className="nav-item me-5">
                    <i className="bi bi-arrow-repeat me-1}"></i><span>{tuit.retuits}</span>
                </li>
                <li className="nav-item">
                    <i className="bi bi-upload me-1"></i>
                </li>
            </ul>
        </div>
    )
}

export default TuitStats;
