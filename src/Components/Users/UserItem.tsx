import React from 'react';
import {User} from "../../types";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-2">
      <div className="card-header">
        <span className="fw-bold">User-role: {user.role}</span>
      </div>
      <div className="card-body">
        <p>Name: {user.name}</p>
        <p>E-mail: {user.email}</p>
        <span>Status: {user.checkbox ? 'Active' : 'Not Active'}</span>
      </div>
    </div>
  );
};

export default UserItem;