// 변수명은 camelCase
const firstName = "min hyuk";

// 함수명은 camelCase
function getNumberOne() {
  return 1;
}

// 클래스명은 PascalCase, 메서드는 camelCase
class Member {
  constructor() {
    this.name = "minhyuk woo";
  }
  getName() {
    return this.name;
  }
}

// 상수명은 UPPER_CASE
const PI = 3.14;

// 파일명과 폴더명은 kebab-case
// : 대소문자 구분 안 하는 서버가 가끔 있고
//   많은 라이브러리가 이와 같은 규칙을 지키고 있다.
const fileName = "user-authentication.js";

// 참고
//  자바스크립트 프로그래밍 스타일, 코딩 컨벤션 조사
//  : https://taptorestart.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%A1%B0%EC%82%AC
//  [JS] 파일명 네이밍
//  : https://velog.io/@jhy979/JS-%ED%8C%8C%EC%9D%BC%EB%AA%85-%EB%84%A4%EC%9D%B4%EB%B0%8D