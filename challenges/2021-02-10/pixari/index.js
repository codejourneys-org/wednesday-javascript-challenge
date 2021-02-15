class Group {

  constructor() {
    this.values = [];
  }

  add(val) {
    !this.has(val) && this.values.push(val); 
  }

  delete(val) {
    if(this.has(val)) {
      this.values = this.values.filter(e => e !== val);
    }  
  }

  has(val) {
    return this.values.some(v => v === val);
  }

  static from(obj) {
    if(obj !== null && typeof obj[Symbol.iterator] === 'function') {
      const g = new Group();
      [...obj].forEach(v => g.add(v));
      return g;
    }
    return new Group();
  }

}

module.exports = {
  Group: Group,
}