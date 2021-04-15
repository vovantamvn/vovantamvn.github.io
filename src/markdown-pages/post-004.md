---
slug: "/blog/airbnb-javascript-style-guide-2"
date: "2021-04-15"
title: "Hướng dẫn Style Javascript Airbnb (Phần 2)"
---

Đây là một loạt bài viết nói về phong cách viết javascript của Airbnb mà mình dịch từ [github](https://github.com/airbnb/javascript). Trong quá trình dịch không tránh khỏi sai sót, cũng như một số thuật ngữ mình không thể dịch thì mình sẽ để nguyên văn.

Xem Phần 1 [tại đây](/blog/airbnb-javascript-style-guide).

## Object

### 3.1 Sử dụng đấu {} để tạo mới object

```js
// bad
const obj = new Object();

// good
const obj = {};
```

### 3.2 Sử dụng tên thuộc tính được tính toán khi tạo object với tên thuộc tính dynamic

>
> Tại sao? Js cho phép bạn định nghĩa toàn bộ thuộc tính của một object trong một lần.
>

```js
function getKey(k) {
  return `a key named ${k}`;
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```

### 3.3 Sử dụng object với method shorthand

```js
// bad
const atom = {
  value: 1,
  addValue: function(value) {
    return atom.value + value;
  }
};

// good
const atom = {
  value: 1,
  addValue (value) {
    return atom.value + value;
  }
};
```

### 3.4 Sử dụng property value shorthand

>
> Tại sao? Tại vì nó ngắn gọn và súc tích.
>

```js
const name = 'tom';

// bad
const person = {
  name: name,
};

// good
const person = {
  name,
};
```

### 3.5 Nhóm shorthand property lên đầu của object

>
> Tại sao? Nó dễ dàng để nhận biết đâu là shorthand property.
>

```js
const name = 'tom';
const age = 22;

// bad
const person = {
  address: 'DN',
  name,
  age,
};

// good
const person = {
  name,
  age,
  address: 'DN',
};
```

### 3.6 Chỉ sử dụng dấu ngoặc đơn khi tên property không hợp lệ

>
> Tại sao? Nó dễ đọc, cải thiện syntax highlighting.
>

```js
// bad
const person = {
  'name': 'tom',
  'age': 22,
  'post-code': '550500',
};

// good
const person = {
  name: 'tom',
  age: 22,
  'post-code': '550500',
};
```

### 3.7 Không gọi method Object.prototype trực tiếp, ví dụ như hasOwnProperty, propertyIsEnumerable, isPrototypeOf

```js
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty;
console.log(has.call(object, key));
```

### 3.8 Sử dụng spread operator hơn là Object.assign để clone object

```js
// very bad
const original = { a: 1, b: 2};
const copy = Object.assign(original, { c: 3 }); // original = copy = { a: 1, b: 2, c: 3 }
delete copy.a; // original = copy = { b: 2, c: 3 }

// bad
const original = { a: 1, b: 2};
const copy = Object.assign({}, original, { c: 3 }); // copy = { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3}; // copy = { a: 1, b: 2, c: 3 }
const { a, ...noA } = copy; // noA = { b: 2, c: 3 }
```

[Xem tiếp phần 3](/blog/airbnb-javascript-style-guide-3)

Cảm ơn các bạn đã theo dõi!
