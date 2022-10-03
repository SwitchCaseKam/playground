import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routes-test',
  templateUrl: './routes-test.component.html',
  styleUrls: ['./routes-test.component.css']
})
export class RoutesTestComponent implements OnInit {

  public data = {dataA: 'data a', dataB: 'data b', dataC: { x: 'xyz'}};
  public url = 'abc';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
  }

  public navigateToA(): void {
    console.log('navigate to A');
    this.router.navigate([this.activatedRoute.url, 'a', ]);
  }

  public navigateToB(): void {    
    console.log('navigate to B');
    this.router.navigate([this.activatedRoute.url, 'b']);
  }

}
