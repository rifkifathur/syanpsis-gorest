import React from 'react';import PostCard from '../../components/PostCard';
import Mylayout from '../../components/Mylayout';

export async function getServerSideProps({ params }) {
    const resPost = await fetch(`https://gorest.co.in/public/v2/posts/${params.detailblog}`)
    const posts = await resPost.json()

    const resComment = await fetch(`https://gorest.co.in/public/v2/comments?post_id=${params.detailblog}`)
    const comments = await resComment.json()

    const resUser = await fetch(`https://gorest.co.in/public/v2/users/${params.detailblog}`)
    const users = await resUser.json()

    return {
        props: {
            posts,
            comments,
            users
        }, // will be passed to the page component as props
    }
}

const DetailBlog = ({ posts, comments, users }) => {
    console.log(comments)
    return (
        <Mylayout>
            <div className='flex justify-center'>
                <PostCard
                    data={posts}
                    comments={comments}
                    users={users}
                />
            </div>
        </Mylayout>
    );
};

export default DetailBlog;