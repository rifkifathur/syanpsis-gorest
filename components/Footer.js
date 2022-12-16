import React from 'react';
import { Divider, Layout } from 'antd';

const Footer = ({ children }) => {
    const { Footer } = Layout;
    return (
        <Footer
            className=''
            style={{
                backgroundColor: '#000',
                textAlign: 'center',
                color: '#fff'
            }}
        >
            <Divider className='bg-white'/>
            {children}
        </Footer>
    );
};

export default Footer;