// // import {Link} from "react-router-dom";
// import NavigationSidebar from "./navigation-sidebar";
// import Nav from "../nav";
// import WhoToFollowList from './who-to-follow-list'; 
// import PostSummaryList from './post-summary-list'


// function Tuiter() {
//  return(
//    <div class="container">
//         <div class="row mt-1">
//             <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
//                 <NavigationSidebar active='home'/>
//             </div>
//             <div class="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
//                 <PostSummaryList/>
//             </div>
//             <div class="col-lg-4 col-xl-4 col-xxl-4 d-none d-lg-block">
//                 <WhoToFollowList/>
//             </div>
//         </div>
//     </div>


//         // <div>
//         //     <Nav/>
//         //     <NavigationSidebar active="home"/>
//         //     <WhoToFollowListItem/>
//         //     <h1>Tuiter</h1>
//         // </div>
//  )
// }
// export default Tuiter

import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
 return (
   <div className="row mt-2">
     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
       <NavigationSidebar active="explore"/>
     </div>
     <div className="col-10 col-md-10 col-lg-7 col-xl-6"
          style={{"position": "relative"}}>
       <ExploreComponent/>
     </div>
     <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
       <WhoToFollowList/>
     </div>
   </div>
 );
}

export default Tuiter