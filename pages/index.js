import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Home({ data }) {
  console.log(data)
  // const [data, setData] = useState([]);

  // async function dataFun() {
  //   const res = await axios.get('/api')
  //   setData(res.data)
  // }
  // useEffect(() => { dataFun() }, []);

  if (!data) return (<><h1>데이터 안도착</h1></>)
  return (
    <>
      <h1>데이터 도착</h1>
      {
        data.map((res) => {
          return <p key={res.id}>{res.id}. {res.name} : {res.date} </p>
        })
      }
    </>
  )
}

// export async function getServerSideProps() {
//   const res = await axios.get(`http://localhost:3000/api`)
//   const data = res.data

//   return { props: { data } }
// }

export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:3000/api`)
  const data = res.data

  return { props: { data } }
}
