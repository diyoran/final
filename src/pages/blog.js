import React from "react";
import { Fragment } from "react";
import Education from "../img/education.avif"
import { Helmet } from "react-helmet";


export default function Blog() {
    return (
        <Fragment>

            <Helmet>
                <title>
                    LearnHub/Blog
                </title>
            </Helmet>

            <div className="container">


                <div className="bloging">
                    {/* <div className="bloging__header">

                    <div className="bloging__header__title">
                        <h3>
                            —Latest Blog—
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
                        </p>
                    </div>

                </div> */}

                    <div className="courses__title">
                        <h2 className="title">
                            Latest Blog
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
                        </p>
                    </div>

                    <div className="bloging__cards--wrapper">
                        <ul className="bloging__cards">
                            <li className="bloging__card">
                                <img className="bloging__card__img" src={Education} alt="error" />
                                <div className="bloging__card__title">
                                    <a href="!#">
                                        <h3>How to experience powerful education free of charge
                                        </h3>
                                    </a>
                                    <p>
                                        3 May 2021 5 min read
                                    </p>
                                    <p className="bloging__card__txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna dolor quis enim, convallis vitae maecenas. Orci, erat enim adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit at. Urna, sit sit eget placerat eget hendrerit consequat. Risus, cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam amet, vel aliquam cursus aliquet pellentesque aenean. Sit vestibulum malesuada eget pharetra. Risus consequat bibendum dictum placerat convallis donec malesuada in porttitor.
                                    </p>

                                    <button className="bloging__card__btn">Read More</button>

                                </div>
                            </li>
                            <li className="bloging__card">
                                <img className="bloging__card__img" src={Education} alt="error" />
                                <div className="bloging__card__title">
                                    <a href="!#">
                                        <h3>How to experience powerful education free of charge
                                        </h3>
                                    </a>
                                    <p>
                                        3 May 2021 5 min read
                                    </p>
                                    <p className="bloging__card__txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna dolor quis enim, convallis vitae maecenas. Orci, erat enim adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit at. Urna, sit sit eget placerat eget hendrerit consequat. Risus, cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam amet, vel aliquam cursus aliquet pellentesque aenean. Sit vestibulum malesuada eget pharetra. Risus consequat bibendum dictum placerat convallis donec malesuada in porttitor.
                                    </p>
                                    <button className="bloging__card__btn">Read More</button>
                                </div>
                            </li>
                            <li className="bloging__card">
                                <img className="bloging__card__img" src={Education} alt="error" />
                                <div className="bloging__card__title">
                                    <a href="!#">
                                        <h3>How to experience powerful education free of charge
                                        </h3>
                                    </a>
                                    <p>
                                        3 May 2021 5 min read
                                    </p>
                                    <p className="bloging__card__txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna dolor quis enim, convallis vitae maecenas. Orci, erat enim adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit at. Urna, sit sit eget placerat eget hendrerit consequat. Risus, cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam amet, vel aliquam cursus aliquet pellentesque aenean. Sit vestibulum malesuada eget pharetra. Risus consequat bibendum dictum placerat convallis donec malesuada in porttitor.
                                    </p>
                                    <button className="bloging__card__btn">Read More</button>
                                </div>
                            </li>
                            <li className="bloging__card">
                                <img className="bloging__card__img" src={Education} alt="error" />
                                <div className="bloging__card__title">
                                    <a href="!#">
                                        <h3>How to experience powerful education free of charge
                                        </h3>
                                    </a>
                                    <p>
                                        3 May 2021 5 min read
                                    </p>
                                    <p className="bloging__card__txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna dolor quis enim, convallis vitae maecenas. Orci, erat enim adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit at. Urna, sit sit eget placerat eget hendrerit consequat. Risus, cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam amet, vel aliquam cursus aliquet pellentesque aenean. Sit vestibulum malesuada eget pharetra. Risus consequat bibendum dictum placerat convallis donec malesuada in porttitor.
                                    </p>
                                    <button className="bloging__card__btn">Read More</button>
                                </div>
                            </li>
                            <li className="bloging__card">
                                <img className="bloging__card__img" src={Education} alt="error" />
                                <div className="bloging__card__title">
                                    <a href="!#">
                                        <h3>How to experience powerful education free of charge
                                        </h3>
                                    </a>
                                    <p>
                                        3 May 2021 5 min read
                                    </p>
                                    <p className="bloging__card__txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna dolor quis enim, convallis vitae maecenas. Orci, erat enim adipiscing mattis elit nunc, sed facilisis. Enim, dui, diam sit at. Urna, sit sit eget placerat eget hendrerit consequat. Risus, cursus nibh aliquet facilisis laoreet sagittis quis. Aliquam amet, vel aliquam cursus aliquet pellentesque aenean. Sit vestibulum malesuada eget pharetra. Risus consequat bibendum dictum placerat convallis donec malesuada in porttitor.
                                    </p>
                                    <button className="bloging__card__btn">Read More</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}