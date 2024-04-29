import React from 'react'
import { selectedPlayers } from '../store/PlayersAtom.js'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom';
import OntheGameCard from '../Components/OntheGameCard.jsx';
export default function GameRoom() {
    
    const alltheSeletedplayers=useRecoilValue(selectedPlayers);
    const setAlltheselected=useSetRecoilState(selectedPlayers);
    const navigate=useNavigate()
    const gobackHandle=()=>{
        setAlltheselected([]);
        navigate('/');
      }
      console.log(alltheSeletedplayers)

  return (
   <div className='p-6 flex flex-col justify-center bg-black min-h-screen gap-6'>
     <div className='grid grid-rows md:grid-cols-2 gap-4 justify-center items-cente px-14'>
        {alltheSeletedplayers&&alltheSeletedplayers.map((name)=>(
          <OntheGameCard key={name} name={name}/>
        ))}
    </div> 
        <div className='flex justify-center'>
        <button className='bg-yellow-200 text-black p-2 ' onClick={gobackHandle}>go back</button>
        </div>
   </div>
  )
}
//i have the alltheselected_names .. if i can traverse the array and pass the names as param to the atomfamily
//it gives me the atoms 