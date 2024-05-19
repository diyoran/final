import React from 'react';
import { MenuOutlined, HomeOutlined, UserOutlined, BookOutlined, StepForwardOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
    {
        label: <a href="/main">Main</a>,
        icon: <HomeOutlined />,
        key: '0',
    },
    {
        label: <a href="/profile"> Profile</a>,
        icon: <UserOutlined />,
        key: '1',
    },
    {
        label: <a href="/courses">Courses</a>,
        icon: <StepForwardOutlined />,
        key: '2',
    },
    {
        label: <a href="/blog">Blog</a>,
        icon: <BookOutlined />,

        key: '3',
    },
    // {
    //     type: 'divider',
    // },
    // {
    //     label: '',
    //     key: '3',
    // },
];
const Burger = () => (
    <Dropdown
        menu={{
            items,
        }}
        trigger={['click']}
        
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                <MenuOutlined />
            </Space>
        </a>
    </Dropdown>
);
export default Burger;