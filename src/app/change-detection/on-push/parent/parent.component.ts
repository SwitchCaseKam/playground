import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {

  public inputForm: FormGroup = new FormGroup({});
  public currentValue: string = '';
  public randomNum: number = 0;

  constructor(private formBuilder: FormBuilder, private cdRef: ChangeDetectorRef) { 
    if (this.randomNum > 5 ) {
      console.log(`${this.randomNum} lower than 5. Tree detached.`)
      this.cdRef.detach();
    } else {
      console.log(`${this.randomNum} higher than 5. Tree reattached.`)
      this.cdRef.reattach();
    }
  }

  public ngOnInit(): void {
    this.generateRandomNumber();
    this.inputForm = this.buildForm();
    this.inputForm.get('text')?.valueChanges.subscribe(
      (value: string) => value.length > 3 ? this.currentValue = value : undefined
    );
  }
  
  public logChangeDetection(): void {
    console.log('PARENT change detector');
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      text: new FormControl('')
    })
  }

  private generateRandomNumber(): void {
    setInterval(() => {
      this.randomNum = Number((Math.random()*10+1).toFixed(2))
      this.cdRef.markForCheck();  
    }, 1000);
  }
}
