const { log } = require("console");

//Static ====================================================================

// Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// console.log(
//   Point.displayName,
//   Point.distance(p1, p2),
//   p1.displayName,
//   p1.distance,
//   p2.displayName,
//   p2.distance)


//Using static members in classes
class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = "I square the triple of any number you provide";
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Triple.description);
console.log(Triple.calculate());
console.log(Triple.calculate(6));

console.log(SquaredTriple.calculate(3));
console.log(SquaredTriple.description);
console.log(SquaredTriple.longDescription);
console.log(SquaredTriple.customName);


//Calling static members from a class constructor and other methods
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty);
    console.log(this.constructor.staticProperty);
    console.log(StaticMethodCall.staticMethod());
    console.log(this.constructor.staticMethod());
  }

  static staticProperty = "static property";
  static staticMethod() {
    return "static method has been called.";
  }
}








//Fields ====================================================================
class Rectangle {
  height = 0;
  width;
  constructor({ height, width }) {
    this.height = height;
    this.width = width;
  }
}

const rect = new Rectangle({
  width: 3,
  height: 2
})

// log(rect.height, rect.width)








//Inheritance ====================================================================
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak();









//Inheritance super ====================================================================
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  //If the ChildClass have no constructor then it will use the ParentClass's constructor
  //Super is present for Parent class
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();









//Contructor returned value =======================================================
class ParentClass {
  constructor() {
    this.name = 'parent name'
  }
}

console.log(new ParentClass()); // ParentClass {}
// The return value is ignored because it's not an object
// This is consistent with function constructors

class ChildClass extends ParentClass {
  //Child class must return {} or undefined
  constructor(name) {
    super(name) //name from parent
    this.name = name // overide name 
    return {
      name: 'overide name' // overide name again
    }
  }
}

const child = new ChildClass('Duc')

log({ name: child.name })









//Contructor should be a literal name =======================================================
class Foo {
  // This is a computed property. It will not be picked up as a constructor.
  ["constructor"]() {
    console.log("called");
    this.a = 1;
  }
}
const foo = new Foo(); // No log
console.log(foo); // Foo {}
foo.constructor(); // Logs "called"









//getter and setter =======================================================================
class Square {
  constructor(height, width) {
    this.height = height
    this.width = width
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    log({ value })
    this.height = value ** 0.5;
    this.width = value ** 0.5;
  }
}

const square = new Square(2, 3)
log({ area: square.area })

square.area = 20
log(square.area)








//Private class features =====================================================================

//The private fields, methods can't be accessed outside of class
class ClassWithPrivate {
  #privateField = 'privateField';

  #privateMethod() {
    log('private method')
  }

  static #privateStaticField = 'privateStaticField';

  static #privateStaticMethod() {
    log('privateStaticMethod')
  }
}


const privateClass = new ClassWithPrivate()
log({
  privateField: privateClass.privateField,
  privateStaticField: ClassWithPrivate.privateStaticField
})
