import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  private editArea: ElementRef = new ElementRef({});
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.editArea = this.elementRef.nativeElement.querySelector('.edit-area');
    console.log('editArea: ', this.editArea);
    console.log("this.elementRef.nativeElement.querySelector('.edit-area')",this.elementRef.nativeElement.querySelector('.edit-area'))
    this.addClickEventHandler();
    this.addMousemoveHandler();
  }

  private addClickEventHandler(): void {
    // this.elementRef.nativeElement.querySelector('.edit-area').addEventListener(
    //   'click', (event: any) => {
    //     const el = document.createElement('div');
    //     el.classList.add('rectangle-div');
    //     console.log('edit area clicked: offset', event['offsetX'], event['offsetY']);
    //     console.log('edit area clicked: page', event['pageX'], event['pageY']);
    //     console.log(el)
    //     this.elementRef.nativeElement.querySelector('.edit-area').appendChild(el);

    //   }
    // );
  }

  public addnNewDiv(event: Event) {
    const el = document.createElement('div');

    // el.classList.add('rectangle-div');
    el.className = 'test';
    let text = document.createTextNode('Test');
    el.appendChild(text);
    this.elementRef.nativeElement.querySelector('.edit-area').appendChild(el);
    // this.elementRef.nativeElement.querySelector('.edit-area').classList.add('rectangle-div');
    // document.getElementById('area')?.appendChild(el)
    // document.body.appendChild(el);
  }


  public addMousemoveHandler(): void {
    this.elementRef.nativeElement.querySelector('.edit-area').addEventListener('mousemove', 
      (event: any) => {
        console.log('mouse move handler, event: ', event['pageX'], event['pageY']);
        this.elementRef.nativeElement.querySelector('.moving-circle').style.left = event['offsetX'] + 'px';
        this.elementRef.nativeElement.querySelector('.moving-circle').style.top = event['offsetY'] + 'px';
        this.elementRef.nativeElement.querySelector('.moving-circle').style.backgroundColor = 'aqua'
        console.log(this.elementRef.nativeElement.querySelector('.moving-circle'))
    });
  }
}
