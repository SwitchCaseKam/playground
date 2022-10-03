import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    this.mergeSortExample();
  }

  public mergeSortExample(): void {
    console.log(this.mergeSort([3, 1, 5, 2, 4, 3, 8, 1, 6]));
  }

  private merge(left :any, right: any) {
    let sortedArr = [];
    while(left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    console.log('merge operation: ', [...sortedArr, ...left, ...right])
    return [...sortedArr, ...left, ...right];
  }

  private mergeSort(numbers: any): any {
    const half = numbers.length / 2;
    if (numbers.length <= 1) {
      console.log(numbers)
      return numbers;
    }
    const left = numbers.splice(0, half);
    const right = numbers;
    console.log('left: ', left, ' right: ', right)

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  



}
