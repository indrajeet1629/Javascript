class iPhoneClass {} // class

// !a method for recognizing faces
iPhoneClass.prototype.faceID = function () {
  console.log("faceID");
};

// !a method for taking 4k video
iPhoneClass.prototype.video = function () {
  console.log("video4K");
};

const classInstance = new iPhoneClass();

console.log("classInstance", classInstance.faceID());
/**
 * ? Functional Constructor - Prototype
 */
function iPhoneFunction() {} // constructor

iPhoneFunction.prototype.faceID = function () {
  console.log("faceID");
};

// !a method for taking 4k video
iPhoneFunction.prototype.video = function () {
  console.log("video4K");
};

let functionInstance = new iPhoneFunction(); // an iPhone 11

console.log(functionInstance.faceID());

let haryanaStateObj = {
  state: "Haryana",
};

let gujaratStateObj = {
  state: "Gujarat",
};

let indiaCountryObj = {
  country: "India",
};

Object.setPrototypeOf(haryanaStateObj, indiaCountryObj);
Object.setPrototypeOf(gujaratStateObj, indiaCountryObj);

console.log(haryanaStateObj.__proto__);
console.log(gujaratStateObj);
