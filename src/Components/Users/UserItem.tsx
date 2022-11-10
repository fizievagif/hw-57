import React from 'react';
import {User} from "../../types";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  let isActiveOrNot;

  if(user.checkbox) {
    isActiveOrNot = 'Active';
  }else{
    isActiveOrNot = 'Not active';
  }

  return (
    <div className="card mb-2">
      <div className="card-header bg-primary">
        <p className="m-0 text-white"><span className="fw-bold">Username: </span>{user.name}</p>
      </div>

      <div className="px-3 pt-2">
        <p><span className="fw-bold">E-mail: </span>{user.email}</p>
        <p><span className="fw-bold">State: </span>{isActiveOrNot}</p>
        <p><span className="fw-bold">User-role: </span>{user.role}</p>
      </div>
    </div>
  );
};

export default UserItem;