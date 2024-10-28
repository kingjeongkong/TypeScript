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

// Union, 타입 선언 시 두 가지의 타입을 가질 수 있게 함.
let pid: number | string = 22;
pid = '22';

// Enum
enum Direction1 {
  Up = 3,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}
console.log(Direction2.Up);

// Objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'John'
}; // quite messy

// Type Alias
type User = {
  id: number;
  name: string;
};

const userKing: User = {
  id: 1,
  name: 'King'
};

// Type Assertion
let cid: any = 1;
// let customerID = <number>cid
let customerID = cid as number;
