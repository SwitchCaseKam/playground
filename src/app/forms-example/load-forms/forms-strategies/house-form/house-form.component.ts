import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent implements OnInit, OnDestroy {

  public houseForm = new FormGroup({
    size: new FormControl(''),
    number: new FormControl(''),
    value: new FormControl('')
  });

  constructor() { }

  public ngOnInit(): void {
    console.log('HouseFormComponent on Init');
  }

  public ngOnDestroy(): void {
    console.log('HouseFormComponent on Destroy');
  }
}
