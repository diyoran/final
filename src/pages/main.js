import React from 'react'
import { Fragment } from 'react'
import time from '../img/icons/time.svg'
import mentor from '../img/icons/mentor.svg'
import video from '../img/icons/video.svg'
import people from '../img/icons/people.svg'
import flag from '../img/icons/flag.svg'
import art from '../img/artCard.jpg'
import mentorImg from '../img/mentor_img.png'
import CarouselFadeExample from '../components/carousel'
import Cards from '../components/card'

export default function Main() {
    return (
        <Fragment className='main-wrapper'>
            <div className='banner'>
                <div className='info'>
                    <h1 className='info__title'>Find the Best Courses and Amazing Mentor</h1>
                    <p className='info__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus </p>
                    <ul>
                        <li className='feature'>
                            <img src={time} alt="icon" />
                            <p>
                                Life Time Accses
                            </p>
                        </li>
                        <li className='feature'>
                            <img src={mentor} alt="icon" />
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
                    <CarouselFadeExample />
                </div>
            </div>

            <div className='cards'>
                <Cards />
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
                </ul>
            </div>

            <div className="counter">
                <ul className="counter__list">
                    <li className="counter__item">
                        <img className="counter__img" src={video} alt="error" />
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
                        <img className="counter__img" src={mentor} alt="error" />
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

            <div className="table">
                <img className="table__img" src={mentorImg} alt="" />
                <div className='table__txt'>
                    <h1 className="table__title">
                        Become a Mentor
                    </h1>
                    <p className="table__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris.
                    </p>
                </div>
            </div>


        </Fragment>






    )
}

