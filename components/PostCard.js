import { Avatar, Button, Card, Input } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { CommentOutlined, SendOutlined } from '@ant-design/icons';
import Comments from './Comments';


const PostCard = ({ data, users, comments }) => {
    const { Meta } = Card;

    const [openCom, setOpenCom] = useState(false);

    return (
        <>
            {Array.isArray(data) ?
                (

                    data.map((item, i) => {
                        return (
                            <>
                                <Card
                                    className='w-full md:w-[650px] my-4'
                                    hoverable
                                >
                                    <Meta
                                        avatar={<Avatar size={40}>{users[i].name.slice(0, 2)}</Avatar>}
                                        title={users[i].name}
                                    />
                                    <div className='px-2 py-4'>
                                        <h1 className='text-2xl'><strong>{item.title}</strong></h1>
                                        <span>{item.body}</span>
                                    </div>
                                    <div className='flex justify-end h-10'>
                                        <Link href={`/blog/${item.id}`}>
                                            <Button type="link" style={{ padding: 0, marginTop: '20px', fontSize: 20 }}>More</Button>
                                        </Link>
                                    </div>
                                </Card>
                            </>
                        )
                    })

                ) :
                (
                    <Card
                        className='w-full md:w-[650px] relative my-4'
                    >
                        <Meta
                            avatar={<Avatar size={40}>{users.name.slice(0, 2)}</Avatar>}
                            title={users.name}
                        // description="Condico volubilis addo. Videlicet ara aut. Adultus verus suus. Ubi admoneo vox. Defigo theatrum ascisco. Accommodo vero conscendo. Quaerat non crebro. Deludo bis verumtamen. Textilis arcus absque. Aurum adulescens asperiores. Capillus deficio aliquam. Barba qui coniuratio. Auditor et volaticus. Tempore et voro. Velut est caecus"
                        />
                        <div className='px-2 py-4'>
                            <h1 className='text-2xl'><strong>{data.title}</strong></h1>
                            <span>{data.body}</span>
                        </div>
                        <div className='flex justify-end px-8 py-4'>
                            <CommentOutlined
                                style={{ fontSize: 22 }}
                                onClick={() => setOpenCom(!openCom)}
                            />
                        </div>
                        {openCom &&
                            <>
                                <div className='flex'>
                                    <Avatar size={40}>USER</Avatar>
                                    <Input placeholder="Basic usage" className='w-[80%] mx-2' />
                                    <SendOutlined style={{ fontSize: 35 }} />
                                </div>
                                <Comments
                                    data={comments}
                                />
                            </>
                        }
                    </Card>
                )
            }
        </>
    );
};

export default PostCard;