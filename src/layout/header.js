import React from 'react'
import profile from '../img/icons/person.svg'
import BreadCrumb from '../components/BreadCrumb/breadcrumb'
import { Fragment, useState } from "react";
import { Modal } from "antd";
import { Input, Space } from 'antd';


export default function Header() {
    const [IsOpenModal, setIsOpenModal] = useState(false)
    const handleClickModal = () => setIsOpenModal(prev => !prev)

    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const Searchbar = () => (
        <Space direction="vertical">
            <Search
                placeholder="What do you like to learn?"
                onSearch={onSearch}
                style={{
                    width: 400,
                }}
            />

        </Space>

    )

    return (
        <Fragment>
            <Modal open={IsOpenModal} style={{ backgroundColor: "black" }} title={"Create New Account or Login"} onOk={handleClickModal} onCancel={handleClickModal}>

            </Modal>

            <header>

                <div className='navbar'>

                    {/* <BreadCrumb /> */}
                    <div className="navbar__input">
                        <Searchbar />
                    </div>

                    <div className="navbar__left">
                        <a href="/courses">Courses</a>
                        <a href="/main#mentor-link" className='mentor'>Become a Mentor</a>
                        <a className='login' onClick={handleClickModal}>Login</a>
                        <a className='logout' id='logout-btn'>Logout</a>
                        <button id='profile-btn'><img src={profile} alt="profile" /></button>
                    </div>



                </div>


            </header>
        </Fragment>
    )
}
