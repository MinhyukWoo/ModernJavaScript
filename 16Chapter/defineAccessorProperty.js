const person = {
  firstName: "Minhyuk",
  lastName: "Woo",
};

Object.defineProperty(person, "name", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(val) {
    const splited = val.split(" ");
    this.lastName = splited[splited.length - 1];
    this.firstName = splited.slice(0, splited.length - 1).join(" ");
  },
  enumerable: true,
  configurable: true,
});

// Get
console.log(person.name); // Minhyuk Woo

// Set
person.name = "Joonhyuk Woo";
console.log(person.name); // Joonhyuk Woo

// Enumerable
console.log(Object.keys(person)); // (3) ['firstName', 'lastName', 'name']

// Configurable
delete person.name;
console.log(person.name); // undefined
