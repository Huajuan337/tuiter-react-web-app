import PostSummaryList from '../PostSummaryList/index.js'; 

function ExploreComponent() {
    return(`
    
    <div class="row">
        <div class="col-10">
            <div class="position-relative">
                <input class="form-control rounded-pill ps-5" placeholder="Search Twitter">
                <i class="position-absolute fa-solid fa-magnifying-glass wd-search-tuiter"></i>
            </div>
        </div>
        <div class="col-2">
            <i class="fa-solid fa-gear fa-xl p-3 wd-color-blue"></i>
        </div>
    </div>



    <ul class="nav nav-tabs mt-1 mb-1">
        <li class="nav-item">
            <a class="nav-link active" href="#">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
            <a class="nav-link d-none d-md-block" href="#" tabindex="-1">Entertainment</a>
        </li>
    </ul>

    <div class="position-relative">
        <img width="100%" src="../../images/starship.jpeg">
        <h2 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h2>
    </div>

    <ul class="list-group">
        ${PostSummaryList()}
    </ul>
    
    `)
}


export default ExploreComponent; 