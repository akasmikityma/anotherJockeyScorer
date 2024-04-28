import React from 'react'
import IntputField from '../Components/IntputField'
import CardsComp from '../Components/CardsComp'
import Pick from '../Components/Pick'
import ButtonComp from '../Components/ButtonComp'
export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center bg-black p-3 min-h-screen gap-3'>
        <IntputField/>
        <Pick label={"You can pick these legends"}/>
        <CardsComp/>
        <ButtonComp/>
    </div>
  )
}
