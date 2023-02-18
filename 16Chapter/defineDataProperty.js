const person = {};

Object.defineProperty(person, "firstName", {
  value: "Minhyuk",
  writable: true,
  enumerable: true,
  configurable: true,
});

// 프로퍼티 어트리뷰트를 지정하지 않으면 기본적으로 false이거나 undefined이다.
Object.defineProperty(person, "lastName", {
  value: "Woo",
});

// Value가 있다.
console.log(person); // {firstName: 'Minhyuk', lastName: 'Woo'}
// Writable하지 않으면 값을 변경할 수 없다.
person.lastName = 'Kim';
console.log(person.lastName); // Woo
// Enumerable하지 않으면 열거할 수 없다.
console.log(Object.keys(person)); // (1) ['firstName']
// Configurable하지 않으면 삭제할 수 없다.
delete person.lastName;
console.log(person.lastName); // Woo
