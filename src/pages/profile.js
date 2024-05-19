import React from 'react'
import { Fragment } from 'react'
import { Helmet } from "react-helmet";
import posterBlog from '../img/poster.jpg'
import { Breadcrumb } from 'antd';
import { Flex, Progress } from 'antd';

export default function Profile() {


    const Chart = () => (
        <Flex
            vertical
            gap="small"
            style={{
                width: 180,
            }}
        >
            <Progress percent={30} size={[400, 10]} trailColor={'white'}  status="active"/>
            <Progress percent={50} size={[400, 10]} trailColor={'white'}  status="active" />
            <Progress percent={70} size={[400, 10]} trailColor={'white'}  status="exception" />
            <Progress percent={100} size={[400, 10]} trailColor={'white'}  />
        </Flex>
    );

    // const Circle = () => (
    //     <Flex gap="small" wrap>
    //         <Progress type="circle" percent={75} format={(percent) => `${percent} Days`} />
    //         <Progress type="circle" percent={100} format={() => 'Done'} />
    //     </Flex>
    // );

    // const BreadCrumb = () => (
    //     <Breadcrumb
    //         items={[
    //             {
    //                 title: <a href="/courses">My Courses</a>,
    //             },
    //             {
    //                 title: <a href="/coursePage">Wishlist</a>,
    //             },
    //             {
    //                 title: <a href="/blog">My Certificate</a>,
    //             },
    //         ]}
    //     />
    // )

    return (
        <Fragment>

            <Helmet>
                <title>
                    LearnHub/Profile
                </title>
            </Helmet>

            <div className="container">
                <div className="profile">
                    <div className="profile__avatar"></div>

                    <div className="profile__name">

                        <h3>Mandy Candy</h3>
                        <p>
                            Web Developer
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
                        </p>

                        <div className="profile__progress">
                            <Chart />
                        </div>

                    </div>


                </div>

                <div className="profile--list">

                    <div className="profile--nav">
                       {/*   */}
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

            </div>

        </Fragment>
    )
}