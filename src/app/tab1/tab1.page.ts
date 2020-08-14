import { Component } from "@angular/core";

import { Observable } from "rxjs";
import { Action, Store } from "@ngrx/store";
import { User } from "../models/user";
import { AppState } from "../state/app.state";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  users: Observable<User[]>;
  constructor(private store: Store<AppState>) {
    this.users = store.select("users");
    console.log(this.users);
  }
}
