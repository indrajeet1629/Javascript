// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000); // (*)
// })
//   .then(function (result) {
//     // (**)
//     console.log(result); // 1
//   })
//   .finally((data) => {
//     console.log("Finally", data);
//   })
//   .then(function (result) {
//     // (***)
//     console.log(result); // 2
//   })
//   .catch((er) => {
//     return "heyy";
//   })
//   .then(function (result) {
//     console.log(result); // 4
//   });

// setTimeout(()=>{
// console.log(x);
// },1000)

// let x = 10
