import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { Action, Store } from "@ngrx/store";
import { User } from "../models/user";
import { AppState } from "../state/app.state";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  users: Observable<User[]>;
  constructor(private store: Store<AppState>) {
    this.users = this.store.select("users");
  }
  ngOnInit() {}
}
