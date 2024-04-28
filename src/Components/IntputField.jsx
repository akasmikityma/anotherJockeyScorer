import React from 'react'

export default function IntputField() {
  return (
    <div className="flex flex-row justify-center items-center border rounded-md p-3 w-full md:w-2/4 gap-2">
    <input type="text" placeholder="enter nick name" class="w-full px-3 py-1 bg-transparent outline-none placeholder-white focus:outline-blue-500 focus:ring-blue-500 ring-1 ring-opacity-50" />
    <button class="px-3 py-2 font-medium rounded-md bg-blue-500 text-white hover:bg-blue-700">add</button>
  </div>
  )
}
//the input field makes a player that means the player array has to be created first>>
//so onchange in the input and 