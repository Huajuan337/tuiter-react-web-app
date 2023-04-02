

function PostSummmaryItem(post) {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-8">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="fw-bolder">
                        ${post.userName} <span><i class="fa-solid fa-circle-check"></i></span><span class="text-secondary"> - ${post.time}</span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                    <div class="text-secondary">
                        ${post.tweets}
                    </div>
                </div>
                <div class="col-4">
                    <img class="float-end" src=${post.image} height="90px">
                </div>
            </div>
        </li>
    `)
}

export default PostSummmaryItem; 