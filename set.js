class Set {
    CLASS_NAME = "SET";
  
    constructor(arr) {
      this.set = this._removeDuplicates(arr);
    }
  
    // Used to expose the underneath "set"
    // Also known as a "Getter"
    showSet() {
      return this.set;
    }
  
    // Return type: Number
    size() {
      return this.set.length;
    }
  
    // Return type: Boolean
    isEmpty() {
      return this.size() === 0;
    }
  
    // Add value if not already in set
    add(value) {
      if (this.map[value]) return;
  
      this.map[value] = true;
  
      this.set.push(value);
    }
  
    // Return type: Boolean
    valueExists(value) {
      if (!this.map[value]) return false;
      return true;
    }
  
    // Remove value from set
    remove(value) {
      if (!this.valueExists(value)) return;
  
      delete this.map[value];
  
      this.set = this.set.filter((setVal) => setVal !== value);
    }
  
    // Return Type: Set
    // Union -- combine sets, remove duplicates again
    // Result is a new set with union'd values of two sets
    // -----
    // We want "otherSet" to be an instance of Set
    // For example:
    // const setC = setA.union(setB)
    // all 3 are different sets
    //
    // DOES NOT MANIPULATE THIS INSTANCE'S SET
    union(otherSet) {
      if (otherSet?.CLASS_NAME !== "SET")
        throw new Error("Must supply another class of type: Set");
  
      const newArr = this.set.concat(otherSet.showSet());
  
      return new Set(newArr);
    }
  
    // Return Type: Set
    // Intersection -- combine sets, prune all non-duplicates
    // Result is a new set with intersect'd values of two sets
    // -----
    // We want "otherSet" to be an instance of Set
    // For example:
    // const setC = setA.intersection(setB)
    // all 3 are different sets
    //
    // DOES NOT MANIPULATE THIS INSTANCE'S SET
    intersection(otherSet) {
      if (otherSet?.CLASS_NAME !== "SET")
        throw new Error("Must supply another class of type: Set");
  
      const newArr = [];
  
      const setToIntersect = otherSet.showSet();
  
      for (const idx in setToIntersect) {
        const value = setToIntersect[idx];
  
        if (this.map[value]) newArr.push(value);
      }
  
      return new Set(newArr);
    }
  
    // Clears this set
    clearSet() {
      this.map = {}; // O(1) mapping
      this.set = [];
    }
  
    // Logs the contents
    print() {
      console.log(`{ ${this.set} }`);
    }
  
    // ----------------
    // "Private" Methods
    // ----------------
    _removeDuplicates(arr = []) {
      // Plain old js object
      const map = {};
      const set = [];
  
      for (const value of arr) {
        if (!map[value]) {
          map[value] = true;
          set.push(value);
        }
      }
  
      this.map = map; // O(1)
      return set;
    }
  }