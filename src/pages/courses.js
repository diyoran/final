import React from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Checkbox } from "antd";
import posterBlog from '../img/poster.jpg'
import art from '../img/artCard.jpg'

export default function Courses() {
    return (
        <Fragment>

            <Helmet>
                <title>
                    LearnHub/Courses
                </title>
            </Helmet>

            <div className="container">
                <div className="courses__title">
                    <div className="page__header-content">
                        <h2 className="title">
                            All Courses
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
                        </p>
                    </div>
                </div>

                <div className="blog">
                    <h1>
                        Most Popular Courses
                    </h1>

                    <div className="container">
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

                            </li>
                        </ul>

                    </div>
                </div>

                <div className="filter">
                    <h1 >
                        Filter & Sort
                    </h1>

                    <div className="sidebar--wrapper">
                        <div className="sidebar">
                            <ul className="sidebar__item">
                                <h2>
                                    Ratings
                                </h2>
                                <li className="sidebar__info">
                                    <label><Checkbox value="value" /> <p>⭐⭐⭐⭐⭐ 5</p></label>
                                    {/* <Checkbox id="five"/>
                                    <p>⭐⭐⭐⭐⭐ 5</p> */}
                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>⭐⭐⭐⭐ 4+</p>

                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>⭐⭐⭐ 3+</p>

                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>⭐⭐ 2+</p>

                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>⭐ 1+</p>

                                </li>
                            </ul>

                            <ul className="sidebar__item">
                                <h2>
                                    Durations
                                </h2>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>1-3 Hours</p>
                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>3-6 Hours</p>

                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>6-12 Hours</p>

                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>13+ Hours</p>

                                </li>

                            </ul>
                            <ul className="sidebar__item">
                                <h2>
                                    Categories
                                </h2>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>Front-end developer</p>
                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>Web Designer</p>

                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>Management</p>

                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>Copywriter</p>

                                </li>

                            </ul>
                            <ul className="sidebar__item">
                                <h2>
                                    Level
                                </h2>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>Beginner</p>
                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>Intermediate</p>

                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>Advanced</p>

                                </li>

                            </ul>
                            <ul className="sidebar__item">
                                <h2>
                                    Language
                                </h2>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>English</p>
                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>Espanol</p>

                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>Russian</p>

                                </li>

                            </ul>
                            <ul className="sidebar__item">
                                <h2>
                                    Price
                                </h2>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>± $200</p>
                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>± $400</p>

                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>± $600</p>

                                </li>
                                <li className="sidebar__info">
                                    <Checkbox />
                                    <p>$800 and more</p>

                                </li>

                            </ul>
                        </div>

                        <div className="blog sidebar--wrapper__items">

                            <ul className="blog__container sidebar--wrapper__item ">

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

                                </li>
                                <li className="blog__container item ">
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

                                </li>

                            </ul>

                        </div>

                    </div>

                </div>



            </div>
        </Fragment>
    )
}