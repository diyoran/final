import React from 'react'
import Logo from '../img/Logo.png'

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

            <div className='info'>

            </div>

        </header>
    )
}
