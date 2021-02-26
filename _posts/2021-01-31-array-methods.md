---
layout: post
title: "[javascript] Array - forEach, map, filter, reduce, every, some (배열 메서드)"
author: "phrygia"
comments: true
category: "dev"
---
<br> 
리액트를 공부하다 보면 map이나 filter를 사용하는 것을 많이 볼 수 있다. 많은 사람들이 forEach는 많이 사용하지만 다른 메서드를 잘 사용하지 않는다고 한다. forEach 외에도 유용한 내장 배열 메서드가 많다. 오늘은 대표적인 메서드 6가지를 공부해 보았다. <br> <br> <br>

### 1. forEach()
***for문 처럼 모든 배열을 돌며 반복적인 기능을 수행할 때 유용한 메서드이며 undefined를 리턴한다**
<div class="blockquote">
    <b>arr.forEach</b>(callback(currentvalue[, index[, array]])[, thisArg])
</div>  
-&nbsp;**callback**: 각 요소에 대해 실행할 함수 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;currentValue: 처리할 현재 요소 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;index: 처리할 현재 요소의 인덱스 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;array: forEach()를 호출한 배열<br>
&nbsp;-**thisArg**: callback을 실행할 때 this로 사용할 값**
{% highlight js %}
    const fruits = ['apple', 'banana', 'kiwi', 'peach', 'strawberry'];
    
    //변수에 대입
    const arr = fruits.forEach((currentvalue, index, array) => {
        console.log(currentvalue)
        console.log(index)
        console.log(array)
    })

    console.log(arr);  //undefined
    
    //바로 호출
    fruits.forEach((currentvalue, index, array) => {
        console.log(currentvalue)
        console.log(index)
        console.log(array)
    })
{% endhighlight %}
<img src="/assets/post/forEach.png" style="margin:0" /><br>
forEach메서드를 특정 변수에 대입하고 그 변수를 호출하면 undefined가 출력된다. forEach는 특정 조건을 처리하여 return하는 과정이 없기 때문에 undefined가 출력되는 것이다. 따라서 모든 배열요소를 바로 출력하고 싶을때 유용한 메서드 이다.
<br><br>

**- 좀 더 현실적인 예시**
{% highlight js %}
    const fruits = ['apple', 'banana', 'kiwi', 'peach', 'strawberry'];
    
    // ul Element를 생성
    const ul = document.createElement('ul');

    fruits.forEach((currentvalue, index, array) => {
        // li Element를 생성하여 currentvalue값을 대입한다.
        const li = document.createElement('li');
        li.innerText = currentvalue;

        ul.appendChild(li);
    })

    document.body.appendChild(ul);
{% endhighlight %}
<img src="/assets/post/forEach2.png" style="margin:0" />

### 2. map()
***모든 배열내의 요소들을 순회한 후, callback 함수를 호출한 결과들을 새로운 배열로 리턴한다. - 기존배열 수정 x**
<div class="blockquote">
    <b>arr.map</b>(callback(currentValue[, index[, array]])[, thisArg])
</div>  
-&nbsp;**callback**: 각 요소를 생성하는 함수 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;currentValue: 처리할 현재 요소 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;index: 처리할 현재 요소의 인덱스 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;array: map()을 호출한 배열.<br>
&nbsp;-**thisArg**: callback을 실행할 때 this로 사용되는 값
{% highlight js %}
    const oneToFive = [1, 2, 3, 4, 5]

    const multiply = oneToFive.map((currentvalue, index, array) => {
        return currentvalue * currentvalue
    })

    console.log(multiply)  // 1, 4, 9, 16, 25

{% endhighlight %}
callback이 적용된 새로운 배열로 반환되었다.
<br><br><br>

### 3. filter()
***모든 배열내의 요소들을 순회한 후, callback 함수의 조건을 만족하는 값들을 새로운 배열로 리턴한다. - 기존배열 수정 x**
<div class="blockquote">
    <b>arr.filter</b>(callback(element[, index[, array]])[, thisArg])
</div>  
-&nbsp;**callback**: 각 요소를 필터링할 함수 (조건처리) - **true만 새로운 배열로 리턴** <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;currentValue: 처리할 현재 요소. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;index: 처리할 현재 요소의 인덱스. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;array: filter()를 호출한 배열.<br>
&nbsp;-**thisArg**: callback을 실행할 때 this로 사용되는 값
{% highlight js %}
    const fruits = [
        { name: 'apple', like: 'like'},
        { name: 'banana', like: 'dislike'},
        { name: 'kiwi', like: 'dislike'},
        { name: 'peach', like: 'like'},
        { name: 'strawberry', like: 'like'}
    ];

    const favoriteFruits = fruits.filter ((currentValue, index, array) => {
        return currentValue.like === 'like'
    });

    console.log(favoriteFruits);
{% endhighlight %}
<img src="/assets/post/filter.jpg" style="margin:0" />
callback함수의 조건을 만족하는 요소들이 새로운 배열에 반환되었다.
<br><br><br>

### 4. reduce()
<div class="blockquote">
    <b>arr.reduce</b>(callback(accumulator, currentValue, currentIndex, array), initialValue)
</div>  
-&nbsp;**callback**: 배열의 각 요소에 대해 실행할 함수 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;accumulator: 반환된 누적값 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;currentValue: 처리할 현재 요소 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;currentIndex: 처리할 현재 요소의 인덱스 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;array: reduce()를 호출한 배열 <br>
-&nbsp;**initialValue**: 최초 호출에서 첫 번째 인수에 제공하는 값 - 초기값이 없으면 array의 첫번째 요소 사용
**예제 1**
{% highlight js %}
    const numbers = [ 1, 2, 3, 4, 5 ];
    
    const add1 = numbers.reduce((a, b) => { return a + b });
    const add2 = numbers.reduce((a, b) => { 
        return a + b 
    }, 100);

    console.log(add1);  // 15
    console.log(add2);  // 115
{% endhighlight %}
add1과 add2은 모두 1부터 5까지의 숫자를 더하는 값을 반환한다. 차이점은 add2에는 initialValue의 값을 100으로 지정하였다는 점이다. initialValue의 설정 여부에 따라 결과값이 달라진다. add2는 100부터 숫자를 더한값을 반환됐다.
<br><br>

**예제 2**
{% highlight js %}
    const hero = ['captainAmerica', 'ironMan', 'hulk', 'scarletWitch', 'doctorStrange'];

    const countedNames = hero.reduce((accumulator, currentValue) => { 

        if (currentValue === 'scarletWitch') {
            accumulator[currentValue] = 'female hero !';
        }
        else {
            accumulator[currentValue] = 'male hero';
        }
        console.log(accumulator);

        return accumulator;
    }, {});

    console.log(countedNames);   
    // {captainAmerica: "male hero", ironMan: "male hero", hulk: "male hero", scarletWitch: "female hero !", doctorStrange: "male hero"}
{% endhighlight %}
<img src="/assets/post/reduce.jpg" style="margin:0" alt="" />
위의 예제는 scarletWitch element를 만났을때 여성 히어로 문구를 출력하는 예시이다. accumulator의 초기값은 initialValue와 같다. 최초 accumulator는 {}이며 객체안에 값이 누적된다. <br>
만약 initialValue를 설정하지 않는다면 captainAmerica가만 계속 return될 것이다. <u>초기값을 설정하지 않으면 배열의 첫번째 요소가 accumulator의 첫번째 요소가 되므로</u> callback이 원하는대로 작동되지 않을 것이다.
<br><br><br>

### 5. every()
***모든 배열을 돌며 element의 반환값이 true인지 확인하고 모두 true일때 true를 리턴 (&&) - 기존배열 수정 x**
<div class="blockquote">
    <b>arr.every</b>(callback(currentValue, index, array), thisArg)
</div>  
-&nbsp;**callback**: 각 요소를 평가할 함수 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;currentValue: 처리할 현재 요소 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;index: 처리할 현재 요소의 인덱스 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;array: every()를 호출한 배열 <br>
-&nbsp;**thisArg**: callback을 실행할 때 this로 사용하는 값
{% highlight js %}
    const numbers = [1, 4, 7, 8, 10, 13, 20, 40];

    const biggerThanTen = numbers.every((currentValue) => {
        return currentValue > 10;
    });

    console.log(biggerThanTen); // false
{% endhighlight %}
10보다 큰 요소를 리턴하는 메서드를 실행한 결과 1, 4, 7, 8, 10이 false이기 때문에 전체 true 조건을 만족하지 못하여 false로 값이 리턴되었다. 흔히 if문에서 사용되는 && (and) 연산자와 비슷하다고 생각하면 쉽다.
<br><br><br>

### 6. some()
***모든 배열을 돌며 element의 반환값이 true인지 확인하고 하나라도 true일때 true를 리턴 (or) - 기존배열 수정 x**
<div class="blockquote">
    <b>arr.some</b>(callback(currentValue, index, array), thisArg])
</div>
-&nbsp;**callback**: 각 요소를 평가할 함수 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;currentValue: 처리할 현재 요소 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;index: 처리할 현재 요소의 인덱스 <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;array: some()를 호출한 배열 <br>
-&nbsp;**thisArg**: callback을 실행할 때 this로 사용하는 값
{% highlight js %}
    const numbers = [1, 4, 7, 8, 10, 13, 20, 40];

    const biggerThanTen = numbers.every((currentValue) => {
        return currentValue > 10;
    });

    console.log(biggerThanTen); // true
{% endhighlight %}
10보다 큰 요소를 리턴하는 메서드를 실행한 결과 1, 4, 7, 8, 10은 조건을 만족하지 않지만 13, 20, 40이 조건을 만족한다. 배열 요소중 하나라도 조건을 만족하면 true가 리턴된다. (모든 값이 false일때만 false가 리턴) if문에서 사용되는 || (or) 연산자와 비슷하다고 생각하면 쉽다.
<br><br><br>

<hr>
<small class="from"><a href="https://developer.mozilla.org/ko/" target="_blank">MDN</a></small>
<div class="phrygia_info phrygia_info_post">
    <dl>
        <dt><img src="/assets/image/phrygia.jpg" alt="phrygia"></dt>
        <dd>
            <strong>Chaeyeon Lee</strong>
            <p>Frontend Engineer 꿈꾸는 3년차 Publisher입니다-*</p>
            <span>#javascript &nbsp;&nbsp;#Array &nbsp;&nbsp;#forEach &nbsp;&nbsp;#map &nbsp;&nbsp;#filter &nbsp;&nbsp;#reduce &nbsp;&nbsp;#every &nbsp;&nbsp; #some</span>
        </dd>
    </dl>
</div>