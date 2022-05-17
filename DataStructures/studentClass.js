class Student {
  constructor(fname, lname, grade) {
    this.firstName = fname;
    this.lastName = lname;
    this.grade = grade;
    this.exemptions = 0;
  }

  markLate() {
    this.exemptions++;
    if (this.exemptions > 3) {
      return "Exemptions Exceeds";
    }
  }
}

const studentOne = new Student("Indra", "Naik");

studentOne.grade = 5;

console.log(studentOne);
