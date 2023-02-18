const person = {
  firstName: "min hyuk",
  lastName: "woo",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  set name(val) {
    const splited = val.split(" ");
    this.lastName = splited[splited.length - 1];
    this.firstName = splited.slice(0, splited.length - 1).join(" ");
  },
};

console.log(person.name); // min hyuk woo
person.name = "joon hyuk woo";
console.log(person.name); // joon hyuk woo
