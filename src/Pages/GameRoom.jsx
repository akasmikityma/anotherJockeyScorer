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
   <div className='p-3  bg-black'>
     <div className='flex flex-row justify-center items-center min-h-screen'>
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