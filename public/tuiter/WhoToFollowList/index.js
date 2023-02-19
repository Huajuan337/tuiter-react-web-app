import whos from './Who.js'
import WhoToFollowListItem from './WhoToFollowListItem.js';

function WhoToFollowList() {
    return (`
        <div class="list-group">
            <li class="list-group-item fw-bolder">
                Who to follow
            </li>
            
            ${
                whos.map(who => {
                    return(WhoToFollowListItem(who))
                }).join("")
            }
        </div>
    
    `)
}

export default WhoToFollowList; 