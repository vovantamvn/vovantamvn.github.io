---
slug: "/blog/cach-validate-form-voi-formik"
date: "2021-05-11"
title: "Cách vaidate form với formik trong React"
tags: ["react"]
---

Khi làm việc với các form phức tạp thì việc validate from cũng sẽ trở nên phức tạp hơn. Chính vì thế hôm nay mình sẽ giới thiệu các bạn cực kì hữu ích trong việc validate form đó chính là formik.

## Formik là gì

[Formik](https://github.com/formium/formik) là một thư viện được tạo ra để giúp chúng ta có thể làm việc với form một cách dễ dàng và hiệu quả hơn. Theo cá nhân mình thấy thì sử dụng formik còn giúp chúng ta viết các đoạn code ngắn gọn hơn. Việc chia tách phần validate ra riêng cũng giúp code chúng ta dễ hiểu.

## Demo

Dưới đây mình sẽ hướng dẫn các bạn validate một form đơn giản chỉ chứa trường phone.

Tạo project bằng lệnh `npx create-react-app app`

Tiếp theo chúng ta cài đặt formit `npm install formik`

Trong file App.js chúng ta có như sau:

```js
import React from "react"
import { useFormik } from "formik"

function App() {
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validate: values => {
      console.log("validate", values)

      const errors = {}

      if (values.phone === "") {
        errors.phone = "Phone can't empty"
      } else if (!/^[0-9]{10}$/.test(values.phone)) {
        errors.phone = "Phone invalid"
      }

      return errors
    },
    onSubmit: values => {
      console.log("You are submit", values)
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="phone_id">Phone number</label>
        <br />
        <input
          id="phone_id"
          name="phone"
          values={formik.values.phone}
          onChange={formik.handleChange}
        />
        <p style={{ color: "red" }}>{formik.errors.phone}</p>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App
```

Bạn để ý sẽ có 3 tham số bạn cần quan tâm:

- initialValues
- validate
- onSubmit

`initialValues` là object chứa các giá trị khởi tạo ban đầu cho form của chúng ta, ở đây mình khởi tạo với giá trị rỗng.

`validate` chính là function mà chúng ta sẽ triển khai kiểm tra dữ liệu, như bạn thấy ở trên function này sẽ trả về đối tượng errors mà chúng ta sẽ dùng để show lỗi trong thẻ `p`.

`onSubmit` là function sẽ được gọi nếu chúng ta submit, đương nhiên là dữ liệu đã phải được validate thành công rồi mới được gọi nha :))

`formik.handleChange` là function mà formik tự cập nhật các giá trị của field sau đó gọi hàm `validate`, rất tiện lợi phải không nào. Có một lưu ý là trong thẻ input bạn phải để `name` giống với tên field bạn khởi tạo trong `initialValues` (trường hợp của mình là phone).

`formik.handleSubmit` là function sẽ được gọi khi bạn nhấn nút submit. Nếu validate thành công thì function `onSubmit` sẽ được gọi.

`formik.values` chứa tất cả các field trong from của bạn.

`formik.errors` chứa tất cả các lỗi trong quá trình validate.

Bạn có thể xem source code của mình [tại đây](https://github.com/vovantamvn/demo-formik). Nếu bạn muốn tìm hiểu nhiều hơn thì có thể vào tài liệu của [formik](https://formik.org/docs/overview).

Cảm ơn các bạn đã theo dõi!
