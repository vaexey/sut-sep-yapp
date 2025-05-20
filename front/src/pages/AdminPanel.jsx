import React, { useState } from 'react';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'alice123', banned: false },
    { id: 2, username: 'bob_the_builder', banned: true },
    { id: 3, username: 'charlie88', banned: false },
  ]);

  const [reports, setReports] = useState([
    { id: 101, from: 'user1', content: 'This question is offensive' },
    { id: 102, from: 'user2', content: 'Spam detected here' },
  ]);

  const toggleBan = (id) => {
    setUsers((prev) => prev.map((user) => (user.id === id ? { ...user, banned: !user.banned } : user)));
  };

  const removeReport = (id) => {
    setReports((prev) => prev.filter((report) => report.id !== id));
  };

  return (
    <div className="adminPanelContainer">
      <h1 className="adminTitle">Admin Panel</h1>

      <div className="adminSection">
        <h2 className="sectionTitle">Manage Users</h2>
        {users.map((user) => (
          <div className="AdminUserItem" key={user.id}>
            <span className="username">{user.username}</span>
            <button className={user.banned ? 'unbanButton' : 'banButton'} onClick={() => toggleBan(user.id)}>
              {user.banned ? 'Unban' : 'Ban'}
            </button>
          </div>
        ))}
      </div>

      <div className="adminSection">
        <h2 className="sectionTitle">Reported Questions</h2>
        {reports.length === 0 ? (
          <p className="noReports">No reports at the moment.</p>
        ) : (
          reports.map((report) => (
            <div className="reportItem" key={report.id}>
              <p>
                <strong>From:</strong> {report.from}
              </p>
              <p>{report.content}</p>
              <button className="removeButton" onClick={() => removeReport(report.id)}>
                Remove Report
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
