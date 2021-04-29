---
slug: "/blog/cach-them-google-analytics-cho-gatsby"
date: "2021-04-04"
title: "Cách thêm Google Analytics cho Gatsby"
tags: ["gatsby"]
---

## Tại sao lại cần Google Analytics

Khi bạn đã có một trang web trên internet, bạn sẽ muốn xem có bao nhiêu người đang xem trang web cùng với các số liệu khác như:

- Những pages nào được ghé thăm nhiều nhất?

- Vị trí của những người xem?

- Khi nào thì họ sẽ vào trang web của bạn?

Google Analytics cung cấp một cách để thu thập dữ liệu và thực hiện phân tích trên trang web của bạn, giúp bạn trả lời những câu hỏi ở trên. Có nhiều sự lựa chọn nhưng bài viết này sẽ sử dụng plugin `gatsby-plugin-google-gtag`

## Setting up Google Analytics

Bước đầu tiên bạn cần set up tài khoản Google Analytics. Bạn có thể đăng nhập [tại đây](https://analytics.google.com/) để cấu hình cho tài khoản của bạn.

Google cũng có một trang tài liệu tham khảo [tại đây](https://support.google.com/analytics/answer/1008015?hl=vi).

Một khi bạn đã có tài khoản, bạn sẽ muốn thiết lập một property mới. Property này sẽ có một mã theo dõi được liên kết. Trong trường hợp này property chính là website của bạn. Điền vào tên và URL của website.

Mã theo dõi(Tracking ID) sẽ được sử dụng để xác định dữ liệu của trang web. Bạn sẽ muốn sử dụng các mã theo dõi khác nhau cho các trang web khác nhau.

Bạn có thể tìm mã theo dõi bằng cách `Admin > Tracking Info > Tracking Code`.

## Sử dụng gatsby-plugin-google-gtag

Sử dụng `npm` để cài đặt plugin `gatsby-plugin-google-gtag`

```bash
npm install gatsby-plugin-google-gtag
```

Trong file gatsby-config.js

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // Bạn có thể thêm nhiều mã tracking và tất cả sẽ được kích hoạt
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
  ],
}
```

Bạn có thể đọc thêm tài liệu của plugin [tại đây](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/).

Sau khi đã cấu hình plugin bạn có thể deploy website của bạn để kiểm tra. Bạn vào dashboard của Google Analytics để xem thống kê.

## Một số plugin khác

Dưới đây là một số plugin khác bạn có thể tham khảo:

- [Google Analytics](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/)
- [Google Tag Manager](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/)
- [Segment](https://www.gatsbyjs.com/plugins/gatsby-plugin-segment-js)
- [Amplitude Analytics](https://www.gatsbyjs.com/plugins/gatsby-plugin-amplitude-analytics)

Cám ơn các bạn đã theo dõi!

[Tài liệu tham khảo](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-analytics/).
