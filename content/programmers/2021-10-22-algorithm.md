---
emoji: 📓
title: '[algorithm] JS 약수, 소수, 최대공약수, 최소공배수'
date: '2021-10-22 14:00:00'
author: phrygia
tags: js posts
categories: js algorithm
---

프로그래머스에서 자바스크립트 알고리즘 문제를 풀다보면 간간히 접하게 되는 수학관련 문제들이 있다.
그 중 자연수와 관련된(약수, 소수, 최대공약수, 최소공배수) 문제들이 있었는데 이에 대한 이론을 정리하고 프로그래머스 코딩테스트 연습에 나오는 문제들을 풀어보면서 정확한 개념을 터득하고자 정리해 보았다. <br>
(문제 - 약수의 합, 약수의 개수와 덧셈, 소수 만들기, 소수 찾기, 최대공약수와 최소공배수, N개의 최소공배수)
<br><br>

## 1. 약수

**약수란 무엇인가?** <br>
&nbsp;&nbsp;&nbsp;&nbsp;어떤 수를 나머지가 없이 나누어떨어지게 하는 수를 그 수의 약수라고 한다. <br>
&nbsp;&nbsp;&nbsp;&nbsp;예를 들면 8을 1, 2, 4, 8로 나누면 나머지가 없다. 이때 1, 2, 4, 8을 8의 약수라고 한다.<br><br>

**1. 약수의 합** <br>
<p style="border-bottom: 1px solid #ddd; font-weight: 500; padding-bottom:5px;">1) 문제 설명</p>
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요. <br><br>
<p style="border-bottom: 1px solid #ddd; font-weight: 500; padding-bottom:5px;">2) 제한 조건</p>
n은 0이상 3000이하의 자연수 입니다.<br><br>
<p style="border-bottom: 1px solid #ddd; font-weight: 500; padding-bottom:5px;">3) 문제 풀이</p>

```js
function solution(n) {
    var answer = 0;
    return answer;
}
```

<small class="from">https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript</small> <br>

**2. 약수의 개수와 덧셈**
<p style="border-bottom: 1px solid #ddd; font-weight: 500; padding-bottom:5px;">1) 문제 설명</p>
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요. <br><br>
<p style="border-bottom: 1px solid #ddd; font-weight: 500; padding-bottom:5px;">2) 제한 조건</p>
1 ≤ left ≤ right ≤ 1,000.<br><br>
<p style="border-bottom: 1px solid #ddd; font-weight: 500; padding-bottom:5px;">3) 문제 풀이</p>

```js
function solution(left, right) {

}
```

<small class="from">https://programmers.co.kr/learn/courses/30/lessons/77884?language=javascript</small>
<br><br>

## 2. 소수

**소수란 무엇인가?** <br>
&nbsp;&nbsp;&nbsp;&nbsp;d

**3. 소수 만들기**
<p style="border-bottom: 1px solid #ddd; font-weight: 500; padding-bottom:5px;">1) 문제 설명</p>
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요. <br><br>
<p style="border-bottom: 1px solid #ddd; font-weight: 500; padding-bottom:5px;">2) 제한 조건</p>
- nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
- nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
<br><br>
<p style="border-bottom: 1px solid #ddd; font-weight: 500; padding-bottom:5px;">3) 문제 풀이</p>

```js
function solution(nums) {
    var answer = -1;
    
    return answer;
}
```
<small class="from">https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript</small><br><br>

**4. 소수 찾기**
```js
```
<small class="from">https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript</small><br><br>

**5. 소수 찾기**
```js
```
<small class="from">https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript</small><br><br>

## 3. 최대공약수

**6. 최대공약수와 최소공배수**
```js
```
<small class="from">https://programmers.co.kr/learn/courses/30/lessons/12940?language=javascript</small><br><br>

## 4. 최소공배수

**7. N개의 최소공배수**
```js
```

<small class="from">https://programmers.co.kr/learn/courses/30/lessons/12953?language=javascript</small><br><br><br>
<div class="from add">참고 : 모던 자바스크립트 입문(이소 히로시), <a href="https://developer.mozilla.org/ko/" target="_blank">MDN</a></div>

```toc

``` 