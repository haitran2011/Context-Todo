import React from 'react';
import clsx from 'clsx';
import { useAppContext } from '../contexts/AppContext';

function CheckBox({ tracker }) {
  const { onCheck } = useAppContext();
  
  return (
    <div className="flex items-center">
      <input 
        id={tracker.id} 
        type="checkbox" 
        checked={tracker.completed}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
        onChange={() => onCheck(tracker.id)}
      />
      <label 
        htmlFor={tracker.id}
        className={clsx(
          `ms-2 text-sm font-medium text-gray-900 dark:text-gray-300`,
          tracker.completed && 'line-through'
        )}
        // className={`ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${tracker.completed ? 'line-through' : ''} `}
      >
        {tracker.title}
      </label>
    </div>
  )
}

export default CheckBox