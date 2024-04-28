import React from 'react'
import IindiCard from './IindiCard';
// import { plerysdata } from '../store/Src.js';
import { playersState, selectedPlayers } from '../store/PlayersAtom.js';
import { useRecoilValue, useSetRecoilState } from 'recoil'; 
export default function CardsComp() {
  const playersDatathisTime=useRecoilValue(playersState);
  const setSelectedPLayers=useSetRecoilState(selectedPlayers);
  const alltheSelected=useRecoilValue(selectedPlayers);
  const handleCardClick = (Player_name) => {
    console.log("janiina ki hovhe")
    setSelectedPLayers((prevSelected) => {
      const isSelected = prevSelected.includes(Player_name); // Check if already selected
      return isSelected
        ? prevSelected.filter((id) => id !== Player_name) // Remove if selected
        : [...prevSelected, Player_name]; // Add if not selected
    });
    console.log(alltheSelected)
  };
  return (
    <div className='grid  grid-rows md:grid-cols-3 gap-6 p-8 bg-blue-950 select:bg-red-200'>
      {playersDatathisTime&&playersDatathisTime.map((player)=>(
        <IindiCard key={player.url} imgsrc={player.url} name={player.name}
        isSelected={alltheSelected.includes(player.name)} // Check by name
        onClick={() => handleCardClick(player.name)}/>
      ))}
    </div>
  )
  
}
