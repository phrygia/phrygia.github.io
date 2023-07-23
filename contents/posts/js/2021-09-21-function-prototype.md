---
title: "[javascript] 함수의 call, apply, bind 메서드"
date: "2021-09-21 13:15:00"
description: ""
tags:
  - javascript
---

자바스크립트는 원시타입(기본타입)과 참조타입으로 나뉜다.

**· 원시타입**

1. &nbsp;Number
2. &nbsp;String
3. &nbsp;Boolean
4. &nbsp;undefined
5. &nbsp;null

원시타입을 제외한 모든값은 객체다.(즉, 참조타입은 객체다) 참조타입에는 원시타입을 제외한 모든타입, 배열, 함수, 정규표현식 등이 있다. 함수도 객체이기 때문에 값을 처리할 수 있으며 프로퍼티와 메서드도 가지고 있다.

## 함수는 객체

자바스크립트의 함수는 Function 객체이다. 함수가 객체라서 가지는 특징은 다음과 같으며 이러한 작업이 가능한 객체를 **일급객체**라고 한다.

- 함수는 변수나 프로퍼티나 배열 요소에 대입할 수 있다.
- 함수는 함수의 인수로 사용할 수 있다.
- 함수는 함수의 반환값으로 사용할 수 있다.
- 함수는 프로퍼티와 메서드를 가질 수 있다.
- 함수는 이름 없는 리터럴로 표현할 수 있다(익명함수).
- 함수는 동적으로 생성할 수 있다.

일급 객체인 함수는 **일급함수**라고도 한다.

## 함수의 프로퍼티(메서드)

함수는 Function 생성자의 prototype 객체의 프로퍼티를 상속받아서 사용한다.

### 1. call()

<div class="blockquote">
    func.call([thisArg[, arg1, arg2, ...argN]])
</div>  
-&nbsp;thisArg: func 호출에 제공되는 this의 값.<br>
이미 할당되어있는 다른 객체의 함수/메소드를 호출하는 해당 객체에 재할당할때 사용된다. 함수의 call 메서드를 호출할 때 인자로 객체를 전달하면 그 객체를 함수의 this에 할당하고 함수를 호출한다.<br><br>

```js
function say(grettings, honorifics) {
  console.log(grettings + " " + honorifics + " " + this.name)
}

var phrygia = { name: "phrygia" }
var penny = { name: "penny" }

// "Nice to meet you I"m phrygia"
say.call(phrygia, "Nice to meet you", 'I"m')

// "Hello Are you penny"
say.call(penny, "Hello", "Are you")
```

위의 예제에서 say.call을 사용할때 사용된 인자의 객체가 this로 할당되어 각 객체의 name에 해당하는 value값이 호출되었다.

### 2. apply()

<div class="blockquote">
    func.apply(thisArg, [argsArray])
</div> 
-&nbsp;thisArg: func를 호출하는데 제공될 this 의 값 <br>
-&nbsp;argsArray: func가 호출되어야 하는 인수를 지정하는 유사 배열 객체<br>
*apply와 거의 동일하지만 call은 인수를 쉼표(,)로 구분한 값으로 전달받고 apply는 배열로 받는다는 차이점이 있다. <br><br>

```js
function say(grettings, honorifics) {
  console.log(grettings + " " + honorifics + " " + this.name)
}

var phrygia = { name: "phrygia" }
var penny = { name: "penny" }

// "Nice to meet you I"m phrygia"
say.apply(phrygia, ["Nice to meet you", 'I"m'])

// "Hello Are you penny"
say.apply(penny, ["Hello", "Are you"])
```

### 3. bind()

<div class="blockquote">
    func.bind(thisArg[, arg1[, arg2[, ...]]])
</div> 
-&nbsp;thisArg: 바인딩 함수가 대상 함수(target function)의 this에 전달하는 값<br>
Function 객체의 bind 메서드는 객체에 함수를 바인드(묶다, 속박하다)한다. bind 메서드가 호출되면 새로운 함수를 생성하며 첫번째 인자의 value로는 this 키워드를 설정하고 뒤의 인자들은 바인드된 함수의 인수에 할당된 함수를 반환한다. 간단하게 말하자면 function에 인자로 넘긴 this가 바인딩 된 새로운 함수를 반환한다고 생각하면 된다.<br>
*call, apply와의 차이점은 call, apply는 실행결과로 함수가 호출이지만 bind는 새로운 함수를 리턴한다는 점이다. <br><br>

```js
function say(grettings, honorifics) {
  console.log(grettings + " " + honorifics + " " + this.name)
}

var phrygia = { name: "phrygia" }
var sayToPhrygia = say.bind(phrygia)

// Nice to meet you I'm phrygia
sayToPhrygia("Nice to meet you", 'I"m')
```

위 코드에서 sayToPhrygia 함수를 호출하면 항상 this가 객체 phrygia를 가리킨다.
<br>

위의 3가지 프로퍼티들은 this값과 인수를 사용하여 실행하며 this를 지정하는데 유용한 메소드들이다.
this는 메서드 내부의 객체에 접근 할 수 있기도 하고 실행컨텍스트에 따라 this의 값이 다르기 때문에 꼭 알아둬야 할 중요한 개념이다. 다음번엔 this에 대한 정리를 해봐야 겠다.

<small class="from add">참고 : 모던 자바스크립트 입문(이소 히로시), <a href="https://developer.mozilla.org/ko/" target="_blank">MDN</a></small>
