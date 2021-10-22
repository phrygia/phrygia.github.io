---
emoji: 📓
title: "[javascript] 객체 수정 제어 : preventExtensions(), seal(), freeze()"
date: '2021-09-21 13:12:00'
author: phrygia
tags: js posts
categories: js
---

`const`는 블록 스코프이며, 변수의 재선언 및 재할당이 모두 불가능하다.<br>
흔히 여기서 오는 오해 중 하나가 const로 정의하면 객체 속성값도 수정할 수 없다고 생각하지만, const로 정의해도 객체의 내부 속성값은 수정이 가능하다. (객체를 참조하는 변수를 수정하는 것은 불가능 하다.)

**- JS** 
```js
const fruit = { name: 'banana' };
fruit.name = 'apple';
fruit.color = 'red';
console.log(fruit);  // { name: 'apple', color: 'red' };

//배열도 객체의 일종이기 때문에 속성값을 수정할 수 있다.
const array = [1, 2];
array[0] = 10;
array.push(30);
console.log(array);  // [10, 2, 30];

// const로 정의된 변수에 재할당은 불가능하다.
const fruit = { name: 'banana' };
fruit = { color: 'apple' };  // 에러
```


객체에서 이미 존재하는 속성값을 수정하거나 새로운 값을 추가하는 것은 모두 가능하다. 객체의 내부 속성값을 수정하지 못하게 하고 싶다면 유명한 불변성 패키지인 immer.js, immutable.js 등을 사용하면 된다. (immer.js는 리액트에서도 많이이 쓰이기 때문에 알아두면 좋다.) 이러한 패키지들은 기존 객체를 수정하지 않고 새롭게 객체를 생성한다.
<br><br>

다음의 JS내장 함수는 불변성 외부 패키지에서 새롭게 객체를 생성하는 편의성은 필요 없고 수정만 할 수 없도록 만들고 싶을 때 사용하면 유용하다.
- Object.preventExtensions
- Object.seal
- Object.freeze
<br><br><br>

## 1. Object.preventExtensions
&nbsp;&nbsp;&nbsp;새로운 속성을 객체에 추가되는 것을 방지한다. (**확장 금지**) 값의 추가만 금지되고 삭제, 속성 변경, 프로퍼티에 값을 할당하는 작업은 가능하다.<br>
&nbsp;&nbsp;&nbsp;Object.preventExtensions(obj)&nbsp;&nbsp; // obj : 확장을 방지할 대상 객체.
<br>

```js
const object1 = { prop1: "work?" };
console.log(object1);   //Object { prop1: "work?" }

// 객체가 확장 가능한지 여부 판별
console.log(Object.isExtensible(object1));   //true

// 확장 금지
Object.preventExtensions(object1);
console.log(Object.isExtensible(object1));   //false

// 값을 추가해도 추가되지 않는다.
object1.prop2 = "add";
console.log(object1)   //Object { prop1: "work?" }

// 프로퍼티에 값을 할당하는 작업은 가능하다.
object1.prop1 = "change!";   
console.log(object1)   //Object { prop1: "change!" }

// 프로퍼티의 값을 삭제하는 것도 가능하다.
delete object1.prop1
console.log(object1)   //Object {  }
```
<br><br>

## 2. Object.seal
&nbsp;&nbsp;&nbsp;객체를 **봉인**해서 새로운 속성을 추가하거나 제거하지 못하게 한다. 기존 프로퍼티를 변경하는 것은 불가능 하지만 쓰기 가능한 속성(writable)의 값은 변경할 수 있다. <br>
&nbsp;&nbsp;&nbsp;Object.seal(obj)&nbsp;&nbsp; // obj : 봉인할 객체.
<br>

```js
const object1 = { 
    foo: "foo", 
    bar: function () { 
        return "bar"; 
    } 
};

// 객체 봉인
Object.seal(object1);

// 객체가 봉인됐는지 여부 판별
console.log(Object.isSealed(object1));   //true

// 객체 추가 불가능
object1.addFoo = "addFoo";

// 기본적으로 프로퍼티의 writable은 true로 설정되어 있기 때문에 수정 불가능하게 만들고 싶다면 false로 수정한다.
object1.foo = "change !"
Object.defineProperty(object1, 'foo', { 
    writable: false
}); 
object1.foo = "change !!"

// writable을 false로 선언하기 전에 바꾼 속성값으로 적용되어 있다.
console.log(object1);   // Object { foo: "change !", bar: function () { return "bar"; } }

// 객체 삭제 불가능
delete object1.foo;
console.log(object1);   // Object { foo: "change !", bar: function () { return "bar"; } }
```
<br><br>

## 3. Object.freeze
&nbsp;&nbsp;&nbsp;이 메서드는 객체를 **동결** 시키며, 다음과 같은 작업이 불가능해진다. 동결은 소개하는 3가지 메서드중 가장 높은 단계의 불변성을 적용한다.
- 새로운 속성(메서드, 프로퍼티) 추가 금지
- 존재하는 속성 제거 금지
- 존재하는 속성의 불변성, 설정 가능성(configurability), 작성 가능성 변경 금지
- 존재하는 속성의 값 변경 금지
- 프로포타입 변경 금지

&nbsp;&nbsp;&nbsp;Object.freeze(obj)&nbsp;&nbsp; // obj : 동결할 객체.

```js
const object1 = {
  prop1: 42
};

Object.freeze(object1);

// 객체가 동결됐는지 여부 판별
console.log(Object.isFrozen(object1))   // true

// 객체 추가 불가능
object1.prop2 = 'add';
console.log(object1);   // Object { prop1: 42 }

// 객체 수정 불가능
object1.prop1 = 33;   // strict모드 에서는 Error 출력
console.log(object1.prop1);   // 42

// 객체 삭제 불가능
delete object1.prop1;
console.log(object1);   // Object { prop1: 42 }
```
<br><br>

- "use strict" 모드를 사용
- *위의 메서드가 적용되어진 객체가 참조하는 다른 객체까지 수정 제어하는 것이 아니기 때문에 얕은 불변성만 지원한다. 더욱 엄격하게 객체를 제어하고 싶다면 외부 패키지를 이용하면 더 좋을 것 같다.

<br><br>
<div class="from add">- 참고
    <ul>
        <li>실전리액트 프로그래밍 - 이재승</li>
        <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions</a></li>
        <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/seal" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/seal</a></li>
        <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze</a></li>
    </ul>
</div>

```toc

```
