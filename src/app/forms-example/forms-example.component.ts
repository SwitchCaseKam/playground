import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    setTimeout(() => { this.router.navigate(['abc'], { queryParams: { message: 'hello' }, relativeTo: this.activatedRoute })}, 5000);
    console.log(this.activatedRoute.snapshot)
  }


}
