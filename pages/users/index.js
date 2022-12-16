import Head from 'next/head';
import Mylayout from '../../components/Mylayout';
import Mytable from '../../components/Mytable';

export async function getServerSideProps() {
  const res = await fetch(`https://gorest.co.in/public/v2/users`)
  const users = await res.json()

  return {
    props: {
      users
    }, // will be passed to the page component as props
  }
}

export default function Users({ users }) {
  console.log(users)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Mylayout>
        <div className='bg-white p-8 my-8'>
          <Mytable data={users}/>
        </div>
      </Mylayout>
    </>
  )
}
