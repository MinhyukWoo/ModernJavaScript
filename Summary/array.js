// 배열 선언
const fruits = ["apple", "banana", "coconut", "durian"];
console.log(fruits);
// 배열의 요소 추가
// push : 맨 뒤에 추가, 원본이 변경됨
// unshift : 맨 앞에 추가, 원본이 변경됨
// splice : 중간에 추가할 수 있다, 원본이 변경됨
// concat : 배열을 연결함, 원본 변경 없음, 반환이 연결된 배열
// push의 시간복잡도는 O(1)이지만 unshift와 concat, splice의 시간복잡도는 O(n)이다.
// : https://stackoverflow.com/questions/44031591/performance-of-array-push-vs-array-unshift
fruits.push("mango", "orange");
fruits.unshift("strawberry");
fruits.splice(3, 0, "graphe fruit");
console.log(fruits);
const otherFruits = fruits.concat("grape", "shine muscat");
console.log(otherFruits);

// 배열의 요소 제거
// pop : 맨 뒤 제거, 제거된 요소 반환 없으면 undefined, 원본이 변경됨
// shift : 맨 앞 제거, 제거된 요소 반환 없으면 undefined, 원본이 변경됨
// splice : 중간도 제거 가능, 제거된 요소들 배열로 반환 없으면 빈 배열, 원본이 변경됨
// pop의 시간복잡도는 O(1)이지만 shift와 splice의 시간복잡도는 O(n)이다.
