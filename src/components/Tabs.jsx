import React from 'react';
import clsx from 'clsx';
import { useAppContext } from '../contexts/AppContext';

const tabs = {
  all: 'all',
  completed: 'completed'
}

function Tabs() {
  const { activeTab, handleSwitchTab } = useAppContext();

  return (
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
  )
}

export default Tabs