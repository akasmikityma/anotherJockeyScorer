import React ,{useState}from 'react'
import { useSetRecoilState } from 'recoil'
import { playersState } from '../store/PlayersAtom'
export default function IntputField() {
  const setAllplayers=useSetRecoilState(playersState);
  const [userInput, setuserInput] = useState('');
  const handleONchange=(e)=>{
    setuserInput(e.target.value);
  }
  const handleOnclick = () => {
    if(userInput.trim()==''){
      alert("put something in the input field")
    } else{
      setAllplayers((prevPlayers) => (
        prevPlayers ? [...prevPlayers, { name: userInput, url: "https://imgs.search.brave.com/vwimYLUDcAbT_ZWKjz9DlBVRoovzdUlB7dl-L8ZFB78/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/c2VyLXByb2ZpbGUt/ZnJvbnQtc2lkZV8x/ODcyOTktMzk1OTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc", isSelected: false, score: 0 }] : [{ name: userInput, url: "", isSelected: false, score: 0 }]
      ));  
    } 
    setuserInput('');
  }
  return (
    <div className="flex flex-row justify-center items-center border rounded-md p-3 w-full md:w-2/4 gap-2">
    <input type="text" placeholder="enter nick name" value={userInput} onChange={handleONchange} className="w-full text-white px-3 py-1 bg-transparent outline-none placeholder-white focus:outline-blue-500 focus:ring-blue-500 ring-1 ring-opacity-50" />
    <button onClick={handleOnclick} className="px-3 py-2 font-medium rounded-md bg-blue-500 text-white hover:bg-blue-700">add</button>
  </div>
  )
}
//the input field makes a player that means the player array has to be created first>>
//so onchange in the input and 