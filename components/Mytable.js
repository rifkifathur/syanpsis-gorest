import { Space, Table, Tag } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Mytable = ({ data }) => {
  //router
  const router = useRouter();

  //refresh data
  const refreshData = () => {
    router.replace(router.asPath);
  }

  //function "deletePost"
  const deletePost = async (id) => {

    const request = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      method: 'DELETE',
      headers : {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer 8adaa71981b29d1bf84f5ef108b60adbcd03e4410f16fca829ca1a2fe78c1c58'
      }
    });
    await request;
    //refresh data
    refreshData();

  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <Link href={'/users/' + record.id}>{record.name}</Link>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link href={'/users/' + record.id + '/edit'}>Edit</Link>
          <a onClick={()=>deletePost(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];


  return (
    <Table columns={columns} dataSource={data} pagination={{
      pageSize: 5,
    }} />
  )
}

export default Mytable;