// Basic Types
let id: number = 5;
let company: string = 'King cor.';
let isPublished: boolean = true;
let x: any = 'hello';
let age: number;
age = 30;

// Array
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'hello'];

// Tuple
let person: [number, string, boolean] = [1, 'one', true];

/* any[]와 Tuple의 차이점
    - any[]에는 아무 타입의 값이나 들어갈 수 있음
    - Tuple에는 선언할 때 정해진 타입만 순서대로 들어갈 수 있음.
*/

// Tuple Array
let employee: [number, string][];
employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jake']
];
