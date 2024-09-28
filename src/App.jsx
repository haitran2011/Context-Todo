import { useState } from 'react'

function App() {
  return (
    <>
      <div className='text-center'>
        <h1 className="text-3xl font-bold">
          React Context Tracker
        </h1>
        <div className="sm:container mx-auto">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px">
                <li className="me-2">
                    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
                </li>
                <li className="me-2">
                    <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Dashboard</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
