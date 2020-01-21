import React from "react";

const Friends = ({ friends, edit, deleteFriend }) => {
  return (
    <div>
      {friends.map(friend => {
        return (
          <div key={friend.id}>
            <p>Friend Name: {friend.name}</p>
            <p>Friend Age: {friend.age}</p>
            <p>Friend Email: {friend.email}</p>
            <button onClick={() => edit(friend.id, friend)}>Edit</button>
            <button onClick={() => deleteFriend(friend.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
