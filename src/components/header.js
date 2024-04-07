import React from 'react'
import Logo from '../img/Logo.png'
import time from '../img/icons/time.svg'
import mentor from '../img/icons/mentor.svg'
import video from '../img/icons/video.svg'

export default function Header() {
    return (
        <header>

            <div className='navbar'>

                <img src={Logo} alt="logo" className='logo' />
                <input type="search" placeholder='Search bar' className='searchbar' />

                <div className='options'>
                    <label htmlFor='#select'>Category</label>

                    <select id='select'>
                        <option>

                        </option>
                        <option>

                        </option>
                        <option>

                        </option>
                    </select>
                </div>

                <a href="!" className='mentor'>Become a Mentor</a>

                <div className='buttons'>
                    <button className='login'>Login</button>
                    <button className='singup'>Sing Up</button>
                </div>

            </div>


            <div className='banner'>
                <div className='info'>
                    <h1 className='info__title'>Find the Best Courses and Amazing Mentor</h1>
                    <p className='info__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus </p>
                    <ul>
                        <li className='feature'>
                            <img src={time} alt="icon" />
                            <p>
                                Life Time Acces
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

                </div>
            </div>

        </header>
    )
}
