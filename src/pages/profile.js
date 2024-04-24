import React from 'react'
import { Fragment } from 'react'
import posterBlog from '../img/poster.jpg'
import { Tabs } from 'antd'
import { FloatButton } from 'antd';

export default function Profile() {
    return (
        <Fragment>
            <div className="profile--wrapper">
                <div className="profile">
                    <div className="profile__bc">
                        <div className="profile__avatar"></div>

                    </div>

                    <div className="profile__name">
                        <h3>Mandy Candy</h3>
                        <p>
                            Web Developer
                        </p>
                    </div>

                </div>

                <div className="profile--list">

                    <div className="profile--list__items">
                    <Tabs defaultActiveKey="1" />
                    </div>

                    <div className="blog">


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

                <   FloatButton.BackTop />

            </div>
        </Fragment>
    )
}