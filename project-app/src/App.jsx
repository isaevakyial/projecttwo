import React, { useState } from 'react';
import { users } from './components/data/usersData';
import UserCard from './components/UserCard';
import Modal from './components/Modal';

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleCardClick = (userId) => {
    setSelectedUserId(userId);
  };

  const handleCloseModal = () => {
    setSelectedUserId(null);
  };

  return (
    <div>
      <div className="user-cards">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onCardClick={handleCardClick} />
        ))}
      </div>

      {selectedUserId && (
        <Modal userId={selectedUserId} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
