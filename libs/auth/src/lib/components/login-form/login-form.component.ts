import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Authenticate } from '@demo-app/data-models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() submit = new EventEmitter<Authenticate>();

  constructor() {}

  ngOnInit(): void {}

  login(authenticate: Authenticate) {
    this.submit.emit(authenticate);
  }
}
