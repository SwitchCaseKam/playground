import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-own-validators',
  templateUrl: './own-validators.component.html',
  styleUrls: ['./own-validators.component.css']
})
export class OwnValidatorsComponent implements OnInit {

  public form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.form = this.createForm();
    this.subscribeToNameChanges();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', {
        validators: [Validators.minLength(3), Validators.required, this.checkInputCorrectness('kam')]
      }],
      surname: ['', {
        validators: [Validators.minLength(3), Validators.required, this.checkInputCorrectness('cki')]
      }],
      phone: ['', {
          validators: [Validators.minLength(9), Validators.required]
      }],
      email: ['', {
        validators: [Validators.email, Validators.required]
      }],
      visitDate: [''],
      comments: ['']
    })
  }

  // custom validator
  private checkInputCorrectness(requiredString: string): ValidatorFn {
    return (control: AbstractControl) => {
      if(control.value?.toLowerCase().includes(requiredString)) {
        return null;
      } else {
        control.setErrors({invalidContent: true});
        return {invalidContent: true};
      }
    }
  }

  private subscribeToNameChanges(): void {
    this.form.get('name')?.valueChanges.subscribe(
      (name: string) => {
        if (name.toLowerCase() === 'bob') {
          // dynamic validator
          this.form.get('comments')?.setValidators([Validators.required, this.checkInputCorrectness('super')]);
        } else {
          this.form.get('comments')?.setValidators([]);
        }
      }
    )
  }


}
