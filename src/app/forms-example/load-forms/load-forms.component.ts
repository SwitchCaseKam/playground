import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
  ) { }

  public ngOnInit(): void {
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
