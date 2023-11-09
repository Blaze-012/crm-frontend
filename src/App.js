import React from 'react';
import './App.css';
import EntryPage from './pages/Entry/Entry.page';
import { DefaultLayout } from './Layout/DefaultLayout';
import { Dashboard } from './pages/Dashboard/Dashboard.page';
  
function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}


export default App;
