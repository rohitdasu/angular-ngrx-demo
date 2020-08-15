import { Action } from "@ngrx/store";
import { User } from "../models/user";
import * as UserActions from "../actions/userlist.actions";

const initialState = [
  {
    first_name: "Rahul",
    last_name: "Dasu",
    email: "rahul@yopmail.com",
    avatar: "www.google.com",
  },
  {
    first_name: "Rohit",
    last_name: "Dasu",
    email: "rohit@yopmail.com",
    avatar: "www.google.com",
  },
];

export function reducer(
  state: User[] = initialState,
  action: UserActions.Actions
) {
  switch (action.type) {
    case UserActions.ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}
