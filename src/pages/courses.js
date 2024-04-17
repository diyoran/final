import React from "react";
import { Fragment } from "react";
import posterBlog from '../img/poster.jpg'
import art from '../img/artCard.jpg'

export default function Courses() {
    return (
        <Fragment>
            <div className="courses-wrapper">
                <div className="courses__title">
                    <h1 className="title">
                        Programming Courses
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
                    </p>
                </div>
                <div className="blog">
                    <h1 className="blog__title">
                        Most Popular Development Courses
                    </h1>

                    <ul className="blog__container">
                        <li className="blog__container item">
                            <img className="item__img" src={posterBlog} alt="error" />
                            <p className="item__time">
                                3 May 2023
                            </p>
                            <h4 className="item__title">
                                10 graphic design trends to get you inspired in 2021
                            </h4>
                            <p className="item__subtitle">
                                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
                            </p>
                            <a href="!#">Read More</a>
                        </li>
                        <li className="blog__container item">
                            <img className="item__img" src={posterBlog} alt="error" />
                            <p className="item__time">
                                3 May 2023
                            </p>
                            <h4 className="item__title">
                                10 graphic design trends to get you inspired in 2021
                            </h4>
                            <p className="item__subtitle">
                                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
                            </p>
                            <a href="!#">Read More</a>
                        </li>
                        <li className="blog__container item">
                            <img className="item__img" src={posterBlog} alt="error" />
                            <p className="item__time">
                                3 May 2023
                            </p>
                            <h4 className="item__title">
                                10 graphic design trends to get you inspired in 2021
                            </h4>
                            <p className="item__subtitle">
                                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
                            </p>
                            <a href="!#">Read More</a>
                        </li>
                        <li className="blog__container item">
                            <img className="item__img" src={posterBlog} alt="error" />
                            <p className="item__time">
                                3 May 2023
                            </p>
                            <h4 className="item__title">
                                10 graphic design trends to get you inspired in 2021
                            </h4>
                            <p className="item__subtitle">
                                Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
                            </p>
                            <a href="!#">Read More</a>
                        </li>
                    </ul>

                </div>

                <div className="categories">
                    <h1 className="title">Programming Topics</h1>
                    <ul className="categories__cards">
                        <li className="categories__card">
                            <img className="categories__img" src={art} alt="error" />
                            <p className="categories__text">Art & Desing</p>
                        </li>
                        <li className="categories__card">
                            <img className="categories__img" src={art} alt="error" />
                            <p className="categories__text">Art & Desing</p>
                        </li>
                        <li className="categories__card">
                            <img className="categories__img" src={art} alt="error" />
                            <p className="categories__text">Art & Desing</p>
                        </li>
                        <li className="categories__card">
                            <img className="categories__img" src={art} alt="error" />
                            <p className="categories__text">Art & Desing</p>
                        </li>
                        <li className="categories__card">
                            <img className="categories__img" src={art} alt="error" />
                            <p className="categories__text">Art & Desing</p>
                        </li>
                        <li className="categories__card">
                            <img className="categories__img" src={art} alt="error" />
                            <p className="categories__text">Art & Desing</p>
                        </li>
                    </ul>
                </div>

                <div className="filter">
                    <h1 className="title">
                        All Courses
                    </h1>
                    
                </div>

            </div>
        </Fragment>
    )
}