import React from 'react'
import profile from '../img/icons/person.svg'
import BreadCrumb from '../components/BreadCrumb/breadcrumb'

export default function Header() {
    return (
        <header>

            <div className='navbar'>

                <BreadCrumb />
                {/* <input type="search" placeholder='Search bar' className='searchbar' /> */}


                <div className='options'>
                    <label htmlFor='#select'>Category</label>

                    <select id='select'>
                        <option>
                            1
                        </option>
                        <option>
                            2
                        </option>
                        <option>
                            3
                        </option>
                    </select>
                </div>

                <a href="!" className='mentor'>Become a Mentor</a>

                <div className='buttons'>
                    <button className='login'>Login</button>
                    <button className='singup'>Sing Up</button>
                    <button className='logout' id='logout-btn'>Logout</button>
                    <button id='profile-btn'><img src={profile} alt="profile" /></button>

                </div>



            </div>


        </header>
    )
}
