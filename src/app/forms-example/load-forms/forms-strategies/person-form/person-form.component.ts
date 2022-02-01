import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit, OnDestroy {

  public form: FormGroup = new FormGroup({}); 

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    console.log('PersonFormComponent on Init');
    this.form  = this.createForm();
  }

  public ngOnDestroy(): void {
    console.log('PersonFormComponent on Destroy');
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl(''),
      surname: new FormControl(''),
      address: this.formBuilder.group({
        city: new FormControl(''),
        houseNumber: new FormControl(''),
        postalCode: new FormControl(''),
      })
    });
  }


}
