class Group {
  constructor() {
    this.collection = []
  }

  add(value) {
    if (!this.has(value)) {
      this.collection.push(value)
    }
  }

  delete(value) {
    if (this.has(value)) {
      return (this.collection = this.collection.filter(
        (item) => item !== value
      ))
    }
  }

  has(value) {
    return this.collection.some((v) => v === value)
  }

  // static from(obj) {
  //   let group = new this()
  //   for (let value of obj) {
  //     group.add(value)
  //   }
  //   return group
  // }
}

Group.from = function (obj) {
  let group = new this()
  for (let value of obj) {
    group.add(value)
    return group
  }
  return this.collection
}

module.exports = Group

// let group = Group.from([10, 20])

// Notes,
// I don't still don't understand static function yet
//
// But I do understand that:
// they can be writtern using the static keyword or,
// by assigning them directly as I have above
//
// the value of `this` in a static method is the class constructor itself
// for example the `this` in the from static function is `Group`
// there call `new this()` from within the static methods
//
// Some extra notes on classes in JavaScript
//
// everything in JS is an object,
// compared to other programming languages class is JS are just syntax sugar and not real classes
//
// but essentially a class in JS is just a kind of function that creates a blueprint for an object

// read more here
// https://javascript.info/class

// /////////////////////////////////
// /////////////////////////////////
// Some History of JavaScript
// it was original written as a schema (OOP) language,
// but then the builder boss asked him to make it more like Java (FP)

// /////////////////////////////////
// JS is an OOP & FP language --weird!
// Because JavaScript is not just OOP language
// it's also a functional programming language

// Higher Order Functions are thanks to Functional programming

// JS gets confusing and messy when you combine the two,
// and you can run into errors because its OOP clashing with FP
// `this` keyword comes from OOP
// in FP there is no such thing as `this`

//

// The FP part of JS allows you to save an OOP method as a variable, cool! (& not normal compared to other languages)
// But that means it stops being a method connected to an object, oh no!
// because in FP there is no such thing as `this`!
//
//
// It becomes a function - and so when you call it, `this` no longer references the object
// it's lost it's connection! it stops being a metho connected to an object
// you can fix this using the `bind()` method and binding the object!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

// Remember
// `this` refers to the context where the function is being called
// not where the function was defined
