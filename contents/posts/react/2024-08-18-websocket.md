---
title: "[react] Custom hook으로 Websocket 통신하기"
date: "2024-08-18 12:47:00"
description: ""
tags:
  - react
---

제가 다니고 있는 회사는 채팅+전화로 CS를 처리하고 있어요. 몇년동안 유명한 외부 메신저(챗봇)를 사용했었는데 많은 기능을 제공하는만큼 비쌌지만 cs팀이 사용하는 기능이 매우 한정적이라는 걸 알게되었어요.
그래서 자체 챗봇을 개발해서 운영하자는 얘기가 나왔습니다.<br>
`한달 서버비용 < 외부 메신저 한달 비용` <br>
자사 챗봇은 여러가지 이점이 있었지만 가장 큰 장점은 **비용절감**이 크기때문에 챗봇 자체개발에 돌입했습니다. (그만큼 외부 메신저의 비용은 높았어요.) <br>

## 첫번째 고민. Websocket vs Socket.io

## 두번째 고민. Websocket을 연결했을때 다른 파일에서 연결했는지 어떻게 확인하지?