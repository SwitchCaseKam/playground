import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit, OnDestroy {

  public carForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    console.log('CarFormComponent on Init');
    this.carForm = this.createForm();
  }

  public ngOnDestroy(): void {
    console.log('CarFormComponent on Destroy');
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      model: [''],
      productionYear: [''],
      color: [''],
      engine: [''],
      price: ['']
    });
  }


}
