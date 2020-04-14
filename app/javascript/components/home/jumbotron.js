import React from "react";

const Jumbotron = () => {
    return(
        <section>
            <div className="home-section--1">
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-12 col-md-5">
                            <div className="pt-4 mt-4">
                                <h1>React for Rails</h1>
                                <p>Supercharge Ruby on Rails</p>
                            </div>
                        </div>
                        <div className="col col-sm-12 col-md-7">
                            <div className="pt-4 mt-4 text-center">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/jdWvcyKsx1g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jumbotron