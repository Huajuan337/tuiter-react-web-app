
const TuitStats = ({tuit}) => {

    return(
        <div>
            <ul className="nav nav-tab mt-2">
                <li className="nav-item me-5">
                    <i className="bi bi-chat me-1"></i><span>{tuit.replies}</span>
                </li>
                <li className="nav-item me-5">
                    <i className={`${tuit.liked? 'text-danger': ''} bi bi-heart-fill me-1`}></i><span>{tuit.likes}</span>
                </li>
                <li className="nav-item me-5">
                    <i className="bi bi-arrow-repeat me-1}"></i><span>{tuit.retuits}</span>
                </li>
                <li className="nav-item">
                    <i className="bi bi-upload me-1"></i>
                </li>
            </ul>
        </div>
    )
}

export default TuitStats;
