---
emoji: 📓
title: '[react] styled-components 반응형 스타일 설정하기'
date: '2022-01-27 17:06:00'
author: phrygia
tags: react posts
categories: react
---

react를 배우던 초창기에는 `@media (min-width: 768px) {} @media (max-width: 767px) {}`를 일일히 써주면서 코딩했던 기억이 있다. <br>
사이드 프로젝트에서 styled-components를 사용하고 있는데 저 코드를 일일히 썼을 때 디자이너분이 사이즈의 기준을 바꾸거나 하 코딩한 모든 컴포넌트를 수정해야 한다. <br>
react로 여러가지 개인 프로젝트나 팀 프로젝트를 진행해보았기 때문에 저런 하드코딩적인 느낌을 지우고 싶었다. <br>
styled-components에는 `ThemeProvider`라는 속성을 사용해 공통으로 스타일을 관리해 줄 수 있다고 한다. <br><br>

## ThemeProvider
Context API를 기반으로 작동하기 때문에 ThemeProvider로 감싸진 모든 하위 컴포넌트들은 전달받은 theme를 props로 사용할 수 있다.<br>
*특히 color사용에 좋다 → 프로젝트를 진행하면서 메인컬러가 바뀌는 경우가 있는데 모든 컴포넌트를 수정하는건 너무 비효율적이다.<br><br>

\/assets/style/theme.js

```js
const size = {
  mobile: '767px',
  desktop: '768px',
};

const theme = {
  mainColor: '#4748C6',
  subColor: '#1B1B1B',
  mobile: `(max-width: ${size.mobile})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
```
<br>

App.js (또는 index.js)
```js
import { ThemeProvider } from 'styled-components';
import theme from './assets/style/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};
```
<br>

## theme 사용하기
<h4> 1. styled-component에서 사용하기</h4>

\${props => props.theme.속성명}으로 사용

```js
import React from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.section`
  @media ${props => props.theme.desktop} {
    background-color: ${(props) => props.theme.mainColor};
  }
  @media ${props => props.theme.mo} {
    background-color: ${(props) => props.theme.subColor};
  }
`;

const Register = () => {
  return (
    <RegisterContainer>
        ...
    </RegisterContainer>
  );
};
export default Register;
```
<br>

<h4> 2. Component의 props로 사용하기</h4>
useContext와 ThemeContext를 사용해서 theme의 값을 사용하여 컴포넌트의 props style로 전달하기

```js
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const RegisterContainer = styled.section`
  ...
  background-color: ${(props) => props.textColor ? props.textColor : "#323232"};
`;

const Register = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <RegisterContainer textColor={themeContext.mainColor}>
        ...
    </RegisterContainer>
  );
};
export default Register;
```
<br><br>

## Global 스타일 설정하기
모든 컴포넌트에서 쓰일 기본 스타일을 정의 할 수 있다.

```js
// assets/style/GlobalStyle.js
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }
`
export default GlobalStyle

// App.js
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
};
```

theme.js 파일안에 공통된 font-size, color등을 설정하면 더욱 활용도가 높아질 것 같다.

<div class="from add">참고 : <a href="https://velog.io/@hoi/Styled-components-ThemeProvider를-활용한-스타일-환경-구축" target="_blank">https://velog.io/@hoi/Styled-components-ThemeProvider를-활용한-스타일-환경-구축</a></div>

```toc
```
