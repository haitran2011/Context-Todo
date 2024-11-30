import clsx from 'clsx'
import React from 'react'

// primary
// secondary
// gray
// empty

function ButtonSimple({ text, isPrimary, isSecondary, isGray }) {
  return (
    <button 
      type="button" 
      className={clsx(
        'font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ',
        isPrimary && 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
        isSecondary && 'text-white bg-red-800 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
        isGray && 'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
      )}
    >
      {text}
    </button>
  )
}

export default ButtonSimple