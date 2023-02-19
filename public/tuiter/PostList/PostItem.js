
function PostItem(item) {
    return(`
        <li class="list-group-item p-0 pt-1 pb-3 pe-1">
            <div class="row">
                <div class="col-2 p-0 ps-3">
                    <img class="rounded-circle ms-2" src=${item.avatar} height="50px" width="50px">
                </div>
                <div class="col-10">

                    <div class="mb-1">
                        ${item.userName} <i class="fa-solid fa-circle-check"></i>
                        <span>@${item.handle} &middot ${item.time}</span>
                    </div>
                    <div class="mb-1">
                        ${item.postContent}
                    </div>
                    <div class="rounded">
                        <img class="rounded" src=${item.shareImage} width="100%">
                        <div class="ps-2">${item.shareTopic}</div>
                        <div class="text-secondary ps-2">
                            ${item.shareContent}
                        </div>
                    </div>
                    <ul class="nav nav-tab mt-2">
                        <li class="nav-item me-5">
                            <i class="fa-regular fa-comment me-1"></i><span>${item.commentNum}</span>
                        </li>
                        <li class="nav-item me-5">
                            <i class="fa-solid fa-heart me-1"></i><span>${item.likeNum}</span>
                        </li>
                        <li class="nav-item me-5">
                            <i class="fa-solid fa-arrow-up-from-bracket me-1"></i><span>${item.shareNum}</span>
                        </li>
                        <li class="nav-item">
                            <i class="fa-solid fa-retweet me-1"></i><span>4.7K</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </li>
    `)
}

export default PostItem; 