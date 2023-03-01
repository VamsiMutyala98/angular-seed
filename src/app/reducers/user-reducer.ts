import {User} from '../models/user';
import {Action} from '../actions';
import {USER_ADD, USER_DELETE, USER_LIST_ERROR, USER_LIST_REQUEST, USER_UPDATE} from '../actions/user-action';

export interface UserReducerState {
  loading: boolean;
  error: boolean;
  users: User[];
}

const initialState: UserReducerState = {
  loading: false,
  error: false,
  users: [],
};

export function UserReducer(state = initialState, action: Action): UserReducerState {
  switch (action.type) {
    case USER_LIST_REQUEST: {
      return {...state, loading: !state.loading};
    }
    case USER_ADD: {
      const newUser = action.payload.data;
      const lastId = state.users.length ? state.users[state.users.length - 1].id : 0
      const _users = [...state.users, {...newUser, id: lastId + 1}];
      return {...state, loading: false, users: _users};

    }
    case USER_UPDATE: {
      const user = action.payload.data;
      const _users = [...state.users];
      const index = _users.findIndex(user => user.id === action.payload.data.id);
      _users[index] = {...user};
      return {...state, users: _users, loading: false};
    }
    case USER_DELETE: {
      const id = action.payload.id;
      const _users = [...state.users];
      const index = _users.findIndex(user => user.id === id);
      if (index > -1) {
        _users.splice(index, 1);
      }
      return {...state, users: _users, loading: false};
    }
    default: {
      return state;
    }
  }
}

// selectors
export const getLoading = (state: UserReducerState) => state.loading;
export const getUsers = (state: UserReducerState) => state.users;

