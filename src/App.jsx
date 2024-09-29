import { useState } from 'react'

function App() {
  return (
    <div className='mt-4 w-[50%] mx-auto'>
      <div className='flex justify-center items-between w-full mb-4'>
        <h1 className="text-3xl font-bold dark:text-white w-full">
          React Context Tracker
        </h1>
        <button data-tooltip-target="button-icon-only-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" className="flex items-center w-9 h-9 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          <svg data-toggle-icon="moon" className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
          </svg>
          <svg data-toggle-icon="sun" className="w-3.5 h-3.5 hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
          </svg>
          <span className="sr-only">Toggle dark/light mode</span>
        </button>
      </div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">All</div>
            </li>
            <li className="me-2">
              <div className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Completed</div>
            </li>
        </ul>
      </div>

      <div className='flex items-center justify-center mt-3'>
        <input type="text" className="bg-gray-50 border mr-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please input" />
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
      </div>

      <div className='mt-4'>
        <div className="flex items-center mb-2">
          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Learn javascript</label>
        </div>
        <div className="flex items-center">
          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Learn javascript</label>
        </div>
      </div>

      <div className="text-right">
        <button type="button" className="focus:outline-none text-white bg-red-800 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete All</button>
      </div>
    </div>
  )
}

export default App
