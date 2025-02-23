# BeLinkk - URL Shortener & QR Code Generator

## 🚀 Overview
**BeLinkk** is a powerful and efficient **URL shortener** with built-in analytics and a **QR code generator**. Users can create shortened URLs, track clicks, and generate scannable QR codes for easy sharing.

The project consists of a **frontend React.js application** that interacts with a **backend API** hosted on Vercel. Users can fetch their generated URLs, analyze their performance, and easily share links with QR codes.

---

## 🎯 Features
- **🔗 URL Shortening**: Converts long URLs into short, easy-to-share links.
- **📊 Click Tracking**: Displays the total number of clicks on each shortened URL.
- **📈 Analytics Dashboard**: Shows total URLs created, total clicks, and average clicks per URL.
- **📧 User-Specific Data**: Users can enter their email to view their own shortened URLs.
- **🖼️ QR Code Generation**: Click on the QR icon next to a shortened URL to generate and display a QR code.
- **👤 Multi-User Support**: Users can switch accounts to view different URL analytics.
- **⚡ Instant Access**: All data is fetched from a **Vercel-hosted API** for real-time updates.

---

## 🏗️ Tech Stack
### **Frontend**
- React.js ⚛️
- Vite ⚡
- Tailwind CSS 🎨 (for styling)
- React Router 🛤️ (for navigation)
- QRCode.react 📸 (for generating QR codes)

### **Backend API**
- **Node.js & Express.js** (Vercel-hosted backend)
- **Firebase** (for authentication and database management, Storing of URL's and Other Data)

---

## 📂 Project Structure
```
BeLinkk/
│── src/
│   │── components/
│   │   │── QRCodeGenerator.jsx
│   │   │── URLList.jsx
│   │   │── Dashboard.jsx
│   │── pages/
│   │   │── Page1.jsx
│   │   │── Page2.jsx
│   │── assets/
│   │── App.js
│   │── main.jsx
│── public/
│── package.json
│── README.md
```

- **`components/`** - Reusable UI components
- **`pages/`** - Page-specific React components
- **`assets/`** - Static assets (images, icons, etc.)
- **`public/`** - Contains static files like `index.html`
- **`App.js`** - Main application entry point
- **`main.jsx`** - Mounts React to the DOM

---

## 🛠️ Installation & Setup
### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/Abhishekkjainn/blink.git
   cd blink
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open the browser and go to:
   ```sh
   http://localhost:5173
   ```

---

## 🎯 How It Works
### 1️⃣ **Fetching User Data**
- Users enter their email to retrieve their URLs.
- Data is fetched from the API: `https://blinkapi.vercel.app/a=<email>`.

### 2️⃣ **Displaying Analytics**
- **Total URLs Created**: Displays the number of URLs generated.
- **Total Clicks**: Sum of all click counts.
- **Avg Clicks per URL**: `(Total Clicks / Number of URLs)`.

### 3️⃣ **Generating QR Codes**
- Each shortened URL has a **QR code icon**.
- Clicking the icon generates a QR code using `QRCodeCanvas` from `qrcode.react`.
- A modal appears displaying the QR code.

### 4️⃣ **Switching Users**
- Users can **clear stored email** and switch accounts.

---

## 🎨 Styling
- **Vanilla CSS** is used for styling components.
- **Responsive UI** for mobile and desktop support.
- **QR Code Modal** with a centered display and close button.

---

## 🐞 Troubleshooting
### **Common Issues & Fixes**
1️⃣ **Error: `qrcode.react does not provide an export named 'default'`**
- Fix: Import using named imports
  ```js
  import { QRCodeCanvas } from 'qrcode.react';
  ```

2️⃣ **Backend API Not Responding**
- Ensure the API at `https://blinkapi.vercel.app/` is running.

3️⃣ **QR Code Not Showing**
- Verify `qrcode.react` is installed:
  ```sh
  npm install qrcode.react
  ```

---

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make changes and commit (`git commit -m 'Added new feature'`)
4. Push to your branch (`git push origin feature-branch`)
5. Open a pull request 🚀

---

## 📜 License
This project is licensed under the **MIT License**.

---

## ✨ Credits
Created by **Abhishek Jain**. If you have any questions, feel free to reach out!

- **GitHub**: [@abhishekjain](https://github.com/Abhishekkjainn)
- **LinkedIn**: [Abhishek Jain](https://linkedin.com/in/abhishekjain)
- **Portfolio**: [Abhishek Jain](https://abhishekjain.vercel.app)

Enjoy using **BeLinkk**! 🚀🔥

