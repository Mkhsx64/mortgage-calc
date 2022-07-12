import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="container min-h-screen flex justify-center w-full mx-auto">
        <div className="w-full p-6 bg-blue-100 dark:bg-slate-600">
          <div className="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700 dark:text-white dark:border-red-500">Mortgage Calculator</div>
          <div className="p-2 text-center text-lg text-gray-700 dark:text-white">Lightweight API based mortgage calculator.</div>
          <form className="flex flex-row justify-center">
            <div className="flex flex-col">
            <label htmlFor="input1" className="m-2">testing</label>
            <input id="input1" typeof='number' className="m-2 text-center hover:bg-blue-200" placeholder="test"></input>
            <label htmlFor="input2" className="m-2">testing</label>
            <input id="input2" typeof='number' className="m-2 text-center hover:bg-blue-200" placeholder="test"></input>
            <label htmlFor="input3" className="m-2">testing</label>
            <input id="input3" className="m-2 text-center hover:bg-blue-200" placeholder="test"></input>
            </div>
            <div className="flex flex-col">
            <label htmlFor="input4" className="m-2">testing</label>
            <input id="input4"  className="m-2 text-center hover:bg-blue-200" placeholder="test"></input>
            <label htmlFor="input5" className="m-2">testing</label>
            <input id="input5"  className="m-2 text-center hover:bg-blue-200" placeholder="test"></input>
            <label htmlFor="input6" className="m-2">testing</label>
            <input id="input6"  className="m-2 text-center hover:bg-blue-200" placeholder="test"></input>
            </div>
          </form>
          <div className="flex justify-center m-10">
          <button className="bg-slate-500  p-2 rounded text-white border-b-2 hover:bg-slate-300">Any Clickers?</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
