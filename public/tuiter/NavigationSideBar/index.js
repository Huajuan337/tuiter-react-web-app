


function NavigationSideBar(hightlight) {
    
    
    var linkClass = 'list-group-item';
    var home = hightlight === 'home'? linkClass.concat(' ', 'active') : linkClass; 
    var explore = hightlight === 'explore'? linkClass.concat(' ', 'active') : linkClass; 
    console.log(linkClass)


    return (`
        <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="../HomeScreen/index.html" class="${home} list-group-item-action">
            <i class="fa-solid fa-house float-start mt-1"></i><span class="d-none d-xl-block float-start ms-2">Home</span></a>
        <a href="../explore/index.html" class="${explore} list-group-item-action">
            <i class="fa-solid fa-hashtag float-start mt-1"></i><span class="d-none d-xl-block float-start ms-2">Explore</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-bell float-start mt-1"></i><span class="d-none d-xl-block float-start ms-2"> Notification</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-envelope float-start mt-1"></i><span class="d-none d-xl-block float-start ms-2"> Messages</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-bookmark float-start mt-1"></i><span class="d-none d-xl-block float-start ms-2">Bookmarks</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-list float-start mt-1"></i><span class="d-none d-xl-block float-start ms-2">Lists</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-user float-start mt-1"></i><span class="d-none d-xl-block float-start ms-2">People</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-circle-info float-start mt-1"></i><span class="d-none d-xl-block float-start ms-2">More</span></a>
        </div>
        <button class="btn btn-primary w-100 mt-1 rounded-pill ps-1">Tweet</button>
    `)
} 


export default NavigationSideBar; 