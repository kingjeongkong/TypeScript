"use strict";
let id = 5;
let company = 'King cor.';
let isPublished = true;
let x = 'hello';
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
let person = [1, 'one', true];
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jake']
];
let pid = 22;
pid = '22';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 3] = "Up";
    Direction1[Direction1["Down"] = 4] = "Down";
    Direction1[Direction1["Left"] = 5] = "Left";
    Direction1[Direction1["Right"] = 6] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
const userKing = {
    id: 1,
    name: 'King'
};
let cid = 1;
let customerID = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'King'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
function getArray1(items) {
    return new Array().concat(items);
}
let numArray = getArray1([1, 2, 3, 4, 5]);
let strArray = getArray1(['a', 'b', 'c', 'd']);
numArray.push('123');
function getArray2(items) {
    return new Array().concat(items);
}
let numArray1 = getArray2([1, 2, 3, 4, 5]);
let strArray2 = getArray2(['a', 'b', 'c', 'd']);
//# sourceMappingURL=index.js.map