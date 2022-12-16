import React from 'react';
import { Layout } from 'antd';
import Footer from '../components/Footer';
import Myheader from './Myheader';

const Mylayout = ({children}) => {
    const { Header, Content } = Layout;
    return (
        <Layout className="layout">
        <Header style={{backgroundColor:'#fff'}}><Myheader/></Header>
        <Content className='p-2 bg-black flex flex-col justify-center items-center h-[100%]'>
          {children}
        </Content>
        <Footer>
          Synapsis
        </Footer>
      </Layout>
    );
};

export default Mylayout;