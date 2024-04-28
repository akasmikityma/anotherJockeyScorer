import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import { RecoilRoot } from 'recoil';
import GameRoom from './Pages/GameRoom';
export default function App() {
  return (
   <div>
    <RecoilRoot>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room' element={<GameRoom/>}/>
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
   </div>
  )
}
