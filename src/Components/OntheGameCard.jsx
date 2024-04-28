import React from 'react'
import { playersState } from '../store/PlayersAtom.js'
import { useRecoilValue } from 'recoil'

export default function OntheGameCard({name}) {
    const allthePlayers=useRecoilValue(playersState);
    const cuurentPlayer=allthePlayers.find((x)=>x.name==name);
    console.log(cuurentPlayer);
  return (
    <div className={`flex flex-col gap-2 p-4 border rounded-md  w-70 justify-center items-center shadow-lg shadow-black`}>
        <img src={cuurentPlayer.url} alt="" className='w-64 h-60 md:w-96 md:h-96'/>
        <h1>{cuurentPlayer.name}</h1>
    </div>
  )
}
