import React from 'react'
import mentor from '../img/icons/mentor.svg'
// import BreadCrumb from '../components/BreadCrumb/breadcrumb'
import { Fragment, useState, useEffect } from "react";
import { Modal } from "antd";
import { Input, Space } from 'antd';
import Burger from '../components/burger';


export default function Header() {
    const [IsOpenModal, setIsOpenModal] = useState(false)
    const [showBlock1, setShowBlock1] = useState(true);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showLogout, setShowLogout] = useState(false); // Добавили состояние для кнопки Logout



    const handleClickModal = () => {
        setIsOpenModal(prev => !prev)
    }

    useEffect(() => {
        // При загрузке страницы проверяем состояние из localStorage
        const savedState = localStorage.getItem('showBlock1');
        if (savedState !== null) {
            setShowBlock1(JSON.parse(savedState));
        }

        // Проверяем сохраненные логин и пароль
        const savedLogin = localStorage.getItem('login');
        const savedPassword = localStorage.getItem('password');
        if (savedLogin && savedPassword) {
            setLogin(savedLogin);
            setPassword(savedPassword);
        }
    }, []);

    const toggleBlocks = () => {
        if (login.trim() === '' || password.trim() === '') {
            alert('Пожалуйста, заполните все поля ввода.');
            return;
        }
        setShowBlock1(!showBlock1);
        // Сохраняем состояние в localStorage
        localStorage.setItem('showBlock1', JSON.stringify(!showBlock1));
    };

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
        localStorage.setItem('login', e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        localStorage.setItem('password', e.target.value);
    }

    const handleLogout = () => {
        setShowBlock1(true);
        setLogin('');
        setPassword('');
        localStorage.removeItem('login');
        localStorage.removeItem('password');
    };



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
            <Modal open={IsOpenModal} title={"Create New Account or Login"} onOk={toggleBlocks} onCancel={handleClickModal}>
                <div className="modal">
                    <input className="modal__input" type="text" placeholder='Login or Email' value={login} onChange={handleLoginChange} />
                    <input className="modal__input" type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
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
                            {showBlock1 ? (<a id='login-btn' className='login' onClick={handleClickModal}>Login</a>) : (<a href='/profile' id='profile-btn'><img src={mentor} alt="profile" /></a>)}
                            <a  className='logout' id='logout-btn' onClick={handleLogout}>Logout</a>
                        </div>



                    </div>

                </div>
            </header>
        </Fragment>

    )
}
