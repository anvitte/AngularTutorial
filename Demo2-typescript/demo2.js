"use strict";
class Demo1 {
    Demo1() {
        this.name = 'Demo1';
        this.dob = "2023-01-01";
    }
}
const person = new Demo1();
person.dob = "1993-12-18";
person.name = "Ankit Tyagi";
console.log(person.name);
console.log(person.dob);
