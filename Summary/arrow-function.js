const fruits = ["Apple", "Banana", "Coconut", "Durian"];

// 도입이유1
// : 함수를 짧게 쓸 수 있다.
console.log(fruits.map((item) => item.length));
console.log(fruits.map(({length}) => length));

// 도입이유2
// : this를 바인딩하지 않는다.
const obj = {
	val: 100,
	func(){
		console.log("method's this", this); // {val: 100, func: 함수}
		setTimeout(function(){
			console.log("function's this", this); // window (node에서는 Timeout)
		}, 500);
		setTimeout(() => {
			console.log("Arrow function's this", this); // {val: 100, func: 함수}
		}, 1000);
	}
};
obj.func();

// 참고
//  화살표 함수
//  : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions
