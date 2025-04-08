import React from 'react'
import list from '../data'
import Card from './Card'
export default function Home({handleClick}) {
  return (
    <>
    <div className="flex flex-wrap justify-center gap-6 p-4">
    {list.map((data)=>(
        <Card data={data} key={data.id} handleClick={handleClick}/>
    ))}
    </div>
    </>
  )
}
