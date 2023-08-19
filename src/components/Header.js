import React from 'react';

const Header = ({ onGroupChange, onSortChange }) => {
  const handleGroupChange = (event) => {
    onGroupChange(event.target.value);
  };

  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="header">
      
      <div>
        Grouping:
        <select className="option-select" onChange={handleGroupChange}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        Sort by:
        <select className="option-select" onChange={handleSortChange}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
