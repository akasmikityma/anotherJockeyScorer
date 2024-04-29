import React from 'react'
import { useNavigate } from 'react-router-dom'
// import GameRoom from '../Pages/GameRoom'
// import { useNavigate } from 'react-router-dom'
import { selectedPlayers } from '../store/PlayersAtom.js';
import { useRecoilValue, useSetRecoilState } from 'recoil';
export default function ButtonComp() {
  const alltheSeletedplayers=useRecoilValue(selectedPlayers);
  console.log(alltheSeletedplayers)
  const navigate=useNavigate();
  const handleOnclick=()=>{
    if(alltheSeletedplayers.length<2){
      alert("select at least 2 players")
    }else{
     navigate('/room');
    }
  }
 
  return (
    <div className='justify-end'>
        <button className='bg-yellow-200 text-black p-2 'onClick={handleOnclick}>Enter Game Room</button> 
    </div>
  )
}
