import React from 'react';

const PostListItem = (
    {
        item = {
            "avatar": "post-avatar.jpg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "postContent": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s!",
            "shareImage": "tennis.jpeg",
            "shareTopic": "Lorem Ipsum is simply dummy text of the printing and typesetting",
            "shareContent": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            "commentNum": "123k",
            "shareNum": "4.5k",
            "likeNum": "23k"
        }
    }
) => {
    return(
        <li className="list-group-item p-0 pt-1 pb-3 pe-1">
            <div className="row">
                <div className="col-2 p-0 ps-3">
                    <img className="rounded-circle ms-2" src={`/images/${item.avatar}`} height="50px" width="50px" />
                </div>
                <div className="col-10">

                    <div className="mb-1">
                        {item.userName} <i className="fa-solid fa-circle-check"></i>
                        <span>@{item.handle} . {item.time}</span>
                    </div>
                    <div className="mb-1">
                        {item.postContent}
                    </div>
                    <div className="rounded">
                        <img className="rounded" src={`/images/${item.shareImage}`} width="100%"/>
                        <div className="ps-2">{item.shareTopic}</div>
                        <div className="text-secondary ps-2">
                            {item.shareContent}
                        </div>
                    </div>
                    <ul className="nav nav-tab mt-2">
                        <li className="nav-item me-5">
                            <i className="bi bi-chat me-1"></i><span>{item.commentNum}</span>
                        </li>
                        <li className="nav-item me-5">
                            <i class="bi bi-heart me-1"></i><span>{item.likeNum}</span>
                        </li>
                        <li className="nav-item me-5">
                            <i className="bi bi-arrow-repeat me-1"></i><span>{item.shareNum}</span>
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-upload me-1"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    )

}

export default PostListItem; 