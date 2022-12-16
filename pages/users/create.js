import React from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import Mylayout from '../../components/Mylayout';
import { useRouter } from 'next/router';
const Create = () => {
    const layout = {
        labelCol: {
            xl: { span: 8 },
            md: { span: 4 },
            sm: { span: 4 }
        },
        wrapperCol: {
            xl: { span: 24 },
            lg: { span: 24 },
            md: { span: 24 },
            sm: { span: 24 }
        },
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const router = useRouter();
    const onFinish = async (values) => {
        
        const request = await fetch(`https://gorest.co.in/public/v2/users`, {
            method: 'POST',
            body: JSON.stringify(values.user),
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer 8adaa71981b29d1bf84f5ef108b60adbcd03e4410f16fca829ca1a2fe78c1c58'
              }
        });
        const res = await request.json();
        if(res){
            router.push('/users/'+res.id);
        }
        
    };
    const { Option } = Select;
    return (
        <Mylayout>
            <div className='bg-white flex justify-center py-8 px-16 text-left'>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name={['user', 'name']}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'gender']}
                        label="Gender"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select"
                            // onChange={onGenderChange}
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={['user', 'status']}
                        label="Status"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select"
                            // onChange={onGenderChange}
                            allowClear
                        >
                            <Option value="active">active</Option>
                            <Option value="inactive">inactive</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                        }}
                    >
                        <Button htmlType="submit" className='bg-rose-400'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Mylayout>
    );
};

export default Create;