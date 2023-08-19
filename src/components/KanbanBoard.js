import React, { useState, useEffect } from 'react';
import Ticket from './Ticket';
import Header from './Header';
import { fetchTickets } from '../utils/api';




const getPriorityLabel = (key) => {
    switch (key) {
      case '4':
        return 'Urgent';
      case '3':
        return 'High';
      case '2':
        return 'Medium';
      case '1':
        return 'Low';
      case '0':
        return 'No Priority';
      default:
        return key;
    }
  };  


const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');
  

  useEffect(() => {
    fetchTickets().then((data) => setTickets(data.tickets));
  }, []);

  const groupedTickets = {};
  tickets.forEach((ticket) => {
    const key = grouping === 'user' ? ticket.userId : ticket[grouping];
    if (!groupedTickets[key]) {
      groupedTickets[key] = [];
    }
    groupedTickets[key].push(ticket);
  });

  const sortedGroupKeys = Object.keys(groupedTickets).sort();

  // Sort tickets based on the selected sorting option
  const sortedTickets = sortedGroupKeys.reduce((sorted, key) => {
    const ticketsToSort = groupedTickets[key];
    const sortedByPriority = sorting === 'priority'
      ? ticketsToSort.sort((a, b) => b.priority - a.priority)
      : ticketsToSort.sort((a, b) => a.title.localeCompare(b.title));

    return { ...sorted, [key]: sortedByPriority };
  }, {});

  return (
    <div className="kanban-board">
      <Header onGroupChange={setGrouping} onSortChange={setSorting} />
      {sortedGroupKeys.map((key) => (
        <div key={key}>
          <h2>{getPriorityLabel(key)}<span class="ticket-count">{sortedTickets[key].length}</span></h2>
          <div className="ticket-group">
            {sortedTickets[key].map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
