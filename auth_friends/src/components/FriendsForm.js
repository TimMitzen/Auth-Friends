import React, { useState, useEffect } from "react";
import axios from "axios";
import AxiosWithAuth from "../utils/axiosWithAuth";
import Friends from "./Friends";

const FriendsForm = () => {
  const [friends, setFriends] = useState([]);
  const [newFriends, setNewFriends] = useState({
    name: "",
    age: "",
    email: ""
  });
  const resetForm =() =>{
     setNewFriends({
      name:'',
      age:'',
      email:''
     })
        
     
  }
  const addFriend = event => {
    event.preventDefault();
    AxiosWithAuth()
      .post("friends", newFriends)
      .then(response => {})

      .catch(error => console.log(error));
      resetForm();
  };

  const handleChange = event => {
    setNewFriends({ ...newFriends, [event.target.name]: event.target.value });
    
  };
  const edit = (id, friend) => {
    AxiosWithAuth()
      .put(`/friends/${friend.id}`, newFriends)
      .then(response => {})
      .catch(error => console.log(error));
  };
  const deleteFriend = id => {
    AxiosWithAuth().delete(`friends/${id}`);
  };

  useEffect(() => {
    AxiosWithAuth()
      .get("/friends")
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div>
        <form onSubmit={addFriend}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Name"
            value={newFriends.name}
          />
          <input
            type="text"
            name="age"
            onChange={handleChange}
            placeholder="Age"
            value={newFriends.age}
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={newFriends.email}
          />
          <button type="submit">Add Friend</button>
        </form>
      </div>

      <div>
        <Friends edit={edit} deleteFriend={deleteFriend} friends={friends} />
      </div>
    </>
  );
};

export default FriendsForm;
