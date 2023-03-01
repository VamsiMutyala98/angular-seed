import * as fromUser from './user-reducer';
import {ActionReducerMap, createSelector} from '@ngrx/store';


export interface RootReducerState {
  users: fromUser.UserReducerState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  users: fromUser.UserReducer,
};

export const getUserState = (state: RootReducerState) => state.users;

export const getUserLoading = createSelector(getUserState, fromUser.getLoading);
export const getUsers = createSelector(getUserState, fromUser.getUsers);

export const getUserById = (state: RootReducerState, id: number) => {
  const users = getUsers(state);
  return users.find(user => user.id === id);
};

