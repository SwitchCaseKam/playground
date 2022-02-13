import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

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
      surname: new FormControl('', {
        validators: [this.checkInputCorrectness()]
      }),
      address: this.formBuilder.group({
        city: new FormControl(''),
        houseNumber: new FormControl(''),
        postalCode: new FormControl(''),
      })
    });
  }

  private checkInputCorrectness(requiredString: string = 'cki'): ValidatorFn {
    return (control: AbstractControl) => {
      if(control.value?.toLowerCase().includes(requiredString)) {
        return null;
      } else {
        control.setErrors({invalidContent: true});
        return {invalidContent: true};
      }
    }
  }


}
