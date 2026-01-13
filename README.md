# SIC Question Crawler Chrome Extension

Tiện ích mở rộng Chrome để thu thập câu hỏi và đáp án từ website bài tập SIC và xuất ra file PDF với hỗ trợ tiếng Việt tối ưu.

## ✨ Tính năng mới

- 🌏 **Hỗ trợ tiếng Việt tối ưu**: Xử lý chính xác các ký tự đặc biệt như áàảãạâấầẩẫậăắằẳẵặéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđĐ
- 🔤 **Smart Font Selection**: Tự động chọn font phù hợp (Roboto → Times → Courier → Helvetica)
- 📝 **Enhanced Text Wrapping**: Xuống dòng thông minh cho văn bản tiếng Việt dài
- 🛡️ **Error Recovery**: Fallback system mạnh mẽ khi gặp lỗi font

## Tính năng chính

- 🔍 **Crawl Questions**: Thu thập tất cả câu hỏi và đáp án từ trang bài tập SIC
- 📄 **Export PDF**: Xuất kết quả ra file PDF với font hỗ trợ tiếng Việt và văn bản có thể tìm kiếm
- 📝 **Fallback Export**: Tự động xuất file text nếu PDF không khả dụng
- 🧪 **Test PDF**: Kiểm tra thư viện PDF có hoạt động đúng với tiếng Việt
- ✅ **Hiển thị kết quả**: Xem số câu đúng/sai và điểm số
- 🔄 **Offline Ready**: Hoạt động hoàn toàn offline, không cần kết nối internet

## Cài đặt

1. Tải toàn bộ folder extension này
2. Mở Chrome và truy cập `chrome://extensions/`
3. Bật "Developer mode" ở góc trên bên phải
4. Click "Load unpacked" và chọn folder chứa extension
5. Extension sẽ xuất hiện trong thanh công cụ của Chrome

## Cách sử dụng

1. Truy cập trang bài tập SIC có chứa câu hỏi
2. Click vào icon extension trên thanh công cụ Chrome
3. Click "Crawl Questions" để thu thập câu hỏi
4. Click "Export PDF" để xuất file PDF
5. Click "Test PDF" để kiểm tra thư viện PDF

## Debug và Troubleshooting

Nếu gặp lỗi khi sử dụng extension:

1. Mở Chrome DevTools (F12)
2. Chuyển sang tab Console
3. Reload trang và click extension để kiểm tra log
4. Tìm các thông báo debug:
   - "jsPDF script loaded from local file"
   - "jsPDF initialized successfully via window.jsPDF"
   - "Available jsPDF objects:" để xem cấu trúc object

## 🧪 Test với tiếng Việt

Để test extension với các ký tự tiếng Việt:

1. Mở file `test_vietnamese.html` trong Chrome
2. Load extension và thử các tính năng:
   - Crawl các câu hỏi test
   - Export PDF để xem font hiển thị
   - Kiểm tra các ký tự đặc biệt: áàảãạâấầẩẫậăắằẳẵặéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđĐ

## Debug và Troubleshooting

Nếu gặp lỗi khi sử dụng extension:

1. Mở Chrome DevTools (F12)
2. Chuyển sang tab Console
3. Reload trang và click extension để kiểm tra log
4. Tìm các thông báo debug:
   - "✅ jsPDF found and ready"
   - "✅ Using [Font] font for Vietnamese text"
   - "✅ Thư viện PDF hoạt động tốt với tiếng Việt!"

### Lỗi thường gặp:

- **"jsPDF failed to initialize"**: jsPDF không load được

  - Kiểm tra file `jspdf.umd.min.js` có tồn tại không
  - Xem Console log để biết lỗi cụ thể

- **PDF không được tạo**:

  - Thử click "Test PDF" trước
  - Kiểm tra popup permission

- **Font tiếng Việt không hiển thị đúng**:

  - Extension sẽ tự động fallback: Roboto → Times → Courier → Helvetica
  - Times font thường hỗ trợ tiếng Việt tốt nhất trong jsPDF
  - Kiểm tra Console log để xem font nào đang được sử dụng

- **Văn bản bị cắt hoặc xuống dòng sai**:
  - Extension có smart text wrapping cho tiếng Việt
  - Nếu vẫn lỗi, thử rút ngọn câu hỏi dài

## Cấu trúc file

- `manifest.json`: File cấu hình extension
- `popup.html`: Giao diện popup của extension
- `popup.js`: Logic xử lý popup
- `content.js`: Script chạy trên trang web với hỗ trợ tiếng Việt tối ưu
- `content.css`: CSS cho content script
- `jspdf.umd.min.js`: Thư viện jsPDF để tạo PDF (local)
- `jspdf-loader.js`: Loader script cho jsPDF
- `Roboto-VariableFont_wdth,wght-normal.js`: Font Roboto cho tiếng Việt
- `test_vietnamese.html`: Trang test các ký tự tiếng Việt
- `README.md`: Hướng dẫn sử dụng

## 🔧 Cải tiến kỹ thuật

### Xử lý font tiếng Việt:

- **Font cascading**: Roboto → Times → Courier → Helvetica
- **Unicode normalization**: NFC để xử lý ký tự kết hợp
- **Character cleaning**: Loại bỏ zero-width characters và non-breaking spaces

### Smart text wrapping:

- Sử dụng `splitTextToSize` của jsPDF với fallback manual wrapping
- Xử lý từ tiếng Việt dài đặc biệt
- Phát hiện và xử lý văn bản quá dài tự động

### Error handling:

- Graceful degradation khi font không khả dụng
- Fallback từ PDF sang text file
- Comprehensive logging cho debugging

## Yêu cầu

- Chrome browser phiên bản 88+
- Không cần internet connection (hoạt động hoàn toàn offline)

## 📋 Chú ý

- Extension chỉ hoạt động trên các trang có class `.question-item`
- PDF được tạo sẽ có font hỗ trợ tiếng Việt với văn bản có thể tìm kiếm và copy
- Các ký tự tiếng Việt đặc biệt được xử lý chính xác: áàảãạâấầẩẫậăắằẳẵặéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđĐ
- Nếu PDF không tạo được, extension sẽ tự động tạo file text (.txt) thay thế
- File sẽ được tự động tải về thư mục Downloads
- Extension tự động chọn font phù hợp nhất cho từng trường hợp

## 📈 Changelog

### v1.1 - Cải tiến tiếng Việt

- ✅ Hỗ trợ đầy đủ các ký tự tiếng Việt
- ✅ Smart font selection với fallback system
- ✅ Enhanced text wrapping cho văn bản dài
- ✅ Unicode normalization và character cleaning
- ✅ Comprehensive error handling
- ✅ Test page cho tiếng Việt
- Extension hoạt động hoàn toàn offline sau khi cài đặt

## Phiên bản

v1.0 - Phiên bản đầu tiên với đầy đủ tính năng cơ bản
