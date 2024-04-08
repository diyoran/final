import time from '../img/icons/time.svg'
import mentor from '../img/icons/mentor.svg'
import video from '../img/icons/video.svg'
import CarouselFadeExample from '../layout/carousel'

export default function Main() {
    return (
        <div className='main-wrapper'>
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

            <div className='trend-courses'>
                <h1>
                    Top Categories
                </h1>
                <ul>
                    <li className='info-card'>
                        <img src="" alt="error" />
                        <h5>
                        Art & Design
                        </h5>
                    </li>
                    <li className='info-card'>
                        <img src="" alt="error" />
                        <h5>
                        Business
                        </h5>
                    </li>
                    <li className='info-card'>
                        <img src="" alt="error" />
                        <h5>
                        Business
                        </h5>
                    </li>
                    <li className='info-card'>
                        <img src="" alt="error" />
                        <h5>
                        Marketing
                        </h5>
                    </li>
                    <li className='info-card'>
                        <img src="" alt="error" />
                        <h5>

                        </h5>
                    </li>
                </ul>

            </div>

        </div>






    )
}

