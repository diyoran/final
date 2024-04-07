import time from '../img/icons/time.svg'
import mentor from '../img/icons/mentor.svg'
import video from '../img/icons/video.svg'
import Carousel from '../components/carousel'

export default function Main() {
    return (
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
                <Carousel />
            </div>
        </div>
    )
}

