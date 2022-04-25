---
emoji: 📓
title: '[react] Virtual Dom (가상 돔)'
date: '2022-04-25 19:26:00'
author: phrygia
tags: react posts
categories: react
---

<br>
리액트를 사용하면서 virtual dom(VDOM)과 관련된 글을 많이 보게 되었다. <br>
virtual dom, 직역하면' 가상의 dom'이란 뜻인데 의미만으론 정확한 개념을 알수가 없었다. <br>
VDOM엔 대해 알기위해서 팔요한 선행지식에 대해 알아보자 <br><br>

## 브라우저 workflow

<br>
Virtual DOM을 사용하는 이유를 알기 위해서는 우리가 사용하는 브라우저가 어떻게 동작하는지 알아야 할 필요가 있다. <br><br>

<h4>렌더링 엔진의 동작 과정</h4><br>

<img src="https://d2.naver.com/content/images/2015/06/helloworld-59361-2.png"><br><br><br>
<img src="https://d2.naver.com/content/images/2015/06/helloworld-59361-3.png">
<small class="from">이미지 출처 : <a href="https://d2.naver.com/helloworld/59361" target="_blank">브라우저는 어떻게 동작하는가?</a></small>

### DOM Tree 생성

브라우저가 서버에서 HTML을 전달받으면, 렌더링 엔진이 HTML을 파싱하고, DOM의 Node로 이루어진 트리를 만든다. (Node는 html 엘리먼트와 연관) <br>

### Render Tree 생성

css파일과 각 엘리먼트의 inline 스타일을 파싱하고 CSSOM을 생성한다. (노드의 스타일을 처리하는 과정 : 어테치먼트) <br>
→ DOM Tree와 CSSOM을 결합하여 새로운 **Render Tree**를 생성한다.

### Layout (=Reflow)

생성된 렌더트리의 각 노드들이 스크린상의 좌표가 주어지고, 어느 공간에 위치해야 하는지가 결정된다. <br>
(position이나 size 등이 여기서 계산된다)

### Painting

구성된 레이아웃을 화면에 그리는 과정이 진행된다. 트리의 각 노드들을 거쳐가면서 화면이 스크린에 나타난다. <br>
DOM을 임의적으로 조작을 하면 이 과정들이 반복된다.  
<br>

## Virtual DOM

DOM에 하나라도 변화가 생기면 렌더트리 재생성~~페인팅 과정이 반복된다. 이 과정들이 반복될수록 브라우저가 많은 연산을 하게되고 전체적인 성능이 떨어지고 속도가 느려지게 된다.

리액트는 SPA(Single Page Application)로써, SPA로 만들어진 페이지의 DOM 객체는 매우 많고 복잡하다. DOM이 많아진 만큼 DOM의 조작이 많이 발생하게 되기때문에 비효율적인 프로세스가 만들어진다.

Virtual DOM은 DOM의 변화가 실제 DOM에 적용되기 전의 변화들을 감지한다. 변경사항을 메모리에 올라간 가상 DOM을 수정하고 실제 DOM과 비교하여 변경된 부분만 실제 DOM에 반영한다. <br> 이로 인해 더 반응성이 빠른 웹을 구현할 수 있다.

Virtual DOM은 실제 DOM의 복사본이다. 리액트는 Virtual DOM을 두고 개발자는 직접 DOM을 제어하지 않고 Virtual DOM을 제어한다. (React가 DOM과 Virtual DOM을 비교하여 반영한다.)
<br> <br>

## 리액트는 이전과 현재의 Virtual DOM을 어떻게 비교할까?

리액트는 render() 함수를 통해 리액트 엘리먼트들의 트리를 만든다. 리액트의 state값이 바뀌면서 리렌더링이 발생하면 render() 함수는 새로운 리액트 엘리먼트 트리를 생성해서 리턴해줘야 한다. 하나의 트리가 N개의 엘리먼트를 가지고 있을때 새로운 엘리먼트 트리로 변환하는데는 O(n³)시간이 소요되는 적지않는 시간이 소요된다.

그래서 리액트의 Virtual DOM은 이전과 VDOM과 현재의 VDOM을 비교해서 바뀐 부분만 변경한다. (최적화에 유리) <br>

리액트에서 가장 효과적으로 업데이트된 부분만을 찾아서 갱신하는 방법으로 `Reconciliation`이 있다. <br>

- Reconciliation : 직전에 렌더링된 엘리먼트와 새로 반환된 엘리먼트를 비교하여 두 엘리먼트가 일치하지 않으면 리액트는 새로운 요소로 DOM을 업데이트하는 프로세스.
  <br><br>

↓ Reconciliation은 리액트 공식문서에 자세히 나와있으니 참고

<iframe src="https://ko.reactjs.org/docs/reconciliation.html" style="width:100%; height:400px; border: 1px solid #ddd"></iframe>
<a href="https://ko.reactjs.org/docs/reconciliation.html" traget="_blank">https://ko.reactjs.org/docs/reconciliation.html</a>

<br>

```toc

```
