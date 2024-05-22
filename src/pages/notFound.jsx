import { Fragment } from "react";
import { Helmet } from "react-helmet";
import NotFoundImg from "../img/icons/not-found-image.gif"

const NotFound = () => {
    return (
        <Fragment>
            <section className="NotFound">
                <Helmet>
                    <title>
                        LearnHub/Not Found
                    </title>
                </Helmet>

                <div className="container">
                    <div className="notfound" >
                        <h3>
                            Not Found 404
                        </h3>
                        <img className="notfound__img" src={NotFoundImg} alt="error" />

                        <h6>
                            Ooops looks like this page doesn't exist
                        </h6>

                    </div>
                </div>

            </section>
        </Fragment>
    )
}

export default NotFound;