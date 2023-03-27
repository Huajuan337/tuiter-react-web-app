
import React from 'react'; 
import TuitsList from '../tuits/tuits-list';
import WhatsHappening from './whats-happending'; 

const HomeComponent = () => {

    return(
        <>
            {/* // <PostList/> */}
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
        
    )
}

export default HomeComponent; 