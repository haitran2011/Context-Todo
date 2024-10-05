import React from 'react'

import ButtonToggleMode from './components/ButtonToggleMode';
import TrackerAll from './components/TrackerAll';
import TrackerCompleted from './components/TrackerCompleted';
import clsx from 'clsx';

const tabs = {
  all: 'all',
  completed: 'completed'
}

const mockTrackers = [
  { id: 1, label: 'learn javascript 1', isCompleted: false },
  { id: 2, label: 'learn javascript 2', isCompleted: true },
  { id: 3, label: 'learn javascript 3', isCompleted: true },
  { id: 4, label: 'learn javascript 4', isCompleted: true },
  { id: 5, label: 'learn javascript 5', isCompleted: false }
]

function App() {
  const [activeTab, setActiveTab] = React.useState('all');
  const [trackers, setTrackers] = React.useState(mockTrackers)

  function handleSwitchTab(tab) {
    setActiveTab(tab)
  }

  return (
    <div className='mt-4 w-[50%] mx-auto'>
      <div className='flex justify-center items-between w-full mb-4'>
        <h1 className="text-3xl font-bold dark:text-white w-full">
          React Context Tracker
        </h1>
        <ButtonToggleMode />
      </div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2 cursor-pointer" onClick={() => handleSwitchTab(tabs.all)}>
            <div 
            // inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300
              className={clsx(
                'inline-block p-4 rounded-t-lg dark:text-blue-500 dark:border-blue-500',
                activeTab === tabs.all && 'text-blue-600 border-blue-600 border-b-2'
              )}
            >
              All
            </div>
          </li>
          {/* text-blue-600 border-b-2 border-blue-600 */}
          <li className="me-2 cursor-pointer" onClick={() => handleSwitchTab(tabs.completed)}>
            <div 
            // inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300
              className={clsx(
                'inline-block p-4 rounded-t-lg dark:text-blue-500 dark:border-blue-500',
                activeTab === tabs.completed && 'text-blue-600 border-blue-600 border-b-2'
              )}
            >
              Completed
            </div>
          </li>
        </ul>
      </div>  
      
      {activeTab === tabs.all && (
        <TrackerAll trackers={trackers} />
      )}

      {activeTab === tabs.completed && (
        <TrackerCompleted trackers={trackers} />
      )}

      
      
    </div>
  )
}

export default App
