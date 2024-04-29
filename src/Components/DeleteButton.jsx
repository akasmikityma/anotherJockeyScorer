import React from 'react'
import { useSetRecoilState } from 'recoil'
import { playersState } from '../store/PlayersAtom'

export default function DeleteButton({name}) {
    const setAllplayers=useSetRecoilState(playersState);
    const handleDelete = () => {
        setAllplayers((prevPlayers) => {
          const filteredPlayers = prevPlayers.filter((player) => player.name !== name);
          // Check if any players remain after filtering
          if (filteredPlayers.length > 0) {
            return filteredPlayers; // Update state only if players remain
          } else {
            return prevPlayers; // Otherwise, keep the original state
          }
        });
      };
  return (
    <div>
        <button onClick={handleDelete}>delete</button>
    </div>
  )
}
