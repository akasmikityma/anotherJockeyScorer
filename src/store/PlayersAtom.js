//suppose there is already a array that has the 
/* player1={
    name:"something",
    url:"something",\
    score:0
}
*/

import { plerysdata } from "./Src.js"
import { atom,atomFamily } from "recoil"
export const playersState=atom({
    key:"theInitialArray",
    default:plerysdata
})
export const playersfamily=atomFamily({
    key:"playersJockey",
    get:name=>({get})=>{
        const players=get(playersState);
       players.find((player)=>{
        return player.name==name;
       })
    }
})
export const selectedPlayers=atom({
    key:"selectedPlayers",
    default:[]
})