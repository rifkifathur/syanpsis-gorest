import { Divider } from 'antd';
import React from 'react';
import Mylayout from '../../../components/Mylayout';

export async function getServerSideProps({ params }) {

    const resUser = await fetch(`https://gorest.co.in/public/v2/users/${params.user}`, {
        method: 'GET',
        headers : {
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer 8adaa71981b29d1bf84f5ef108b60adbcd03e4410f16fca829ca1a2fe78c1c58'
        }
      });
    const user = await resUser.json()
    
    return {
        props: {
            user
        }, // will be passed to the page component as props
    }
}

const DetailUser = ({user}) => {
    return (
        <Mylayout>
            <div className='bg-white w-[50%] flex flex-col p-8 my-8'>
                <div className='flex justify-between'>
                    <span>Name</span>
                    <span>{user.name}</span>
                </div>
                <Divider style={{backgroundColor:'black'}}/>
                <div className='flex justify-between'>
                    <span>Email</span>
                    <span>{user.email}</span>
                </div>
                <Divider style={{backgroundColor:'black'}}/>
                <div className='flex justify-between'>
                    <span>Gender</span>
                    <span>{user.gender}</span>
                </div>
                <Divider style={{backgroundColor:'black'}}/>
                <div className='flex justify-between'>
                    <span>Status</span>
                    <span>{user.status}</span>
                </div>
                <Divider style={{backgroundColor:'black'}}/>
            </div>
        </Mylayout>
    );
};

export default DetailUser;