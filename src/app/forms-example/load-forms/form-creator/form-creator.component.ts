import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit {

  private selectedStrategy = undefined;
  
  constructor() { }

  public ngOnInit(): void {
  }

  public setStrategy(): void {
    
  }

}
