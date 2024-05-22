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
                                    <label><Checkbox value="5" />⭐⭐⭐⭐⭐ 5</label>
                                </li>
                                <li className="sidebar__info">
                                    <label><Checkbox value="4" />⭐⭐⭐⭐ 4+</label>

                                </li>
                                <li className="sidebar__info">
                                    <label><Checkbox value="3" />⭐⭐⭐ 3+</label>

                                </li>
                                <li className="sidebar__info">
                                    <label><Checkbox value="2" />⭐⭐ 2+</label>

                                </li>
                                <li className="sidebar__info">
                                    <label><Checkbox value="1" />⭐ 1+</label>

                                </li>
                            </ul>

                            <ul className="sidebar__item">
                                <h2>
                                    Durations
                                </h2>
                                <li className="sidebar__info">
                                    <label><Checkbox value="6h" />3-6 Hours</label>
                                </li>
                                <li className="sidebar__info">
                                    <label><Checkbox value="12h" />6-12 Hours</label>


                                </li>
                                <li className="sidebar__info">
                                    <label><Checkbox value="20h" />12-20 Hours</label>


                                </li>
                                <li className="sidebar__info">
                                    <label><Checkbox value="30h" />30+ Hours</label>


                                </li>

                            </ul>
                            <ul className="sidebar__item">
                                <h2>
                                    Categories
                                </h2>
                                <li className="sidebar__info">
                                    <label><Checkbox value="developer" />Front-end developer</label>

                                </li>
                                <li className="sidebar__info">
                                    <label><Checkbox value="Web" />Web Designer</label>


                                </li>
                                <li className="sidebar__info">
                                    <label><Checkbox value="Management" />Management</label>

                                </li>
                                <li className="sidebar__info">
                                    <label><Checkbox value="Copywriter" />Copywriter</label>
                                </li>

                            </ul>
                            <ul className="sidebar__item">
                                <h2>
                                    Level
                                </h2>
                                <li className="sidebar__info">
                                <label><Checkbox value="Beginner" />Beginner</label>
                                  
                                </li>
                                <li className="sidebar__info">
                                <label><Checkbox value="Intermediate" />Intermediate</label>
                                   
                                </li>
                                <li className="sidebar__info">
                                <label><Checkbox value="Advanced" />Advanced</label>

                                </li>

                            </ul>
                            <ul className="sidebar__item">
                                <h2>
                                    Language
                                </h2>
                                <li className="sidebar__info">
                                <label><Checkbox value="English" />English</label>
                                </li>
                                <li className="sidebar__info">
                                <label><Checkbox value="Espanol" />Espanol</label>

                                </li>
                                <li className="sidebar__info">
                                <label><Checkbox value="Russian" />Russian</label>

                                </li>

                            </ul>
                            <ul className="sidebar__item">
                                <h2>
                                    Price
                                </h2>
                                <li className="sidebar__info">
                                <label><Checkbox value="200" />± $200</label>
                                </li>
                                <li className="sidebar__info">
                                <label><Checkbox value="400" />± $400</label>
                                </li>
                                <li className="sidebar__info">
                                <label><Checkbox value="600" />± $600</label>
                                  
                                </li>
                                <li className="sidebar__info">
                                <label><Checkbox value="800" />$800 and more</label>
                                    

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