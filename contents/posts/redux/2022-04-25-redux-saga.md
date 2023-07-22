---
title: "[redux] Redux Saga"
date: "2022-04-25 19:26:00"
description: ""
tags:
  - redux
---

Redux의 미들웨어 라이브러리 중 한 개로 Redux-thunk, Redux-toolkit 등 다양한 라이브러리가 존재하지만 Redux-saga를 사용하는 기업이 많다. <br>
Redux-saga는 다른 라이브러리에 비해 더 복잡한 비동기 처리를 할 수 있다는 장점이 있다. <br>
단점은 러닝커브가 높고 제네레이터라는 문법에 익숙하지 않다면 어색하게 느껴 질 수 있다. 또한 코드가 길어져 복잡해질 수 있다. <br>
(최근엔 toolkit도 많이 쓰이며 saga의 기능을 설치하여 연동 가능하다고 하니 toolkit도 공부하면 좋을 것 같다.)

## 선수지식 - 제너레이터 (Generator)

- 함수에 \*를 붙이고, yield라는 문법을 사용
- next()를 이용하여 다음 yield를 호출

```js
const gen = function* () {
  console.log(1)
  yield
  console.log(2)
  yield
  console.log(3)
}
const gener = gen()
gener().next() // 1
gener().next() // 2
gener().next() // 3
gener().next() // undifined
```

## Redux-saga 주요 Effects

### 1. fork

`fork`는 함수의 비동기적인 호출을 할 때 사용하며 순서 상관없이 실행할 때 사용한다.

```js
export default function* cartSagas() {
  yield all([
    fork(watchCartList),
    fork(watchAddToCart),
    fork(watchIncrementItem),
    fork(watchDecrementItem),
    fork(watchRemoveItem),
  ])
}
```

### 2. call

`call`은 동기 실행을 보장하며 순서대로 함수를 실행해야하는 API 요청 같은 곳에 사용한다. <br>
함수의 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수다.

```js
// 장바구니 상품 조회
const cartListAPI = async payload => {
  await fetch(`${url}/cart-items`, {
    method: "GET",
    headers: header,
  })
  return payload
}

function* cartList(action) {
  try {
    const result = yield call(cartListAPI, action.payload)
    const json = yield call([result, "json"])
    yield put({
      type: CART_LIST_SUCCESS,
      payload: json,
    })
  } catch (e) {
    yield put({
      type: FAILURE,
      payload: result.statusText,
    })
  }
}

function* watchCartList() {
  yield takeLatest(CART_LIST_REQUEST, cartList)
}
```

### 3. put

특정 액션을 dispatch하도록 한다.

```js
function* loadComments(action) {
  try {
    const result = yield call(loadCommentsAPI, action.payload)
    yield put({
      type: COMMENT_LOADING_SUCCESS,
      payload: result.data,
    })
  } catch (e) {
    yield put({
      type: COMMENT_LOADING_FAILURE,
      payload: e,
    })
  }
}
```

### 4. takeEvery

`takeEvery`는 모든 액션에 대해 특정 작업을 처리해준다. <br>
while(true)로 감싸는 효과가 있다.

```js
function* watchLoadComments() {
  yield takeEvery(COMMENT_LOADING_REQUEST, loadComments)
  // → 들어오는 모든 COMMENT_LOADING_REQUEST 액션에 대해 loadComments 함수 실행
}
```

### 5. takeLatest

같은 종류의 액션이 여러 번 요청된다면 취소 처리하고 가장 마지막 액션 작업만 수행된다.

- `takeEvery`는 모든 액션을 처리하고 `takeLatest` 가장 마지막 액션만 처리
- ex) 특정 버튼을 여러 번 클릭하는 경우에 사용

```js
function* watchCartList() {
  yield takeLatest(CART_LIST_REQUEST, cartList)
  // → 들어오는 모든 CART_LIST_REQUEST 액션에서 가장 마지막 cartList 함수 실행
}
```

### 6. delay

설정된 시간 이후에 resolve 하는 Promise 객체를 리턴한다. <br>
보통 일정 시간 후 다음 함수 단계 실행하도록 한다.

```js
function* upLoadComments(action) {
  try {
    const result = yield call(upLoadCommentsAPI, action.payload)
    yield delay(1000) // 1초 후 COMMENT_UPLOADING_SUCCESS 액션 실행
    yield put({
      type: COMMENT_UPLOADING_SUCCESS,
      payload: result.data,
    })
  } catch (e) {}
}
```

<small class="from add">참고 : <a href="https://kyounghwan01.github.io/blog/React/redux/redux-saga/#%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB-%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B2" tearget="_blank">https://kyounghwan01.github.io/blog/React/redux/redux-saga/#사용하는-이유</a>
</small>
