import NavigationSideBar from '../NavigationSideBar/index.js';
import PostList from '../PostList/index.js';
import PostSummaryList from '../PostSummaryList/index.js';

function homeComponent() {
    $('#wd-explore').append(`

        <div class="container">

            <div class="row mt-1">

                <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    ${NavigationSideBar('home')}
                </div>

                <div class="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                    ${(PostList())}
                </div>

                <div class="col-lg-4 col-xl-4 col-xxl-4 d-none d-lg-block">
    
                    <div class="list-group">
                        ${PostSummaryList()}
                    </div>
                </div>
            </div>
        </div>
    `)
}


$(homeComponent)

