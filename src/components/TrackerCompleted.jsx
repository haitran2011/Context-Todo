import React from 'react';
import CheckBox from './CheckBox';
import ButtonSimple from './ButtonSimple';
import { useAppContext } from '../contexts/AppContext';
import { tabs } from '../configs/tab';

function TrackerCompleted() {
  const { activeTab, trackers } = useAppContext();

  const trackersFiltered = React.useMemo(() => {
    return trackers.filter(item => item.completed)
  }, [trackers]);


  if(activeTab !== tabs.completed) return null;

  return (
    <>
      <div className='flex items-center justify-center mt-3'>
        <input type="text" className="bg-gray-50 border mr-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please input" />
        <ButtonSimple text="Search" isGray />
      </div>
      <div className='mt-4'>
        {trackersFiltered.map(tracker => {
          return (
            <div key={tracker.id} className='mb-2'>
              <CheckBox tracker={tracker} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TrackerCompleted