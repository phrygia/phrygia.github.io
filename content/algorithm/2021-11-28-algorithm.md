---
emoji: 📓
title: '[algorithm] LeetCode 139. Word Break '
date: '2021-11-28 00:56:00'
author: phrygia
tags: js posts
categories: js algorithm
---

<h1 class="border-bottom">Word Break.</h1>

### Description:
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. <br><br>
문자열s와 단어들로 이루어진 배열 wordDict가 주어질 때, <br>
wordDict내의 문자들로 문자열 s를 만들 수 있는지 구하는 문제 (구할 수 있다면 true 반환)<br>
동일한 단어를 여러번 사용해도 되고 사용하지 않아도 된다.<br><br>

### Solution:
처음에는 관련 주제를 살펴보지 않고 set을 이용해서 일치하는 단어가 배열에 있다면 문자열 s를 지워나가는 식으로 풀었다. <br>
이렇게 풀면 wordBreak('cars', ["car","ca","rs"])에서 배열의 "car"을 먼저 만단 문자열 s는 "s"만 남게 되어 false를 리턴했다. <br>
"ca","rs" 를 사용하면 효율적으로 모든 문자열을 제거해 true를 리턴하기 때문에 나의 첫번째 문제 방식은 틀렸다. <br>
이후 관련 주제를 보고 DP를 사용해 문제를 풀어보기로 했다. <br><br>

#### *Dynamic Programming이란 ? 
동적 계획법이라고도 하며 복잡한 문제를 간단한 여러 개의 작은 문제로 나누어 푸는 방법을 말한다.<br>
작은 문제가 반복해서 일어나고 정답이 같을 때 사용할 수 있다.<br>

<small class="from"><a href="https://ko.wikipedia.org/wiki/%EB%8F%99%EC%A0%81_%EA%B3%84%ED%9A%8D%EB%B2%95" target="_blank">동적 계획법 (위키백과)</a></small><br> 


```js
const wordBreak = function(s, wordDict) {
    let dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    for(let i = 1; i <= s.length; i++) {
        for(let word of wordDict) {
            if(i >= word.length && s.slice(i - word.length, i) === word) {
                dp[i] = dp[i - word.length] || dp[i];
            }
        }
    }
    return dp[s.length];
};

console.log(wordBreak('leetcode', ['leet', 'code'])); // true
console.log(wordBreak('applepenapple', ['apple', 'pen'])); // true
console.log(wordBreak("aaaaaaa" ['aaaa', 'aaa'])); // true
console.log(wordBreak('cars', ["car","ca","rs"])); // true
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])); // false
```
<br>

### Related Topics :
Hash Table, String, DP (Dynamic Programming), Trie, Memoization

<a href="https://leetcode.com/problems/word-break/" target="_blank">https://leetcode.com/problems/word-break/</a>
<br><br>