---
slug: "/blog/airbnb-javascript-style-guide"
date: "2021-04-04"
title: "Hướng dẫn Style Javascript Airbnb (Phần 1)"
tags: ["javascript", "clean code"]
---

Đây là một loạt bài viết nói về phong cách viết javascript của Airbnb mà mình dịch từ [github](https://github.com/airbnb/javascript). Trong quá trình dịch không tránh khỏi sai sót, cũng như một số thuật ngữ mình không thể dịch thì mình sẽ để nguyên văn.

## Kiểu dữ liệu

### 1.1 Kiểu dữ liệu primitives( nguyên thủy)

Các kiểu dữ liệu primitives trong javascript:

- string
- number
- boolean
- null
- undefined
- symbol
- bigint

```js
const foo = 1
let bar = foo

bar = 9

console.log(foo, bar) // => 1, 9
```

Symbols và BigInts , vì vậy chúng ta không nên sử dụng trên môi trường trình duyệt bởi vì nó không hỗ trợ native.

### Kiểu dữ liệu complex

Các kiểu dữ liệu nguyên primitives trong javascript:

- object
- array
- function

```js
const foo = [1, 2]
const bar = foo

bar[0] = [9]

console.log(foo[0], bar[0]) // => 9, 9
```

## References( Tham chiếu)

### 2.1 Sử dụng const cho references, tránh sử dụng var

> Tại sao? Vì sử dụng const bạn không thể thay đổi references, nó có thể dẫn đến bugs hoặc khó hiểu code.

```js
// bad
var a = 1
var b = 2

// good
const a = 1
const b = 2
```

### 2.2 Nếu phải thay đổi giá trị, sử dụng let thay thế var

> Tại sao? vì `let` là block-scoped( vòng đời trong block), còn `var` function-scoped( vòng đời function)

```js
// bad
var count = 1
if (true) {
  count++
}

// good
let count = 1
if (true) {
  count++
}
```

### 2.3 const và let đều là block-scoped

```js
// const và let chỉ tồn tại trong blocks khai báo chúng
{
  const a = 1
  let b = 2
}

console.log(a) // Uncaught ReferenceError: a is not defined
console.log(b) // Uncaught ReferenceError: b is not defined
```

[Xem tiếp phần 2](/blog/airbnb-javascript-style-guide-2)

Cảm ơn các bạn đã theo dõi!
