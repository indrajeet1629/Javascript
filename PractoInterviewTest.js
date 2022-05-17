// const myPromise = new Promise((resolve, reject) => {

// });

// var p1 = new Promise(function(resolve, reject) {
//   reject('Failed');
// });

// p1.then(function(value) {
//   console.log("1st then",value);
// }).then(function(value) {
//   console.log("2nd then",value);
// }).then(function(value) {
//   console.log("3rd then",value);
// }).catch(function(e) {
//   console.log("1st catch",e.message);
// }).then(function(){
//   console.log('4th then');
// }).then(function(value) {
//   console.log("5th then",value);
// })

// // "1st catch" Failed

// var p1 = new Promise(function(resolve, reject) {
//   resolve('Success');
// });

// p1.then(function(value) {
//   console.log("1st then",value);
// }).then(function(value) {
//   console.log("2nd then",value);
// }).then(function(value) {
//   console.log("3rd then",value);
//   throw new Error('oh, no!');
// }).catch(function(e) {
//   console.log("1st catch",e.message);
// }).then(function(){
//   console.log('4th then');
// }).then(function(value) {
//   console.log("5th then",value);
// })

// // "1st then" Success

// const mypromise = new Promise((resolve, reject) => {
//   reject(Error('Some error occurred'));
// })

// mypromise.catch(error => console.log(error.message));
// mypromise.catch(error => console.log(error.message));

// //Error : 'Some error occurred'

// const promise = new Promise(res => res(2));

// promise.then(v => {
//   console.log(v);
//   return v * 2;
// })
// .then(v => {
//   console.log(v);
//   return v * 2;
// })
// .finally(v => {
//   console.log(v);
//   return v * 2;
// })
// .then(v => {
//   console.log(v);
// });

// //2nd Output
// //2
// //4
// const myObj = {
//   name: "abcd",
//   age: 26
// }

// function baseFunction(place){ //
//   return `${this.name} is in ${place}`;
// }

// function.prototype.myBind = (...params) => {
//   return (param) => baseFunction.apply(obj, params);
// }

// const myFunc = baseFunction.myBind(myObj, 'abcd',);

// myFunc('banglore');
// myFunc('belgavi');

// // note - Function

// addEventListener("click", eventHandler);

// function eventHandler (e){

// }

// // What will be output ?

// <form onclick="alert('form')">FORM
//   <div onclick="alert('div')">DIV
//     <p id="myP" onclick="eventHandler('p')">P</p>
//   </div>
// </form>

// // Event Deligation

// function createIncrement() {
//   let count = 0;

//   let message = `Count is ${count}`;

//   function increment() {
//     count++;
//   }

//   function log() {
//     console.log(message);
//   }

//   return [increment, log];
// }

// const [increment, log] = createIncrement();

// increment();
// increment();
// increment();
// log(); // 3 - msde it 3

// function createStack() {
//   let items = [];

//   return {
//     getItems() {
//       return items;
//     },
//     push(item) {
//       items.push(item);
//     },
//     pop() {
//       return items.pop();
//     }
//   };
// }

// const stack = createStack();

// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5
// stack.items[0] = 15; // => [10]

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged? 1
//   }
//   console.log(count); // What is logged? 0
// })();

// const sleep => async (timerSecs) => {

// }

// console.log('Before');
// sleep(30);
// console.log('After');

// // setTimeout()

// // Before
// // Sleeping
// // After
