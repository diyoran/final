import React from 'react'
import mentor from '../img/icons/mentor.svg'
// import BreadCrumb from '../components/BreadCrumb/breadcrumb'
import { Fragment, useState } from "react";
import { Modal } from "antd";
import { Input, Space } from 'antd';
import Burger from '../components/burger';


export default function Header() {
    const [IsOpenModal, setIsOpenModal] = useState(false)
    const handleClickModal = (e) => {
       e.preventDefault()
        setIsOpenModal(prev => !prev)
    }
    if (IsOpenModal === true) {
        console.log('click');
    }



    const { Search } = Input;
    const onSearch = (value, _e) => console.log(value);
    const Searchbar = () => (
        <Space direction="vertical">
            <Search
                placeholder="What would you like to learn?"
                onSearch={onSearch}
                style={{
                    width: 400,
                    inputFontSize: 20,
                    fontSize: 20,

                }}
            />

        </Space>

    )

    return (
        <Fragment>
            <Modal open={IsOpenModal} title={"Create New Account or Login"} onOk={handleClickModal} onCancel={handleClickModal}>
                <div className="modal">
                    <input className="modal__input" type="text" placeholder='Email' />
                    <input className="modal__input" type="password" placeholder='Password' />
                    <a className="modal__link" href="!#">Forgot your password?</a>
                </div>
            </Modal>

            <header>
                <div className="container-header">
                    <div className='navbar'>

                        <div className="navbar__burger">
                            <Burger />
                            <h2 className="logo">
                                <a href="/main">LearnHub</a>
                            </h2>
                        </div>



                        {/* <BreadCrumb /> */}
                        <div className="navbar__input">
                            <Searchbar />
                        </div>

                        <div className="navbar__left">
                            <a href="/courses">Courses</a>
                            <a href="/main#mentor-link" className='mentor'>Become a Mentor</a>
                            <a id='login-btn' className='login' onClick={handleClickModal}>Login</a>
                            <a href='!#' className='logout' id='logout-btn'>Logout</a>
                            <a href='!#' id='profile-btn'><img src={mentor} alt="profile" /></a>
                        </div>



                    </div>

                </div>
            </header>
        </Fragment>
    )
}
