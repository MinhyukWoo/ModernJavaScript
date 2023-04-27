// this
// : this를 사용하는 범위마다 다르다.
const member = {
  name: "minhyuk",
  sayHello() {
    console.log("Method's this:", this); // this는 member
    setTimeout(function () {
      console.log("Callback function's this:", this); // this는 Timeout
    }, 500);
    setTimeout(() => {
      console.log("Callback arrow function's this:", this); // this는 member
    }, 1000);
  },
};

function func() {
  console.log("function's this:", this); // this는 global
}

console.log("Global scope's this:", this); // this는 module.export

member.sayHello();
func();
