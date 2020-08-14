import { User } from "../models/user";
import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";

export const ADD_USER = "Add User";

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) {}
}

export type Actions = AddUser;
