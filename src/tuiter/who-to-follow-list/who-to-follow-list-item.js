/* eslint-disable jsx-a11y/alt-text */
import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'Tesla_logo.png' }
 }
) => {
 return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-2 ps-2">
                <img className="rounded-circle" src={`/images/${who.avatarIcon}`} height="50px" width="50px"/>
                
            </div>
            <div className="col-6 ps-3">
                <div className="col fw-bolder">
                    {who.userName} <i className="fa-solid fa-circle-check"></i>
                </div>
                <div >
                    @{who.handle}
                </div>
            </div>
            <div className="col-4 m-0 p-0">
                <button className="btn btn-primary rounded-pill mt-1 ms-3">Follow</button>
            </div>
        </div>
    </li>
 );
};
export default WhoToFollowListItem;

