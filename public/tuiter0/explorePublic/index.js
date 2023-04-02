// Explore (index.js)
import NavigationSideBar from '../NavigationSideBar/index.js';
import ExploreComponent from '../ExploreScreen/ExploreComponent.js';
import WhoToFollowList from '../WhoToFollowList/index.js';


function exploreComponent() {
   $('#wd-explore').append(`


       <div class="container">


           <div class="row mt-1">


               <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                   ${NavigationSideBar('explore')}
               </div>


               <div class="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                   ${ExploreComponent()}
               </div>


               <div class="col-lg-4 col-xl-4 col-xxl-4 d-none d-lg-block">
                   ${WhoToFollowList()}
               </div>
           </div>
       </div>
   `)
}




$(exploreComponent)



