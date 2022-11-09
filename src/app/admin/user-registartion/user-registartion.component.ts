import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registartion',
  templateUrl: './user-registartion.component.html',
  styleUrls: ['./user-registartion.component.scss']
})
export class UserRegistartionComponent implements OnInit {
  bsValue = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
