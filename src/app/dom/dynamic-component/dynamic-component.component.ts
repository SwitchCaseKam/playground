import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChildDynamicComponentComponent } from './child-dynamic-component/child-dynamic-component.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    public dialog: MatDialog
  ) {}
  
  public ngOnInit(): void {

  }

  public createDynamicComponent(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ChildDynamicComponentComponent);
    const componentRef = this.viewContainerRef.createComponent(factory);
    this.dialog.open(componentRef.componentType);
    componentRef.changeDetectorRef.detectChanges();
  }



}
