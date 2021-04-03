---
slug: "/blog/cach-viet-code-sach"
date: "2021-04-03"
title: "Cách viết code sạch"
---

## Tại sao lại cần viết code sạch

Khi code chúng ta thường chỉ nghĩ đơn giản: Code chạy là được nhưng đây chính một suy nghĩ nguy hiểm khi tham gia vào các dự án sau này. Các dự án không phải lúc nào cũng tạo mới để code, đôi khi chúng ta phải bảo trì các dự án cũ.

Vấn đề chính là đây, nếu chúng ta viết code không sạch thì sẽ gặp rất nhiều rắc rối. Các bạn cũng xem đoạn code dưới đây:

```c
int func(int a, int b){
  return a*b;
}
```

Đọc vào rất khó hiểu, chả biết cái hàm này làm việc gì nửa? Nên nếu viết lại như thế này sẽ dễ hiểu hơn:

```c
int getArea(int width, int height){
  return width*height;
}
```

## Các nguyên tắc để viết code sạch hơn

### Đặt tên biến một cách có quy tắc

Các bạn có thể áp dụng các quy tắc sau:

- Hạn chế đặt tên biến bằng tiếng việt
- Nên thống nhất cách viết tên biến
- Nên đặt tên biến có ý nghĩa
- Tên biến nên là danh từ

Nói về quy tắc số 2. Các bạn có thể đặt tên biến theo hai kiểu:

- last_name
- lastName

Mình thì thích dùng kiểu lastName hơn.

Nói về quy tắc số 3. Tại sao nó lại cần thiết? Khi đọc vào code, nếu các tên biến được đặt tên một cách có ý nghĩa, các bạn có thể dễ dàng hiểu đoạn code này đang làm gì.

Ví dụ:

```c
int a = 5;
int b = 10;
int c = a*b;
```

Các bạn có thể viết lại như này để tăng khả năng đọc của code:

```c
int width = 5;
int height = 10;
int area = width * height;
```

### Đặt tên hàm một cách có quy tắc

Tương tự như đặt tên biến, quy tắc đặt tên hàm cũng như sau:

- Hạn chế đặt tên hàm bằng tiếng việt
- Nên thống nhất cách viết tên hàm
- Nên đặt tên hàm có ý nghĩa
- Tên hàm nên là động từ
- Tương tự như trên, nên mình chỉ giải thích những điểm khác.

Lý do nên đặt tên hàm bằng động từ là khi bạn nhìn vào tên của hàm, bạn sẽ biết hàm này làm gì.

Ví dụ:

- findUserById: Bạn sẽ hiểu là tìm user bằng id
- findAllUserActive:Bạn sẽ hiểu là tìm tất cả user đang hoạt động

Một điều nửa là các bạn đừng ngại đặt tên hàm dài nhưng dễ hiểu. Dài ở đây không phải là mình khuyến khích đặt tên hàm dài mà là nó đủ xúc tích để hiểu.

Ví dụ:

- findUserByUsernameAndPassword(String username, String password)
- findUser(String username, String password)

Rõ ràng là cái trên dài hơn, nhưng nó mô tả chức năng của hàm rõ ràng hơn.

### Viết các block code có quy tắc

Một số quy tắc viết các block code:

- Thống nhất một kiểu viết block code
- Một block code không nên quá dài

Quy tắc đầu tiên là bạn nên thống nhất một trong hai kiểu dưới đây:

```c
if(){
  // code
}
```

Hoặc

```c
if()
{
  // code
}
```

Quy tắc thứ hai là trong một block code không nên viết quá dài. Nếu trong một block code dài thì đã đến lúc bạn nên tách block code đó thành một hàm rồi đó.

Cám ơn các bạn đã theo dõi!
