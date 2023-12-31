import { Link } from "react-router-dom";

const Pike = () => {
    return (
        <div className="pike-species-page">
            <h2>Pike</h2>
            <figure className="pike-img"><img src="img/pikeExplanation.jpg" alt="" /></figure>
            <h1>Details</h1>
            <p className="pike-info">
                <span>
                    The pike is an aggressive predatory fish found in most lakes an rivers in Europe and Northern America.
                    It feeds on everything it sets its eyes, even ducks and rats. You can catch with all sorts of lures.
                    Ir grows to 1.30m long and 25kg. The best lures for it are big soft baits and jerks. Some people also catch it on so called spoons.
                </span>
            </p>
            <p className="pike-info">
            <span>
                If you want to learn even more about pikes, follow the link: 
                <Link 
                    to="https://en.wikipedia.org/wiki/Northern_pike" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <button>
                        Pike Wikipedia
                        </button>
                    </Link>
            </span>
            </p>

        </div>
    )
}

export default Pike;