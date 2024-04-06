import React from 'react'
import Logo from '../img/Logo.png'

export default function Header() {
    return (
        <header>
            <div className='fix'>
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
            </div>

            <div className='info'>
                <h1 className='info__title'>Find the Best Courses and Amazing Mentor</h1>
                <p className='info__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus </p>
                
            </div>

        </header>
    )
}
