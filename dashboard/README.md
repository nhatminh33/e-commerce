npm i apexcharts react-apexcharts axios jwt-decode moment react-hot-toast react-icons @reduxjs/toolkit react-redux react-spinners react-window redux-thunk socket.io-client

npm install -D tailwindcss
npx tailwindcss init

npm i react-router-dom
npm install react-icons --save

apexcharts & react-apexcharts: Thư viện biểu đồ.
axios: Thư viện HTTP client.
jwt-decode: Giải mã JWT.
moment: Thư viện xử lý ngày giờ (nên xem xét dùng day.js thay thế nếu cần).
react-hot-toast: Hiển thị thông báo.
react-icons: Biểu tượng cho React.
@reduxjs/toolkit & react-redux: Quản lý state với Redux.
react-spinners: Tạo hiệu ứng loading spinner.
react-window: Tối ưu hóa render danh sách lớn.
redux-thunk: Middleware cho Redux.
socket.io-client: Kết nối với server qua Socket.IO.
web-vitals: Cấp bởi Google để đo lường các chỉ số hiệu suất cốt lõi (Core Web Vitals) trên các trang web


backeend:
npm i express bcrypt body-parser cloudinary cookie-parser cors dotenv formidable jsonwebtoken moment mongoose socket.io stripe uuid

express: Framework phổ biến để xây dựng ứng dụng web và API trong Node.js.
bcrypt: Thư viện để mã hóa mật khẩu, thường được sử dụng để lưu trữ mật khẩu an toàn.
body-parser: Middleware để phân tích (parse) request body. (Lưu ý: Từ Express 4.16.0 trở đi, bạn có thể dùng express.json() và express.urlencoded() thay thế).
cloudinary: Thư viện để tích hợp dịch vụ Cloudinary, giúp quản lý và xử lý hình ảnh/video.
cookie-parser: Middleware để phân tích cookie trong request.
cors: Middleware để bật CORS (Cross-Origin Resource Sharing), cho phép các ứng dụng truy cập API từ các nguồn gốc khác nhau.
dotenv: Thư viện để tải các biến môi trường từ tệp .env.
formidable: Thư viện để xử lý form, đặc biệt hữu ích khi upload file.
jsonwebtoken: Dùng để tạo và xác minh JWT (JSON Web Tokens).
moment: Thư viện để xử lý ngày giờ (lưu ý: Moment đã chuyển sang chế độ bảo trì, bạn có thể cân nhắc sử dụng Day.js hoặc Luxon nếu muốn một giải pháp hiện đại hơn).
mongoose: Thư viện để làm việc với MongoDB thông qua ODM (Object Data Modeling).
socket.io: Thư viện để thiết lập WebSocket, hỗ trợ giao tiếp thời gian thực.
stripe: Thư viện tích hợp cổng thanh toán Stripe.
uuid: Thư viện để tạo UUID (Unique Identifier).

npm uninstall formidable
npm install formidable@2.1.1

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
