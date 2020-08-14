import { Component } from "@angular/core";

import { Store } from "@ngrx/store";
import { User } from "../models/user";
import { AppState } from "../state/app.state";
import * as UserAction from "../actions/userlist.actions";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  constructor(private store: Store<AppState>) {}

  addUser() {
    let fname = "Rohit",
      lname = "Dasu",
      email = "Rohit@yopmail.com";
    this.store.dispatch(
      new UserAction.AddUser({
        first_name: fname,
        last_name: lname,
        email: email,
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
      })
    );
  }
}
