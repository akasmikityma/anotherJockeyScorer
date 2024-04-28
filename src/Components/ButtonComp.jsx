import React from 'react'
import { useNavigate } from 'react-router-dom'
// import GameRoom from '../Pages/GameRoom'
// import { useNavigate } from 'react-router-dom'
import { selectedPlayers } from '../store/PlayersAtom.js';
import { useSetRecoilState } from 'recoil';
export default function ButtonComp() {
  const setAlltheselected=useSetRecoilState(selectedPlayers);
  const navigate=useNavigate();
  const handleOnclick=()=>{
     navigate('/room');
  }
 
  return (
    <div className='justify-end'>
        <button className='bg-yellow-200 text-black p-2 'onClick={handleOnclick}>Enter Game Room</button> 
    </div>
  )
}
