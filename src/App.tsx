import React, {useState} from 'react';
import UserForm from "./Components/UserForm/UserForm";
import Users from "./Components/Users/Users";
import {User} from "./types";

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'Egoistnedlyavseh', email: 'zeus123@mail.ru', checkbox: false, role: 'User'},
    {id: '2', name: 'V.A.G', email: 'slardar321@mail.ru', checkbox: true, role: 'Admin'},
  ]);

  const addUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser]);
  };

  return (
    <div className="container-fluid">
      <div className="row mt-2">
        <div className="col">
          <UserForm onSubmit={addUser}/>
        </div>
        <div className="col">
          <Users users={users}/>
        </div>
      </div>
    </div>
  );
};

export default App;
