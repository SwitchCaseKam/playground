import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.handleActivatedRoute();
  }

  private handleActivatedRoute(): void {
    console.log('activatedRoute.snapshot: ', this.activatedRoute.snapshot);
    console.log('router.url: ', this.router.getCurrentNavigation()?.extras);

    this.activatedRoute.params.subscribe(
      data => console.log('params: ', data)
    );

    this.activatedRoute.paramMap.subscribe(
      data => console.log('paramMap: ', data)
    );

    this.activatedRoute.data.subscribe(
      data => console.log('data: ', data)
    );
    
    this.activatedRoute.queryParams.subscribe(
      data => console.log('queryParams: ', data)
    );
  }

}
