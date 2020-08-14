import { Action } from "@ngrx/store";
import { User } from "../models/user";
import * as UserActions from "../actions/userlist.actions";

export function reducer(state: User[], action: UserActions.Actions) {
  switch (action.type) {
    case UserActions.ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}
