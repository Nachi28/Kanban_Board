import React from 'react';

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      
      <div className="ticket-details">
        <div className="ticket-id">{ticket.id}</div>
        {/* <div className="ticket-priority">Priority: {ticket.priority}</div> */}
        {/* <div className="ticket-user">Assigned to: {ticket.userId}</div> */}
        {/* <div className="ticket-status">Status: {ticket.status}</div> */}
        <input type="checkbox" id="scales" name="scales" />
        <label for="scales"> <span className="ticket-title">{ticket.title}</span></label>
       
      </div>
      
      {<div className="ticket-tag"> {ticket.tag}</div>}
    </div>
  );
};

export default Ticket;
