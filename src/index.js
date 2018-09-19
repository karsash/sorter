class Sorter {
  constructor() {
    this.elements = [];
    this.comparator = this.baseComparator;
  }
  baseComparator(left, right) {
    return left - right;
  } 
  add(element) {
    this.elements.push(element);
    return this;
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    let refArray = [];
    indices.sort(this.baseComparator);
    indices.forEach(element => {
      refArray.push(this.elements[element]);
    });

    refArray.sort(this.comparator);
 
    indices.forEach((element, index) => {
      this.elements[element] = refArray[index];
    })

    return this;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}
module.exports = Sorter;