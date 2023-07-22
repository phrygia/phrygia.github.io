---
title: "[web] Storage vs Cookie"
date: "2022-04-25 19:24:00"
description: ""
tags:
  - web
---

## 브라우저 저장소 (Web Storage)

웹의 <u>데이터를 클라이언트에 저장할 수 있는</u> 자료구조다.
HTML5에서는 웹 사이트의 데이터를 클라이언트에 저장할 수 있는 새로운 자료구조인 Web Storage 스펙이 포함되어있다.<br>
`key:value` 쌍으로 데이터를 저장하고 `key`를 기반으로 데이터를 조회하는 패턴이다. <br>
내부적으로는 영구저장소(LocalStorage)와 임시저장소(SessionStorage)가 분리되어 데이터 지속성에 따라 구분할 수 있어 응용 환경에 맞는 선택이 가능하다. <br>
Web Storage는 Local Storage와 Session Storage 두 가지 방식이 있다.

### Web Storage의 특징

1. 서버 전송이 없다 : 데이터를 서버로 전송하지 않기 때문에 트래픽 비용을 아낄 수 있다.
2. 브라우저별 용량제한이 다르다.
3. 영구적으로 저장이 가능하다 : 만료기간 없이 영구적으로 데이터를 저장할 수도 있다.<br>
   (Local Storage = 만료기한 없음, Session Storage = 세션 종료 시 만료)
4. 키와 값은 문자열로 변환되어 저장된다.
5. 쿠키 보다 보안이 우수하며 많은 정보를 담을 수 있다.

- 장점 : 서버에 불필요한 데이터를 저장을 안 하고, 저장할 수 있는 용량이 크다.
- 단점 : HTML5를 지원되는 브라우저에서 사용이 가능하다.

### 1. 로컬 스토리지 (Local Storage)

- 저장한 데이터 영구적으로 보관가능 (브라우저 종료하더라도 데이터가 남아있다.)
- 도메인 마다 별도로 localStorage가 생성된다.
- Windows 전역 객체의 LocalStorage라는 컬렉션을 통해 저장/조회가 이루어 진다.
- Session Storage와 Cookie에 비해 저장 공간이 크다. (최대 5MB까지)

```js
// localStorage 저장
localStorage.setItem("token", "XXXXXXXX")
localStorage.setItem("token", JSON.stringfy(value))

// localStorage 조회
localStorage.getItem("token")
JSON.parse(localStorage.getItem("token"))

// localStorage 설정된 키로 삭제
localStorage.removeItem("token")

// localStorage 전체 삭제
localStorage.clear()
```

### 2. 세션 스토리지 (Session Storage)

- 데이터가 지속적으로 보관되지 않는다. 현재 페이지가 브라우징 되고 있는 브라우저 컨텍스트 내에서만 데이터가 유지된다. <br>
  (브라우저가 종료되면 데이터도 같이 지워진다.)
- Windows 전역 객체의 sessionStorage 컬렉션을 통해 저장/조회가 이루어진다.
- 도메인별로 생성된다.<br>
  (브라우저 컨텍스트가 다르기 때문 같은 도메인/사이트라 하더라도 브라우저가 다르면 서로 다른 영역이된다.)
- 브라우저를 하나 더 실행해서 동일한 페이지를 열었을 때, 두페이지의 sessionStorage는 별개의 영역으로 서로 침범하지 못한다.

```js
// sessionStorage 저장
sessionStorage.setItem("token", "XXXXXXXX")
sessionStorage.setItem("token", JSON.stringfy(value))

// sessionStorage 조회
sessionStorage.getItem("token")
JSON.parse(sessionStorage.getItem("token"))

// sessionStorage 설정된 키로 삭제
sessionStorage.removeItem("token")

// sessionStorage 전체 삭제
sessionStorage.clear()
```

## Cookie

- 쿠키를 설정하면 쿠키 정보를 포함하여 서버로 보내진다. <br>
  쿠키에 사용자의 정보를 담아서 서버로 전송하면 서버에서 사용자를 확인할 수 있다. 서버와 클라이언트 간의 지속적인 데이터 교환을 위해 만들어 졌기 때문에 서버로 계속 전송된다.
- 서버에서 데이터 만료일을 설정하고 관리한다.
- 4KB 이하의 아주 작은 데이터를 보관한다.
- 클라이언트에서 읽을 수 있지만, 보통 서버 사이드에서 읽는 데이터 이다.
- 클라이언트에서 쿠키 접급을 방지할 수 있다. (httpOnly= true)
- 종류 : persistent cookies, session cookies
- persistent cookies: 브라우저나 탭이 열려있는 동안에만 저장되며 만료일이 포함되지 않는다 - ex) 은행의 자격 증명 등
- session cookies: 만료일까지 사용자의 브라우저에 저장되고 만료일이 지나면 삭제된다 - ex) 사용자의 행동 기록 등

**\*cookie property**

<table class="ph_tbl">
  <tr>
    <th>property</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>name=</td>
    <td>쿠키의 이름과 값을 설정</td>
  </tr>
  <tr>
    <td>expires= </td>
    <td>쿠키가 만료일 설정 (expires 값이 없으면 브라우저를 닫을때 소멸)</td>
  </tr>
  <tr>
    <td>path=</td>
    <td>쿠키가 적용될 사이트의 패스를 지정하고자 하는 경우 사용</td>
  </tr>
  <tr>
    <td>domain= </td>
    <td>쿠키를 사용할 도메인을 지정</td>
  </tr>
  <tr>
    <td>httpOnly</td>
    <td>자바스크립트에서 쿠키에 접근할 수 없다.</td>
  </tr>
</table>

```js
// 쿠키 생성하기
const setCookie = (name, value, expiredays) => {
  const today = new Date()
  today.setDate(today.getDate() + expiredays)
  document.cookie = `${name}=${escape(
    value
  )}; path=/; expires=${today.toGMTString()};`
}

// 쿠키 조회하기
const getCookie = key => {
  let result = null
  const cookie = document.cookie.split(";")
  cookie.some(val => {
    val = val.replace(" ", "")
    const dic = val.split("=")
    if (key === dic[0]) return (result = dic[1])
  })
  return result
}

setCookie("쿠키생성", "여기는 내용", 1) // 만료일 : 1일
getCookie("쿠키생성")
```

## Web Storage vs Cookie

<table class="ph_tbl">
  <tr>
    <th></th>
    <th>Local Storage</th>
    <th>Session Storage</th>
    <th>Cookie</th>
  </tr>
  <tr>
    <th>저장 위치</th>
    <td>클라이언트에 존재 (서버 전송 X)</td>
    <td>클라이언트에 존재 (서버 전송 X)</td>
    <td>매번 서버로 전송되어 서버에 저장</td>
  </tr>
  <tr>
    <th>데이터 유지 측면</th>
    <td>영구보관</td>
    <td>브라우저 종료시 삭제됨</td>
    <td>반영구 (만료일 설정)</td>
  </tr>
  <tr>
    <th>데이터 범위 측면</th>
    <td>도메인만 같으면 전역적으로 공유 가능</td>
    <td>도메인별로 별도로 생성 (공유 x)</td>
    <td></td>
  </tr>
  <tr>
    <th>지원</th>
    <td>html5 지원 브라우저</td>
    <td>html5 지원 브라우저</td>
    <td>대부분의 브라우저 지원</td>
  </tr>
  <tr>
    <th>용량</th>
    <td>5MB</td>
    <td>5MB</td>
    <td>최대 쿠키 수: 20개, 최대쿠키 크기: 4KB</td>
  </tr>
  <tr>
    <th>추천 상황</th>
    <td>자동 로그인, 다크/라이트 모드</td>
    <td>입력 폼 정보, 비로그인 장바구니, 페이지 이동 시 스크롤 위치 값</td>
    <td>팝업 창</td>
  </tr>
</table>
