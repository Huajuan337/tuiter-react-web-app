
import React from "react";
import TuitStats from './tuit-stats'; 
import {useDispatch} from "react-redux";
import {deleteTuit} from '../reducers/tuits-reducer';

const TuitItem = ({
    tuit = {
        "_id": 999, 
        "topic": "Space", 
        "userName": "SpaceX",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "time": "2h",   
        "image": "Tesla_logo.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle ms-2" src={`/images/${tuit.image}`} height="50px" width="50px" />
                </div>
                <div className="col-10">
                    <div className="mb-1">
                        {tuit.userName} <i className="bi bi-patch-check-fill text-primary me-2"></i>
                        <span>{tuit.handle}<i className="bi bi-dot"></i>{tuit.time}</span>
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div>
                        {tuit.tuit}
                    </div>

                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>

    )
}


export default TuitItem; 