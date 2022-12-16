import React from 'react';
import { Avatar } from 'antd';

const Comments = ({ data }) => {
    console.log(data)
    return (
        <>
            {data.map(item => {
                return (
                    <>
                        <div className='flex my-8'>
                            <Avatar size={36}>USER</Avatar>
                            <div className='px-2'>
                                <h1 className='text-lg'><strong>{item.name}</strong></h1>
                                <p>{item.body}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    );
};

export default Comments;