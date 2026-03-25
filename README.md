# 🚀 MyDTU Auto-Login Bot

**MyDTU Auto-Login** là một tiện ích mở rộng (Extension) dành cho trình duyệt Chromium (Chrome, Edge, Brave...), giúp tự động hóa hoàn toàn quá trình đăng nhập vào cổng thông tin MyDTU của Đại học Duy Tân. 

Đặc biệt, tiện ích được tích hợp sức mạnh từ **Google Gemini AI** để đọc và giải mã Captcha chính xác, giúp bạn vượt qua màn hình đăng nhập chỉ trong tích tắc mà không cần động tay! ฅ^•ﻌ•^

---

## ✨ Tính năng nổi bật

* 🤖 **Giải mã Captcha bằng AI siêu tốc:** Tích hợp API của mô hình `Gemini-flash-latest` từ Google, tự động nhận diện và điền mã Captcha hình ảnh của MyDTU với độ chính xác cao.
* ⚡ **Tự động Đăng nhập 100%:** Hỗ trợ công tắc "Auto Login". Khi bật, Bot sẽ tự động điền Mã số sinh viên (MSSV), Mật khẩu, giải Captcha và tự động click nút Đăng nhập cho bạn.
* 🛡️ **Chặn Popup & Màn hình đen:** Tự động ẩn các thành phần gây phiền nhiễu trên trang MyDTU như lớp phủ đen (`.darkness`), hộp thoại quảng cáo (`#adbox`) hay popup (`#popout`), mang lại trải nghiệm mượt mà nhất.
* 🖱️ **UI/UX Thông minh:** Tích hợp nút **"⚡ Auto Captcha"** nhỏ gọn, native thẳng vào giao diện gốc của website. Trạng thái giải mã, báo lỗi hay thành công được hiển thị trực quan ngay trên nút.
* 🔒 **Lưu trữ an toàn:** Thông tin đăng nhập và API Key được lưu trữ cục bộ (Local Storage) trên trình duyệt của bạn thông qua `chrome.storage.sync`, đảm bảo quyền riêng tư.

---

## 🛠️ Hướng dẫn cài đặt

Vì tiện ích này chưa được phát hành trên Chrome Web Store, bạn cần cài đặt thủ công (Unpacked) theo các bước sau:

1.  Tải toàn bộ mã nguồn này về máy (Code -> Download ZIP) và giải nén ra một thư mục.
2.  Mở trình duyệt (Chrome/Edge/Cốc Cốc), truy cập vào trang Quản lý Tiện ích: `chrome://extensions/`
3.  Bật chế độ **Dành cho nhà phát triển (Developer mode)** ở góc trên bên phải.
4.  Nhấn nút **Tải tiện ích đã giải nén (Load unpacked)** và chọn thư mục chứa mã nguồn bạn vừa giải nén.
5.  Tiện ích **MyDTU Auto-Login** với icon chiếc bánh chưng xanh sẽ xuất hiện trên thanh công cụ của bạn!

---

## ⚙️ Hướng dẫn cấu hình & Sử dụng

Để Bot hoạt động trơn tru, bạn cần thiết lập một chút trong lần đầu tiên:

### Bước 1: Lấy Gemini API Key
Tiện ích sử dụng AI của Google nên bạn cần có API Key (Hoàn toàn miễn phí):
1. Truy cập [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Đăng nhập bằng tài khoản Google của bạn và nhấn **Create API Key**.
3. Copy đoạn mã Key đó lại.

### Bước 2: Cấu hình Tiện ích
1. Nhấn vào biểu tượng (Icon) của tiện ích trên thanh công cụ trình duyệt.
2. Một bảng **⚙️ Cấu hình Auto Login** sẽ hiện ra.
3. Lần lượt điền các thông tin:
   * **Gemini API Key:** Dán mã Key bạn vừa copy ở Bước 1 vào.
   * **Tên đăng nhập (MSSV):** Mã số sinh viên của bạn.
   * **Mật khẩu:** Mật khẩu đăng nhập MyDTU.
4. **Tùy chọn Tự động Đăng nhập 100%:** * **Bật (Màu đỏ):** Bot sẽ tự làm tất cả từ A-Z.
   * **Tắt (Màu xám):** Bot chỉ hỗ trợ điền sẵn User/Pass và bạn bấm nút để giải Captcha.
5. Nhấn **LƯU CÀI ĐẶT** (Sẽ có thông báo *✔ Đã lưu thành công! 𝑴𝒆𝒐𝒘. ฅ(•- •マ* hiện lên).

### Bước 3: Tận hưởng
Bây giờ, hãy truy cập vào cổng thông tin MyDTU. Bot sẽ tự động nhận diện và thực hiện phép màu của mình!

---

## ⚠️ Cảnh báo Bảo mật (Disclaimer)

* Tiện ích này lưu trữ tài khoản và mật khẩu của bạn trong Local Storage của trình duyệt. Hãy cẩn thận khi sử dụng trên máy tính công cộng.
* **Tuyệt đối không** chia sẻ API Key của Google AI Studio cho người khác để tránh bị lạm dụng hạn mức hoặc phát sinh rủi ro.
* Tiện ích được tạo ra với mục đích học tập và hỗ trợ cá nhân. Tác giả không chịu trách nhiệm cho bất kỳ vấn đề nào liên quan đến tài khoản nhà trường của bạn.

---

## 👨‍💻 Tác giả
* **Bản quyền thuộc về:** Atsuki Nguyễn
