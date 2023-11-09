const Error404NotFound = () => {
    return (
        <div id="wrapper">
        <section className="container">
          <div className="dynamicContent">
            {/* Content */}
            <div className="inner">
              <div className="row">
                <div className="span4 offset2">
                  <img src="img/page404_pic1.png" className="margin3" alt="" />
                </div>
                <div className="span5">
                  <h2 className="margin4">Sorry, page not found.</h2>
                  <p>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}   

export default Error404NotFound;