import React from 'react'
import list from '../../public/list.json'
import Cards from '../components/Card'
import { Link } from 'react-router-dom'


function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 text-center item-center justify-center'>
          <h1 className='text-2xl md:text-4xl'>We-re delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
          <p className='mt-12'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ipsa, nulla quisquam repellat impedit ipsum cum nisi nostrum ab iusto. Nemo soluta dolor itaque a modi, ducimus eos officia impedit labore, veritatis fugiat porro pariatur eius, explicabo harum at quo ab ipsa. Iusto molestias deleniti tempora, neque non quis, cupiditate minima ipsam aspernatur esse, rem laboriosam explicabo quisquam saepe ipsum.
          </p>
          <Link to="/">
            <button className='my-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
