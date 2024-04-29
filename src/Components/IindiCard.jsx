import React from 'react'
import DeleteButton from './DeleteButton';

export default function IindiCard({imgsrc,name,isSelected,onClick}) {
  const selectedClass = isSelected ? 'bg-red-500' : 'bg-blue-300';
  return (
    <div className={`flex flex-col gap-2 p-4 border rounded-md  w-70 justify-center items-center shadow-lg shadow-black ${selectedClass}`} onClick={onClick}>
        <img src={imgsrc} alt="" className='w-64 h-60 md:w-96 md:h-96'/>
        <h1>{name}</h1>
        <DeleteButton name={name}/>
    </div>
  )
  
}
