import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div id="aboutUs">
      <section className="aboutUs">
        <div className="dynamicContent">
          {/* content */}
          <div className="inner">
            <div className="row">
              <div className="span8">
                <h1>About us</h1>
                <figure className="img-polaroid margin2 pull-left"><img src="img/fisherman.jpg" alt="" /></figure>
                
                <h4>The best fishing blog</h4>
                <p className="about-us">
                    <span>This is the best fishing blog specializing only on predator species with artificial lures.
                        Here you can create a profile and post any catches that you have, write blogs and like and comment other peoples posts.
                        This is a place where you can exchange valuable knowledge about this amazing hobby.
                    </span>
                    <h3>If this is something you like, feel free to register:
                      <button>
                        <Link to='/register'>Register</Link>
                      </button>
                    </h3>
                    <h3>If you already have a profile you can login from the link:
                      <button>
                      <Link to='/login'>Login</Link>
                      </button>
                    </h3>  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default AboutUs;