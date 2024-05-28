import React from 'react'
import { useState } from 'react';
import { Carousel } from 'antd';
import { Fragment } from 'react'
import time from '../img/icons/time.svg'
import profile from '../img/icons/person.svg'
import video from '../img/icons/video.svg'
import people from '../img/icons/people.svg'
import flag from '../img/icons/flag.svg'
import mentor_chek from '../img/icons/person-check.svg'
import video_play from '../img/icons/play-btn.svg'
import art from '../img/artCard.jpg'
import posterBlog from '../img/poster.jpg'
import mentorImg from '../img/mentor_img.png'
// import { Carousel } from 'antd';

export default function Main() {

    const FilterExample = () => {
        const [data, setData] = useState([
            { id: 1, name: 'Item 1', category: 'Business' },
            { id: 2, name: 'Item 2', category: 'Art' },
            { id: 3, name: 'Item 3', category: 'Development' },
            { id: 4, name: 'Item 4', category: 'Marketing' },
            { id: 5, name: 'Item 5', category: 'Chemistry' },
        ]);

        const [filteredData, setFilteredData] = useState(data);

        const filterData = (category) => {
            if (category === 'All') {
                setFilteredData(data);
            } else {
                const filtered = data.filter(item => item.category === category);
                setFilteredData(filtered);
            }
        }
    }

    function toCourse() {
        window.location.href = "/coursePage"
    }

    return (
        <Fragment>

            <div className="container">



                <div className='banner'>
                    <div className='info'>
                        <h2 className='info__title'>Find the Best Courses and Amazing Mentor</h2>
                        <p className='info__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus </p>
                        <ul>
                            <li className='feature'>
                                <img src={time} alt="icon" />
                                <p>
                                    Life Time Accses
                                </p>
                            </li>
                            <li className='feature'>
                                <img src={profile} alt="icon" />
                                <p>
                                    Expert Mentor
                                </p>
                            </li>
                            <li className='feature'>
                                <img src={video} alt="icon" />
                                <p>
                                    100K+ Courses
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className='carosel'>
                        <Carousel autoplay>
                            <div>
                                <li className="blog__container item" id='design'>
                                    <img className="item__img" src={posterBlog} alt="error" />
                                    <p className="item__category">
                                        Design
                                    </p>
                                    <h4 className="item__title">
                                        10 graphic design trends to get you inspired in 2021
                                    </h4>
                                    <p className="item__subtitle">
                                        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
                                    </p>

                                </li>
                            </div>
                            <div>
                                <li className="blog__container item">
                                    <img className="item__img" src={posterBlog} alt="error" />
                                    <p className="item__category">
                                        Design
                                    </p>
                                    <h4 className="item__title">
                                        10 graphic design trends to get you inspired in 2021
                                    </h4>
                                    <p className="item__subtitle">
                                        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
                                    </p>

                                </li>
                            </div>
                            <div>
                                <li className="blog__container item">
                                    <img className="item__img" src={posterBlog} alt="error" />
                                    <p className="item__category">
                                        Design
                                    </p>
                                    <h4 className="item__title">
                                        10 graphic design trends to get you inspired in 2021
                                    </h4>
                                    <p className="item__subtitle">
                                        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
                                    </p>

                                </li>
                            </div>

                        </Carousel>
                    </div>

                </div>

                <div className='cards'>



                    <h1>
                        Trending Courses!
                    </h1>

                    <nav >
                        <ul className='cards__nav'>
                            <li className='cards__item'>
                                <button> All </button>
                            </li>
                            <li className='cards__item'>
                                <button onClick={() => filterData('Business')}> Business</button>
                            </li>
                            <li className='cards__item'>
                                <button onClick={() => filterData('Art')}>Art & Design</button>
                            </li>
                            <li className='cards__item'>
                                <button onClick={() => filterData('Development')}> Development</button>
                            </li>
                            <li className='cards__item'>
                                <button onClick={() => filterData('Marketing')}>Marketing</button>
                            </li>
                            <li className='cards__item'>
                                <button onClick={() => filterData('Chemistry')}>Chemistry</button>
                            </li>
                        </ul>
                    </nav>
                    <ul className="blog__container">
                        <li className="blog__container item" onClick={toCourse} key={item.id}>
                            <img className="item__img" src={posterBlog} alt="error" />
                            <p className="item__category">
                                Design
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
                            <p className="item__category">
                                Design
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
                            <p className="item__category">
                                Design
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
                            <p className="item__category">
                                Design
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

                <div className="categories">
                    <h1>Top Categories</h1>
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

                <div className="counter">
                    <ul className="counter__list">
                        <li className="counter__item">
                            <img className="counter__img" src={video_play} alt="error" />
                            <p className='counter__number'>
                                10.000+
                            </p>
                            <p className='counter__text'>
                                Courses
                            </p>
                        </li>
                        <li className="counter__item">
                            <img className="counter__img" src={people} alt="error" />
                            <p className='counter__number'>
                                50.000+
                            </p>
                            <p className='counter__text'>
                                Active Students
                            </p>
                        </li>
                        <li className="counter__item">
                            <img className="counter__img" src={mentor_chek} alt="error" />
                            <p className='counter__number'>
                                1000+
                            </p>
                            <p className='counter__text'>
                                Active Mentor
                            </p>
                        </li>
                        <li className="counter__item">
                            <img className="counter__img" src={flag} alt="error" />
                            <p className='counter__number'>
                                150
                            </p>
                            <p className='counter__text'>
                                Countries
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="table" id='mentor-link'>
                    <img className="table__img" src={mentorImg} alt="error" />
                    <div>
                        <h1 className="table__title">
                            Become a Mentor
                        </h1>
                        <p className="table__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris.
                        </p>
                    </div>
                </div>

                <div className="blog">
                    <h1>
                        The Latest Blog
                    </h1>

                    <ul className="blog__container">
                        <li className="blog__container item">
                            <img className="item__img" src={posterBlog} alt="error" />
                            <p className="item__category">
                                Design
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
                            <p className="item__category">
                                Design
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
                            <p className="item__category">
                                Design
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
                            <p className="item__category">
                                Design
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


        </Fragment>






    )
}


