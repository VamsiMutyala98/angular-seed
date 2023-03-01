export interface User {
  id: number;
  name: string;
  email: string;
}

export enum EUSER_ACTIONS {
  ADD_USER = 'Add User',
  UPDATE_USER = 'Update User',
  DELETE_USER = 'Delete User'
}