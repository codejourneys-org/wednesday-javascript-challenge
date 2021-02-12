class Group {
  constructor() {
    this.collection = []
  }

  add(value) {
    if (!this.collection.includes(value)) {
      return this.collection.push(value)
    }
  }

  delete(value) {
    return (this.collection = this.collection.filter((item) => item !== value))
  }

  has(value) {
    return this.collection.includes(value)
  }

  static from(obj) {
    let fromGroup = new Group()

    for (let value of obj) {
      fromGroup.add(value)
    }
    // help!? how do I target add from a static method?
  }
}
const thing = new Group()
thing.add(10)
console.log(thing.collection)
thing.delete(10)
console.log(thing.has(10))

let group = Group.from([10, 20])
console.log(group.collection)

console.log(group.has(10)) // → true
console.log(group.has(30)) // → false
group.add(10)
group.delete(10)

console.log(group.has(10)) // → false
