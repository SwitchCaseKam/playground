import { Component, ComponentFactoryResolver, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { DataService } from '../reactive-forms/data.service';
import { FormsStrategies } from './forms-helper.model';
import { CarFormComponent } from './forms-strategies/car-form/car-form.component';
import { HouseFormComponent } from './forms-strategies/house-form/house-form.component';
import { PersonFormComponent } from './forms-strategies/person-form/person-form.component';

@Component({
  selector: 'app-load-forms',
  templateUrl: './load-forms.component.html',
  styleUrls: ['./load-forms.component.css']
})
export class LoadFormsComponent implements OnInit {

  @ViewChild('dynamicComponentContainer', {read: ViewContainerRef}) dynamicComponentContainer = undefined;
  public formsStrategiesNames = new Map<string, FormsStrategies>([
    ['car', FormsStrategies.CAR_FORM_STRATEGY],
    ['house', FormsStrategies.HOUSE_FORM_STRATEGY],
    ['person', FormsStrategies.PERSON_FORM_STRATEGY],
  ]);
  public selectedFormType: string = '';

  @HostListener('window:scroll')
  onClick() {
    console.log('ok button clicked host listener');
    const randomColor = Math.floor(Math.random()* (16777214 - 1 + 1) + 1).toString();
    const randomColorHex = parseInt(randomColor, 16);
    console.log(randomColorHex)
  }

  
  @HostListener('window:scroll')
  onScroll() {
    console.log('scroll host listener');
    // this.displayForm();
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService  
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(
      filter(data => data.get('message') === 'hello'),
      switchMap((data) => this.dataService.getData())
    ).subscribe(data => {
      console.log(data);

    });
    
    


    document.getElementById('ok-button')?.addEventListener('click', () => {
      console.log('ok button clicked add vent listener')
    });

    this.displayForm();


  }

  public renderForm(): void {
    console.log('render form')
    this.displayForm();
  }

  private displayForm(): void {
    let factoryComponent = undefined;
    console.log('displayForm = ', this.selectedFormType)
    switch(this.selectedFormType) {
      case 'car':
        factoryComponent = this.componentFactoryResolver.resolveComponentFactory(CarFormComponent);
        this.viewContainerRef.createComponent(factoryComponent).changeDetectorRef.detectChanges();
        break;
      case 'house':
        factoryComponent = this.componentFactoryResolver.resolveComponentFactory(HouseFormComponent);
        this.viewContainerRef.createComponent(factoryComponent).changeDetectorRef.detectChanges();
        break;
      case 'person':
        factoryComponent = this.componentFactoryResolver.resolveComponentFactory(PersonFormComponent);
        this.viewContainerRef.createComponent(factoryComponent).changeDetectorRef.detectChanges();
        break;
    }

    

  }
  

}
