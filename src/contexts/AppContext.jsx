import React from 'react';

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [activeTab, setActiveTab] = React.useState('all');
  const [trackers, setTrackers] = React.useState([]);

  React.useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=5&_page=1')
    //   .then(json => json.json())
    //   .then(data => setTrackers(data)) 

    // async/await
    async function fetchTrackers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5&_page=1');
      const data = await res.json();
      setTrackers(data);
    };
    fetchTrackers();
  }, [])

  function handleSwitchTab(tab) {
    setActiveTab(tab)
  }

  function onCheck(trackerId) {
    const newTrackers = [...trackers];

    const trackerIndex = newTrackers.findIndex(item => item.id === trackerId);
    if (trackerIndex === -1) return;

    newTrackers[trackerIndex].completed = !newTrackers[trackerIndex].completed;
    setTrackers(newTrackers);
  }

  return (
    <AppContext.Provider
      value={{
        // states
        trackers,
        activeTab,
        // actions
        handleSwitchTab,
        onCheck
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => React.useContext(AppContext);