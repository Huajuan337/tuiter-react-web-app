import React, {useState} from 'react'; 
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import {updateUser} from '../reducers/user-reducer';
import '../profile/index.css'; 

const EditProfileComponent = () => {

    const user = useSelector(state => state.user); 
    const [fullName, setFullName] = useState(`${user.firstName} ${user.lastName}`); 
    const [profile , setProfile] = useState(user); 
    const [isEditBOA, setIsEditBOA] = useState(false); 
    let navigate = useNavigate(); 


    const dispatch = useDispatch()
    const handleSaveButton = () => {
        // console.log(profile.lastName)
        dispatch(updateUser(profile))
        navigate('/tuiter/profile')
    };

    
    const unSaveEditProfile = () => {
        navigate('profile')
    };

    return(
        <>
            <div className='mt-1'>
                <i className="bi bi-x-lg"
                    onClick={unSaveEditProfile}>
                </i>

                <span className='ms-4 fw-bolder'> Edit Profile</span>

                <button type="button" 
                    className="btn btn-dark float-end rounded-pill"
                    onClick={handleSaveButton}>
                    save
                </button>
            </div>

            
            <div className='position-relative mt-4 wd-div-height' height='280px'>
                <img  src={`/images/${user.bannerPicture}`} width="100%" height='250px'/>
                <img className="rounded-circle position-relative wd-picture-up" src={`/images/${user.profilePicture}`} width="100px" height='100px'/>
                
            </div>
        
            {/* edit name */}
            <div className="form-floating mt-1">
                <textarea 
                    className="form-control" 
                    value={fullName} 
                    id="name"
                    onChange={(e) => {
                   
                        setFullName(e.target.value);
                        let first_name = e.target.value.split(' ')[0]
                        let last_name = e.target.value.split(' ')[1] ?? ''
                        
                        setProfile({
                            ...profile, 
                            firstName: first_name, 
                            lastName: last_name
                        })

                        // console.log("after", profile.firstName, profile.lastName); 
                        
                    }}
                ></textarea>
                <label htmlFor="name">Name</label>
            </div>
            {/* {profile.firstName}, {profile.lastName} */}
            {/* console.log("after:", profile.firstName, profile.lastName);  */}

            <br/>

            {/* edit bio */}
            <div className="form-floating">
                <textarea 
                    className="form-control h-50" 
                    value={profile.bio} 
                    id="bio"
                    rows="5"
                    onChange={(e) => {
                        setProfile({...profile, bio: e.target.value})
                    }}></textarea>
                <label htmlFor="bio">Bio</label>
            </div>
            <br/>

            {/* edit location */}
            <div className="form-floating">
                <textarea 
                    className="form-control" 
                    value={profile.location} 
                    id="location"
                    onChange={(e) => {
                        setProfile({...profile, location: e.target.value})
                    }}></textarea>
                <label htmlFor="location">Location</label>
            </div>
            <br/>


            {/* edit birth date */}
            
            <div className="d-flex">
                Birth date
                <i className="bi bi-dot"></i>
                <button 
                    className="btn btn-link p-0"
                    onClick={() => setIsEditBOA(!isEditBOA)}>
                    
                    {isEditBOA? 'Save' : 'Edit'}
                    <br/>
                </button>
                
                
            </div>
            {
                    isEditBOA && 
                    <input 
                        className='form-control'
                        value={profile.dateOfBirth}
                        onChange={(e) => {
                            setProfile({...profile, dateOfBirth: e.target.value})
                        }}> 
                        
                    </input>
            }
        
            {!isEditBOA && <span>{profile.dateOfBirth}</span>}
            <br/>
            <br/>

            <div>Switch to professional <i className="bi bi-chevron-right float-end"></i></div>

            <br/>
            <br/>
            
        </>
        
    )
}

export default EditProfileComponent; 