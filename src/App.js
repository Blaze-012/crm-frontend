import React from 'react';
import './App.css';
// import EntryPage from './pages/Entry/Entry.page';
import { DefaultLayout } from './Layout/DefaultLayout';
// import { Dashboard } from './pages/Dashboard/Dashboard.page';
// import { AddTicket } from './pages/new-ticket/AddTicket.page';
// import { TicketLists } from './pages/ticket-list/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page';
  
function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket/> */}
        {/* <TicketLists /> */}
        <Ticket/>
      </DefaultLayout>
    </div>
  );
}


export default App;
