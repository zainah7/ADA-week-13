// function sayHello() {
//      console.log ("Hello");
// }

// sayHello();

var sum = function sayHello(a, b) {
     console.log(a + b)
     return true;
};

let subtract = (a, b) =>{

     return a-b;
}
// console.log(sum(2, 1));
console.log(subtract(1, 1))

class student {
     constructor(name, age, height) {
          this.name = name,
          this.age = age,
          this.height = height
     }
     
     sayHello() {
          console.log('hello, my name is'+ this.name)

     }
}

let student1 = new student('zainah', 12, '5ft inches');
let student2 = new student ('john', 15, '3ft 7inches');
console.log(student1.sayHello(), student2)