---
title: "[javascript] var, let, const"
date: "2021-10-31 01:01:00"
description: ""
tags:
  - javascript
---

![](img/jsDeepDive.jpg)

## var 선언한 변수의 문제점

ES6의 let과 const가 생기기 전에 변수를 선언할 수 있는 유일한 방법은 var를 사용하는 것이었다. var로 선언된 변수는 다른 언어와는 구별되는 독특한 특징을 가지고 있다.

### 1. 변수 중복 선언 허용

var 키워드로 선언한 변수는 중복 선언이 가능하다.<br>

**예제 1**

```js
var a = 1
var b = 1

// 초기화문이 없는 변수 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
// 초기화문 : 변수 선언과 동시에 초기값을 할당하는 문
var a = 100
var b // 초기화문이 없는 선언문은 무시된다.

console.log(a) // 100
console.log(b) // 1
```

var로 선언한 변수는 중복 선언이 가능하지만, 초기화문 유뮤에 따라 다르게 동작한다. 초기화문이 있는 변수 선언문은 기존 변수에 값을 재할당 하지만 초기화문이 없는 변수 선언문은 무시되고 에러가 발생하지 않는다.
(여러명이 개발할때 다른 개발자가 동일한 이름의 변수를 초기화문으로 선언한다면 의도치않게 값이 변경될 수 있다.)

### 2. 함수 레벨 스코프

var 키워드로 선언한 변수는 함수내에서만 지역 스코프로 인정한다. 함수 밖에서 선언한 var 변수는 모두 전역 변수가 된다.<br>

**예제 2**

```js
var a = 1
if (true) {
  // a가 이미 함수 외부에서 선언됐기 때문에 전역변수가 된다.
  var a = 10
}
cosnole.log(a) // 10

var i = 10
for (var i = 0; i < 5; i++) {
  // for문에서 선언한 i는 전역변수고 위에서 선언한 i가 있으므로 값이 변경된다.
  console.log(i) // 0 1 2 3 4
}
console.log(i) // 5
```

위의 예제에서 변수 a와 i가 중복 선언되어 변수의 값이 의도치않게 변경되는 부작용이 발생했다.

### 3. 변수 호이스팅

var 키워드로 변수를 선언하면 호이스팅이 발생한다. 호이스팅에 의해 변수 선언문 이전에 값을 참조할 수 있다. (값을 할당하기 이전에 변수를 참조하면 값은 undefined를 반환한다.)<br>

**예제 3**

```js
// 1. 호이스팅에 의해 foo 변수가 선언되었다.
// 2. 변수 foo는 undefined
console.log(foo) // undefined

// 3. 변수에 값을 할당
foo = 123
console.log(foo) // 123

// 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행
var foo
```

변수 선언문 이전에 변수를 참조하는 것은 호이스팅에 의해 에러가 발생하지는 않지만 가독성이 떨어지고 좋은 코드는 아니기 때문에 사용을 지양한다.

## let 키워드

### 1. 변수 중복 선언 금지

위에서 살펴본 것 처럼 var는 동일한 이름의 변수를 선언해도 아무런 에러가 발생하지 않았지만 값이 바뀔 수 있는 부작용이 발생한다. <br>하지만 let으로 이름이 같은 변수를 중복 선언하면 문법 에러(Syntax Error)가 발생한다.<br>

**예제 4**

```js
// 중복 선언되어 변수의 값이 변한다.
var a = 123
var a = 456

// 중복 선언을 허용하지 않는다.
let b = 123
let b = 456 // SyntaxError: Identifier 'b' has already been declared
```

### 2.블록 레벨 스코프

- `함수 레벨 스코프` : var 키워드로 선언한 변수는 함수 내부에서만 선언한 변수는 지역 스코프로 인정한다. <br>
- `블록 레벨 스코프` : let 키워드로 선언한 변수는 모든 코드 블록 (함수, if문, for문, while문, try/catch문 등)을 지역 스코프로 인정한다.

**예제 5**

```js
// 전역 변수
let a = 1

{
  // 지역 변수
  let a = 2
  let b = 3
}

console.log(a) // 1
console.log(b) // ReferenceError: b is not defined
```

전역에서 선언된 a 변수와 코드 블록 내에서 선언된 a는 다른 변수다. 코드 블록 내에서 선언한 a와 b는 지역 변수다. 따라서 전역에서는 b를 참조할 수 없기때문에 참조에러 (ReferenceError)가 뜬다.

### 3. 변수 호이스팅

let으로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다. (실제론 동작함)

**예제 6**

```js
console.log(foo) // ReferenceError: foo is not defined
let foo
```

let으로 선언한 변수를 선언문 이전에 참조하면 참조 에러가 발생한다.<br>
var로 선언한 변수는

1. 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 **선언과 초기화가 함께 진행**
2. 초기화 단계에서 **변수에 접근하면 undefined를 반환**
3. 변수 선언문제 도달했을때 값이 할당
4. 변수에 접근하면 할당값 반환

let으로 선언한 변수는

1. **선언과 초기화가 분리되어 진행**
2. 자바스크립트 엔진에 의해 암묵적으로 선언 단계 실행
3. **변수에 접근하면 참조에러(ReferenceError) 반환**
4. 초기화는 변수 선언문에 도달했을때 실행
5. 이후 변수에 접근 가능

### 4. 전역 객체와 let

var로 선언한 변수의 암묵적 전역은 전역객체 window의 프로퍼티가 된다.

**예제 7**

```js
var a = 1
function b() {}

// var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
console.log(window.a) // 1
// window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(a) // 1

// 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다.
console.log(window.b) // f foo() {}
// window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(b) // f foo() {}

let x = 1

// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.x) // undefined
console.log(x) // 1
```

let으로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. window.변수명과 같이 접근할 수 없다.

## const 키워드

const는 상수(constant)를 선언하기 위해 사용한다. let 키워드와 비슷하다. <br>
**상수? 재할당이 금지된 변수**

### 1. 선언과 초기화

const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.

**예제 8**

```js
const a = 1;

// 초기화를 하지 않는다면 에러가 발생
const b; // SyntaxError: Missing initializer in const declaration
```

const 키워드로 선언한 변수는 let과 마찬가지로 `블록 레벨 스코프`를 가지며, 호이스팅이 발생하지 않는 것처럼 동작한다.

### 2. 재할당 금지

var나 let으로 선언한 변수를 재할당이 가능하나 **const로 선언한 변수는 재할당이 금지된다.**

**예제 9**

```js
const a = 1
a = 2 // TypeError: Assignment to constant variable.
```

### 3. 상수

상수는 재할당이 금지되며 상수의 상태 유지와 가독성, 유지보수를 위해 적극적으로 사용하기를 권장한다.

**예제 10**

```js
/* let을 사용했을 때 */
// 세전 가격
let preTaxPrice = 100
// 세후 가격
let afterTaxPrice = preTaxPrice + preTaxPrice * 0.1

console.log(afterTaxPrice) // 110

/* const를 사용했을 때 */
const TAX_RATE = 0.1 // 세율을 의미하는 0.1은 변경할 수 없다.
let preTaxPrice = 100
let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE

console.log(afterTaxPrice) // 100
```

let을 사용한 코드는

- 0.1은 어떤 의미로 사용했는지 명확히 알기 어렵기 때문에 가독성이 좋지 않다. <br>
- 세율을 의미하는 0.1은 쉽게 바뀌지 않는 값이다. → 고정된 값

const를 사용한 코드로 바꾸면

- 세율을 의미하는 TAX_RATE변수는 변경할 수 없는 값으로 할당된 값을 변경할 수 없다.
- 프로그램 전체에서 공통적으로 사용 → 나중에 세율이 변경되면 값만 바꾼다 → **유지보수성 향상**

### 4. const 키워드와 객체

const로 선언된 변수에 값을 변경할 수 없다. 하지만 const로 선언된 변수에 객체가 할당된 경우에는 값을 변경할 수 있다. <br>
(변경 가능한 값인 객체는 재할당 없이도 직접 변경이 가능하기 때문에)

**예제 11**

```js
const person = {
  age: 33,
}
person.age = 32

console.log(person) // {age: 32}
```

**const는 재할당은 금지할 뿐 `불변`을 의미하지 않는다.** 새로운 값을 재할당 하는것은 불가능 하지만 프로퍼티 동적 생성, 삭제, 값의 변경 등을 토해 객체를 변경하는 것은 가능하다.

## var, let, const

- ES6를 사용한다면 var는 사용하지 않는다.
- 재할당이 필요한 경우 let을 사용한다. (스코프는 최대한 좁게)
- 값이 변경되지 않을 경우 const를 사용한다.
- **되도록 const를 사용한다.**

<table>
    <thead>
        <tr>
            <th></th>
            <th>var</th>
            <th>let</th>
            <th>const</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>변수 재할당</th>
            <td>O</td>
            <td>O</td>
            <td>X</td>
        </tr>
        <tr>
          <th>스코프</th>
            <td>함수 레벨 스코프</td>
            <td>블록 레벨 스코프</td>
            <td>블록 레벨 스코프</td>
        </tr>
        <tr>
          <th>호이스팅</th>
            <td>O</td>
            <td>O (발생하지 않는것처럼 동작)</td>
            <td>O (발생하지 않는것처럼 동작)</td>
        </tr>
        <tr>
          <th>전역객체 프로퍼티 여부</th>
            <td>O</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
</table>
