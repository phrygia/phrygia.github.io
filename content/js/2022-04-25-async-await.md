---
emoji: 📓
title: '[js] Async await'
date: '2022-04-25 19:26:00'
author: phrygia
tags: js posts
categories: js
---

async/await는 ES8에서 채택되었으며 제너레이터보다 간단하고 가독성 좋게 비동기 처리를 동기처럼 동작하도록 구현할 수 있다. <br>
프로미스를 기반으로 동작하며 프로미스의 then/catch/finally 후속 처리 메서드에 콜백 함수를 전달해서 비동기 처리 결과를 후속 처리할 필요 없이 마치 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다. <br><br>

## 제너레이터 (Generator)

Es6에서 도입된 제너레이터는 코드 블록의 실행을 일시 중지시켰다가 필요한 시점에 재개할 수 있는 특수한 함수다. <br>
제너레이터는 이터레이터를 발생시키는 함수로 사용되면 function\* 키워드로 선언한다. <br>
제너레이터 함수는 화살표 함수로 정의하 수없으며 new 연산자와 함께 생성자 함수로 호출할 수 없다. <br>
**\*이터레이터(iterator)?** {value, done} 객체를 리턴하는 next()를 가진 값 <br>

```js
// 제너레이터 함수 선언문
function* generatorFunc() {
  yield 1;
}
// 제너레이터 메서드
const obj = {
  *genObjMethod() {
    yield 1;
  },
};
// 제너레이터 클래스 메서드
class GenClass {
  *genClsMethod() {
    yield 1;
  }
}
```

<br>

### \*제너레이터 vs 일반함수

1. **제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다.** <br>
   - 일반 함수를 호출하면 제어권이 함수에게 넘어가고 함수 코드를 일괄 실행한다. (호출 이후 함수 실행을 제어할 수 없다.)
   - 제너레이터 함수는 함수 실행을 함수 호출자가 제어할 수 있다. (함수 제어권을 호출자에게 양도 할 수 있다.)
2. **제너레이터 함수는 함수 호출자와 함수의 상태를 주고 받을 수 있다.** <br>
   - 일반함수는 함수가 실행되고 있는 동안에는 함수 외부에서 함수 내부로 값을 전달하여 함수의 상태를 변경할 수 없다.
   - 제너레이터 함수는 함수 호출자에게 상태를 전달할 수 있고 함수 호출자로부터 양방향으로 상태를 전달받을 수도 있다.
3. **제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.**
   - 일반 함수를 호출하면 함수 코드를 일관 실행하고 값을 반환한다.
   - 제너레이터 함수를 호출하면 함수 코드를 실행하는 것이 아니라 이터러블이면서 동시에 이터레이터인 제너레이터 객체를 반환한다.

**\*이터러블(iterable)?** iterator를 리턴하는 \[Symbol.iterator]() 를 가진 값 <br><br>

\*비동기 처리를 동기처리처럼 구현

```js
// 제너레이터 실행기
const async = (generatorFunc) => {
  const generator = generatorFunc();

  const onResolved = (arg) => {
    const result = generator.next(arg);

    return result.done ? result.value : result.value.then((res) => onResolved(res));
  };
  return onResolve;
};

async(function* fetchTodo() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  const response = yield fetch(url);
  const todo = yield response.json();
  console.log(todo);
  // {userId: 1, id: 1, title: 'delecus aut autem', completed: false}
})();
```

<br>

## async/await

제너레이터를 사용해서 비동기 처리를 동기 처리처럼 동작하도록 구현했지만 코드가 장황해지고 가독성이 나쁘다. 이는 async/await를 사용하면 해결할 수 있다.

### async 함수

await 키워드는 반드시 async 함수 내부에서 사용해야 한다. async 함수는 언제나 프로미스를 반환한다. async 함수가 명시적으로 프로미스를 반환하지 않더라도 async 함수는 암묵적으로 반환값을 resolve하는 프로미스를 반환한다.

```js
// async 함수 선언문
async function foo(n) {
  return n;
}
foo(1).then((v) => conole.log(v)); // 1

// async 함수 표현식
const bar = async function (n) {
  return n;
};
bar(2).then((v) => conole.log(v)); // 2

// async 화살표 함수
const baz = async (n) => n;
baz(3).then((v) => console.log(v)); // 3

// async 메서드
const obj = {
  async foo(n) {
    return n;
  },
};
obj.foo(4).then((v) => console.log(v)); // 4

// async 클래스 메서드
class MyClass {
  async bar(n) {
    return n;
  }
}

const myClass = new MyClass();
myClass.bar(5).then((v) => conole.log(v)); // 5
```

클래스의 constructor 메서드는 async 메서드가 될 수 없다. 클래스의 constructor 메서드는 인스턴스를 반환해야 하지만 async 함수는 언제나 프로미스를 반환해야 한다. <br><br>

### await 키워드

await 키워드는 프로미스가 settled 상태(비동기처리가 수행된 상태)가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환한다. await 키워드는 반드시 프로미스 앞에서 사용해야 한다.

```js
const getGithubUserName = async (id) => {
  // fetch 함수가 수행한 HTTP 요청에 대한 서버의 응답이 도책해서 반환된 프로미스가 settled 상태가 될때까지 대기
  const res = await fetch(`https://api.github.com/user/${id}`);

  // 이후 프로미스가 settled 상태가 되면 프로미스가 resolve한 처리 결과가 res 변수에 할당된다.
  const { name } = await res.json();
  console.log(name);
};
getGithubUserName('phrygia');
```

```js
async function foo() {
  const a = await new Promise((resolve) => setTimeout(() => resolve(1), 3000));
  const b = await new Promise((resolve) => setTimeout(() => resolve(2), 2000));
  const c = await new Promise((resolve) => setTimeout(() => resolve(3), 1000));

  console.log([a, b, c]); // [1, 2, 3]
}
foo(); // 6초 소요
```

<br>

### 에러 처리

비동기 처리를 위한 콜백 패턴의 단점 중 가장 심각한 것은 에러 처리가 곤란하다는 것이다. 하지만 async/await는 try...catch문을 사용할 수 있다. 콜백 함수를 인수로 전달받는 비동기 함수와는 달리 프로미스를 반환하는 비동기 함수는 명시적으로 호출할 수 있다. <br>

```js
const foo = async () => {
  try {
    const wrongUrl = 'https://wrong.url';

    const response = await fetch(wrongUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
```

**async 함수 내에서 catch 문을 사용해서 에러 처리를 하지 않으면 async 함수는 발생한 에러를 reject하는 프로미스를 반환한다.** 따라서 async 함수를 호출하고 Promise.prototype.catch 후속 처리 메서드를 사용해 에러를 캐치할 수도 있다.

```js
const foo = async  () => {
	const wrongUrl  = "https://wrong.url";

	const response = await fetch(wrongUrl);
	const data = await response.json();
	return data;
}

foo().
	.then(console.log)
	.catch(console.error);
```

<br>

#### 에러 처리의 필요성

에러가 발생하지 않는 코드를 작성하는 것은 불가능하다. 따라서 에러는 언제나 발생할 수 있다. 발생한 에러에 대해 대처하지 않고 방치하면 프로그램은 강제 종료된다. <br>
try/catch 문을 사용해 발생한 에러에 적절하게 대응하면 프로그램이 강제 종료되지 않고 계속해서 코드를 실행시킬 수 있다.

```js
// 1. 에러 발생상황
console.log('[Start]');

foo(); // ReferenceError: foo is not defined
// 에러에 의해 프로그램이 강제 종료된다.

// 프로그램의 종료로 인해 End는 출력되지 않는다.
cosnole.log('[End]');

// 2. try/catch
console.log('[Start]');
try {
  foo();
} catch (err) {
  console.error('[에러 발생]', err);
  // [에러 발생] ReferenceError: foo is not defined
}

// 발생한 에러에 적절한 대응을 하면 프로그램이 강제 종료되지 않는다.
cosnole.log('[End]');

// 3. DOM에 button 요소가 존재하지 않으면 querySelector 메서드는 에러를 발생시키지 않고 null을 반환한다.
const $button = document.querySelector('button'); // null

// 옵셔널 체이닝 연산자 (?.)를 사용하지 않으면 TypeError가 발생한다.
$button?.classList.add('disabled');
```

<br>

```toc

```
