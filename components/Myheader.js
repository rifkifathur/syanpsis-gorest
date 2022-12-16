import React, { useState } from 'react';
import { MyheaderstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';
const items = [
    {
        label: (
            <Link href="/" rel="noopener noreferrer">
                Blog
            </Link>
        ),
        key: 'blog',
    },
    {
        label: (
            <Link href="users" rel="noopener noreferrer">
                User
            </Link>
        ),
        key: 'user',
    },
];
const Myheader = () => {
    return <Menu mode="horizontal" items={items} />;
};
export default Myheader;