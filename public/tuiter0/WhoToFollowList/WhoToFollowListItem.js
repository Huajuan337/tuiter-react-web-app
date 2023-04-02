function WhoToFollowListItem(who) {


    return(`
 
 
        <li class="list-group-item">
            <div class="row">
                <div class="col-2 ps-2">
                    <img class="rounded-circle" src=${who.avatarIcon} height="50px" width="50px">
                </div>
                <div class="col-6 ps-3">
                    <div class="col fw-bolder">
                        ${who.userName} <i class="fa-solid fa-circle-check"></i></span>
                    </div>
                    <div >
                        @${who.handle}
                    </div>
                </div>
                <div class="col-4 m-0 p-0">
                    <button class="btn btn-primary rounded-pill mt-1 ms-3">Follow</button>
                </div>
            </div>
        </li>
    `)
 }
 
 
 export default WhoToFollowListItem;