import React from 'react'

import ButtonToggleMode from './components/ButtonToggleMode';
import TrackerAll from './components/TrackerAll';
import TrackerCompleted from './components/TrackerCompleted';
import Tabs from './components/Tabs';


function App() {
  return (
    <div className='mt-4 w-[50%] mx-auto'>
      <div className='flex justify-center items-between w-full mb-4'>
        <h1 className="text-3xl font-bold dark:text-white w-full">
          React Context Tracker
        </h1>
        <ButtonToggleMode />
      </div>

      <Tabs />

      <TrackerAll />

      <TrackerCompleted />

    </div>
  )
}

export default App
