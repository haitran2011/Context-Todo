import React from 'react'
import CheckBox from './CheckBox';
import ButtonSimple from './ButtonSimple';
import { useAppContext } from '../contexts/AppContext';
import { tabs } from '../configs/tab';

function TrackerAll() {
  const { activeTab, trackers } = useAppContext();

  if(activeTab !== tabs.all) return null;

  return (
    <>
      <div className='flex items-center justify-center mt-3'>
        <input type="text" className="bg-gray-50 border mr-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please input" />
        <ButtonSimple text="Add" isPrimary />
      </div>
      <div className='mt-4'>
        {trackers.map(tracker => {
          return (
            <div key={tracker.id} className='mb-2'>
              <CheckBox tracker={tracker} />
            </div>
          )
        })}
      </div>
      <div className="text-right">
        <button type="button" className="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5">Delete All</button>
        <ButtonSimple text="Delete All" isSecondary/>
      </div>
    </>
  )
}

export default TrackerAll