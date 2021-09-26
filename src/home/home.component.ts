import { Component, OnInit } from '@angular/core';
import { UserForm } from './user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  addressTypeList = ['House', 'Unit', 'Apartment'];

  model = new UserForm("John", 52, "12 Lonsdale street");

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser() {
    this.model = new UserForm("John", 52, "12 Lonsdale street");
  }

}