# React Exam Project

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)

---

## 🇬🇧 English

### 🎯 Overview
*React Exam Project was developed by Erfan Ahmadi as part of a technical assessment from Sadra Company to evaluate his skills in React development.  
The project demonstrates understanding of state management, component-based architecture, form handling, and API integration.

### 🧩 Features
- Task management interface (create, edit, delete)
- Dynamic data handling with JSON Server
- Custom useApi hook for REST requests
- Form validation and controlled components
- Clean and modular folder structure
- Fully responsive layout

### ⚙️ Installation & Setup
# Clone the repository
git clone https://github.com/er4Nxz/React-Exam.git
cd React-Exam/Code

# Install dependencies
npm install

# Run JSON Server
npx json-server --watch db.json --port 3000

# Run the development server
npm run dev

### 🚀 Example Snippet
Using custom hook for data fetching
// useApi.jsx
export const useApi = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);
  return data;
};

Adding new task
// TaskForm.jsx
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3000/tasks", formData);
};

### 🛠️ Technologies Used
- React (Hooks, Components)
- Vite
- Axios (HTTP client)
- React Router DOM (Routing)
- JSON Server
- React Icons
- JavaScript (ES6)

### 📁 Project Structure

React-Exam/
├── Code/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Header/
│   │   │   ├── Login/
│   │   │   ├── TaskForm/
│   │   │   ├── TaskList/
│   │   │   └── NotFound/
│   │   ├── Hooks/
│   │   │   └── useApi/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── db.json
│   └── index.html
└── README.md

### 💡 Lessons Learned
- Structuring a React project for scalability  
- Handling data through RESTful APIs  
- Building modular forms and controlled inputs  
- Practicing test-oriented and clean coding principles  

### 🧾 License
This project is licensed under the MIT License.  
You are free to use and modify it for personal or educational purposes.

---

## 🇮🇷 فارسی

### 🎯 معرفی پروژه
React Exam Project توسط عرفان احمدی در قالب یک آزمون فنی از شرکت صدرا توسعه داده شده تا مهارت‌های او در React سنجیده شود.  
این پروژه نشان‌دهنده تسلط بر مفاهیم state management، طراحی ماژولار کامپوننت‌ها، مدیریت فرم‌ها و اتصال به API است.

### 🧩 ویژگی‌ها
- رابط کاربری مدیریت تسک (ایجاد، ویرایش، حذف)  
- مدیریت داده‌ها با JSON Server
- هوک اختصاصی useApi برای درخواست‌های REST  
- اعتبارسنجی فرم‌ها و کنترل ورودی‌ها  
- ساختار پوشه‌ای تمیز و منظم  
- رابط کاربری واکنش‌گرا (Responsive)

### ⚙️ نصب و اجرا
git clone https://github.com/er4Nxz/React-Exam.git
cd React-Exam/Code

npm install

# اجرای JSON Server
npx json-server --watch db.json --port 3000

# اجرای محیط توسعه
npm run dev

### 🚀 نمونه کد
هوک اختصاصی برای دریافت داده‌ها
export const useApi = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);
  return data;
};

افزودن تسک جدید
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3000/tasks", formData);
};

### 🛠️ تکنولوژی‌ها
- React (کامپوننت‌ها و Hooks)
- Vite
- Axios
- React Router DOM
- JSON Server
- React Icons
- JavaScript ES6*

### 📁 ساختار پروژه
```
React-Exam/
├── Code/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Header/
│   │   │   ├── Login/
│   │   │   ├── TaskForm/
│   │   │   ├── TaskList/
│   │   │   └── NotFound/
│   │   ├── Hooks/
│   │   │   └── use

Api/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── db.json
│   └── index.html
└── README.md
```

### 💡 نکات و تجربیات
- سازماندهی پروژه React برای مقیاس‌پذیری  
- کار با APIها و داده‌های REST  
- طراحی فرم‌های کنترل‌شده و کد تمیز  
- تمرین کدنویسی تست‌محور و ساختار یافته  

### 🧾 لایسنس
تحت مجوز *MIT License منتشر شده و برای استفاده شخصی یا آموزشی آزاد است.

---

Developed with ❤️ by Erfan Ahmadi*
