import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.css']
})
export class FormsExampleComponent implements OnInit {

  public reactiveFormsTopics: string[][] = [
    ['validators', 'reactive/validators'],
  ];
  public templateDrivenFormsTopics: string[][] = [
    ['template driven form example', 'template-driven/example'],
  ];
  public formStrategiesTopics: string[][] = [
    ['forms strategies', 'forms-strategies'],
  ];

  constructor() { }

  public ngOnInit(): void {
  }

}
