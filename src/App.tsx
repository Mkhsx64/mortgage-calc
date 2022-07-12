import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full p-6 bg-blue-100 dark:bg-slate-600">
          <div className="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700 dark:text-white border-red-500">Mortgage Calculator</div>
          <div className="p-2 text-center text-lg text-gray-700 dark:text-white">Lightweight API based mortgage calculator.</div>
          <label htmlFor="input1">testing</label>  
            <div className="flex justify-between flex-wrap p-2">
            <input id="input1" className="m-2 text-center hover:bg-blue-200" placeholder="test"></input>
            <input id="input2"className="m-2 text-center hover:bg-blue-200" placeholder="test"></input>
            <input className="m-2 text-center hover:bg-blue-200" placeholder="test"></input>
            <input className="m-2 text-center hover:bg-blue-200" placeholder="test"></input>
            <input className="m-2 text-center hover:bg-blue-200" placeholder="test"></input>
            <input className="m-2 text-center hover:bg-blue-200" placeholder="test"></input>
          </div>
        </div>
        <div className="flex flex-row p-3 justify-center">
          <button className="bg-slate-500  p-2 rounded text-white border-b-2 hover:bg-slate-300">Any Clickers?</button>
        </div>
      </div>
    </>
  );
}

export default App;
