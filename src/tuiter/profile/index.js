import React from 'react'; 
// import user from './profile.json'; 
import './index.css';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router';
// import { useEffect } from 'react';
import './index.css'

const ProfileComponent = () => {

    const user = useSelector(state => state.user)

    let navigate = useNavigate()

    const editProfile = () => {
        navigate('edit-profile')
    
    }

    // useEffect(()=>{console.log(user);},[user])

    return(
        <>
            <div className='position-relative wd-div-height'>
                <img  src={`/images/${user.bannerPicture}`} width="100%" height='250px'/>
                <img className="rounded-circle position-relative wd-picture-up" src={`/images/${user.profilePicture}`} width="100px" height='100px'/>
                <button className="btn btn-light rounded-pill float-end mt-2 border"
                        onClick={editProfile}>Edit Profile</button>
            </div>

            <div className="">
                <h4>{user.firstName} {user.lastName}</h4>
                <p className='text-secondary'>{user.handle}</p>

                <p>{user.bio}</p>

                <ul className="nav nav-tab mt-2">
                    <li className="nav-item me-4">
                        <i className="bi bi-geo-alt me-1"></i><span>{user.location}</span>
                    </li>
                    <i className="fa-regular fa-location-dot"></i>
                    <li className="nav-item me-5">
                        <i className="bi bi-balloon me-1"></i><span>{user.dateOfBirth}</span>
                    </li>
                    <li className="nav-item me-5">
                        <i className="bi bi-calendar3 me-1"></i><span>{user.dateJoined}</span>
                    </li>
                </ul>
            </div>
            <br/>
            <div>
                {user.followingCount} <span className='text-secondary me-4'>Follwing</span> {user.followersCount} <span className='text-secondary'>Follower</span> 
            </div>

    

        </>
        
    )
}

export default ProfileComponent; 