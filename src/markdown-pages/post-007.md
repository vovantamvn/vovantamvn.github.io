---
slug: "/blog/thuat-toan-tim-kiem-nhi-phan"
date: "2021-05-15"
title: "Thuật toán tìm kiếm nhị phân"
tags: ["algorithm", "c/c++"]
---

Xin chào các bạn, hôm nay chúng ta sẽ cùng tìm hiểu về thuật toán tìm kiếm nhị phân.

## Tìm kiếm nhị phân là gì

Hiểu đơn giản thuật toán tìm kiếm nhị phân là một thuật toán tìm kiếm vị trí một phần tử trong một mảng đã được sắp sếp.

Ví dụ:
Tìm kiếm vị trí của phần tử 5 trong mảng [1, 2, 3, 5, 7 ,10, 12, 14, 15].

Dễ thấy mảng trên đã được sắp xếp nên chúng ta sẽ dùng thuật toán tìm kiếm nhị phân.

### Tại sao phải dùng thuật toán tìm kiếm nhị phân?

```c
int search(int arr[], int length, int element) {
  int i;

  for(i=0; i<length; i++) {
    if (arr[i] == length) {
      return i;
    }
  }

  return -1; // Không tìm thấy
}
```

Rõ ràng chúng ta có thể tìm kiếm phần tử 5 bằng thuật toán trên, tại sao lại cần đến tìm kiếm nhị phân. Lý do được đưa ra ở đây chính là độ phức tạp.

Với thuật toán ở trên độ phức tạp là O(n) trong khi độ phức tạp của thuật toán tìm kiếm nhị phân chỉ là O(log2(n)).

Giả sử bạn muốn tìm kiếm một phần tử trên một mảng 10000 phần tử, trong trường hợp xấu nhất thuật toán ở trên sẽ phải duyệt tất cả 10000 phần tử. Trong khi đó với thuật toán tìm kiếm nhị phân bạn chỉ cần duyệt khoảng log2(10000) ≈ 14 phần tử cho trường hợp xấu nhất. Rất xịn phải không nào =))

### Khi nào thì dùng thuật toán tìm kiếm nhị phân

Thuật toán tìm kiếm nhị phân sẽ rất hiệu quả để tìm kiếm một phần tử trong một mảng lớn. Còn với những mảng ít phần tử thì có thể chúng ta không cần.

## Cách hoạt động của thuật toán tìm kiếm nhị phân

Bây giờ chúng ta sẽ cùng tìm hiểu tại sao thuật toán tìm kiếm nhị phân lại có thể tìm kiếm nhanh đến như vậy.

Thuật toán:

```pascal
function binary_search(A, n, T) is
    L := 0
    R := n − 1
    while L ≤ R do
        m := floor((L + R) / 2)
        if A[m] < T then
            L := m + 1
        else if A[m] > T then
            R := m − 1
        else:
            return m
    return unsuccessful
```

Cách hoạt động của thuật toán như sau:

- Lấy hai giá trị `left = 0, right = arr.length - 1`, tức là hai vị trí đầu mảng và cuối mảng. Với hai vị trí này thì biểu thức `arr[left] <= element <= arr[right]` sẽ đúng.
- Lấy vị trí phần tử ở giữa mảng `mid = (left + right) / 2`. So sánh phần tử tìm được `arr[mid]` với giá trị cần tìm `element`.

  - Nếu phần tử ở giữa mảng bằng với phần tử tìm kiếm ta sẽ trả về vị trị của phần tử cần tìm `mid`.
  - Nếu phần tử ở giữa bé hơn phần tử cần tìm kiếm. Điều này có nghĩa là phần tử chúng ta cần tìm sẽ nằm ở vị trí `[mid + 1, right]`. Lúc này chúng ta sẽ cập nhật `left = mid + 1`.
  - Nếu phần tử ở giữa lớn hơn phần tử cần tìm kiếm. Điều này có nghĩa là phần tử chúng ta cần tìm sẽ nằm ở vị trí `[left], mid - 1]`. Lúc này chúng ta sẽ cập nhật `right = mid - 1`.

- Nếu `left == right` tức là trong mảng không chứa giá trị cần tìm, lúc này chúng ta sẽ trả về giá trị `-1`. Nếu không thì chúng ta sẽ quay lại bước 1.

Ví dụ:
Tìm kiếm vị trí của phần tử 5 trong mảng [1, 2, 3, 5, 7 ,10, 12, 14, 15].

- B1: Ta sẽ có các giá trị: `left = 0, right = 8`
- B2: Giá trị của phần tử ở giữa `arr[4] = 7`
- B3: Lúc này ta thấy `arr[4] > 5`, cập nhật lại giá trị `right = mid - 1 = 3`
- B4: Ta sẽ có các giá trị: `left = 0, right = 3`
- B5: Giá trị của phần tử ở giữa `arr[1] = 2`. Ở đây ta sẽ lấy phần nguyên của `mid = (0 + 3) / 2 = 1`.
- B6: Lúc này ta thấy `arr[1] < 5`, cập nhật lại giá trị `left = mid + 1 = 2`
- B7: Ta sẽ có các giá trị: `left = 2, right = 3`
- B8: Giá trị của phần tử ở giữa `arr[2] = 3`
- B9: Lúc này ta thấy `arr[2] < 5`, cập nhật lại giá trị `left = mid + 1 = 3`
- B10: Ta sẽ có các giá trị: `left = 3, right = 3`
- B11: Lúc này ta thấy `arr[3] == 5`, trả về giá trị `3`.

## Triển khai thuật toán tìm kiếm nhị phân

Code:

```c
#include <stdio.h>

int binarySearch(int arr[], int length, int element) {
  int left = 0;
  int right = length - 1;

  while(left <= right) {
    int mid = (left + right) / 2;

    if (arr[mid] == element) {
      return mid;
    } else if (arr[mid] < element) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Không tìm thấy
}

int main() {
  int arr[] = {1, 2, 3, 5, 7 ,10, 12, 14, 15};

  int length = 9;
  int element = 5;

  int position = binarySearch(arr, length, element);

  printf("Position: %d\n", position);
}
```

Output:

```c
Position: 3
```

Cám ơn các bạn đã theo dõi!
