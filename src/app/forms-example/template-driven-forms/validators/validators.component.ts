import { Component, OnInit } from '@angular/core';

class FormData {
  name: string;
  surname: string;
  phone: number;
  email: string;
  comments: string;

  constructor(n: string = '', s: string= '', p: number = 0, e: string= '', c: string= '') {
    this.name = n;
    this.surname = s;
    this.phone = p;
    this.email = e;
    this.comments = c;
  }
}

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {

  public formData: FormData = new FormData();

  constructor() { }

  public ngOnInit(): void {
  }

  public submitData(data: any): void {
    console.log(data)
  }

}
