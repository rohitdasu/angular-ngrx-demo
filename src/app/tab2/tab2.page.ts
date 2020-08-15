import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.state";
import * as UserAction from "../actions/userlist.actions";
import { User } from "../models/user";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})

export class Tab2Page {
  user = { first_name: "", last_name: "", email: "" };
  constructor(private store: Store<AppState>) {}

  addUser() {
    let fname = this.user.first_name,
      lname = this.user.last_name,
      email = this.user.email;
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
