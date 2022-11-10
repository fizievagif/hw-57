import React, {useState} from 'react';
import {User, UserMutation} from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    checkbox: false,
    role: '',
  });

  const onUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setUser(prev => ({...prev, [name]: value}));
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setUser(prev => ({...prev, [e.target.name]: true}));
    } else {
      setUser(prev => ({...prev, [e.target.name]: false}));
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit ({
      id: Math.random().toString(),
      ...user,
    });
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
      <div className="form-group">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            onChange={onUserChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            onChange={onUserChange}
            required
          />
        </div>

        <div className="form-control mt-3">
          <label htmlFor="checkbox">Active</label>
          <input
            id="checkbox"
            name="checkbox"
            type="checkbox"
            className="mx-1"
            onChange={onCheckboxChange}
          />
        </div>

        <div>
          <label htmlFor="role">Role</label>
          <select name="role" id="role" className="form-control" onChange={onUserChange}>
            <option disabled value="">Choose a role</option>
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-3 px-3">Add</button>
      </div>
    </form>
  );
};

export default UserForm;