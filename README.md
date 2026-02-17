# 🏢 Employee Attendance System (MERN Stack)

A Full-Stack Employee Attendance Management System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

This application allows organizations to manage employee attendance with secure authentication, role-based dashboards, and performance analytics.

---

## 🚀 Live Demo

🔹 Frontend: https:https://employeetracker07.netlify.app/  
🔹 Backend API: https://employee-attendance-system-7egl.onrender.com

---

# 📌 Features

- 🔐 JWT Authentication (Login/Register)
- 👥 Role-Based Access (Admin / Manager / Employee)
- 📅 Attendance Marking System
- 📊 Weekly Trend Charts
- 📈 Dashboard Summary Cards
- 🛡️ Protected Routes (Middleware-based)
- 🌐 Fully Deployed
- 📦 RESTful API Architecture

---

# 🛠️ Tech Stack

## Frontend
- React.js (Vite)
- Context API
- Axios
- Chart Components

## Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt Password Hashing

## Database
- MongoDB Atlas

## Deployment
- Frontend → Netlify
- Backend → Render
- Database → MongoDB Atlas

---

# 📂 Project Structure

```

Employee-Attendance-System
├── Frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── Backend
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── middleware
│   └── server.js
│
├── screenshots
└── README.md

````

---

# ⚙️ Setup Instructions

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Employee-Attendance-System.git
cd Employee-Attendance-System
````

---

# 🔧 Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the **Backend** folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

Backend will run at:

```
http://localhost:5000
```

---

# 🎨 Frontend Setup

```bash
cd Frontend
npm install
```

Create a `.env` file inside the **Frontend** folder:

```
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🌍 Environment Variables

## Backend (.env)

| Variable   | Description               |
| ---------- | ------------------------- |
| PORT       | Server Port               |
| MONGO_URI  | MongoDB Connection String |
| JWT_SECRET | JWT Secret Key            |

## Frontend (.env)

| Variable     | Description      |
| ------------ | ---------------- |
| VITE_API_URL | Backend Base URL |

---

# 🌱 Seed Data (Sample Users & Attendance)

To insert sample users and attendance records:

```bash
cd Backend
node seed.js
```

### 👤 Sample Login Credentials

| Role     | Email                                           | Password |
| -------- | ----------------------------------------------- | -------- |
| Manager  | [maker@test.com](mailto:maker@test.com)         | 123456   |
| Employee | [prabanjan@test.com](mailto:prabanjan@test.com) | 123456   |

---

# 🖼️ Screenshots

## 🔐 Login Page

Add screenshot in: `screenshots/login.png`

## 👨‍💼 Employee Dashboard

Add screenshot in: `screenshots/employee-dashboard.png`

## 📊 Manager Dashboard

Add screenshot in: `screenshots/manager-dashboard.png`

---

# 🔒 Authentication Flow

1. User logs in with email & password
2. Backend verifies credentials
3. JWT token is generated
4. Token is stored securely
5. Protected routes validate token before access

---

# 🏗️ Backend Architecture

* Routes → Handle API endpoints
* Controllers → Business logic
* Middleware → JWT verification
* Models → MongoDB schemas
* Seed Script → Sample data generation

---

# 🚀 Deployment Guide

## Frontend (Netlify)

* Base Directory → `Frontend`
* Build Command → `npm run build`
* Publish Directory → `dist`
* Environment Variable:

  ```
  VITE_API_URL=https://your-render-backend-url
  ```

## Backend (Render)

* Root Directory → `Backend`
* Build Command → `npm install`
* Start Command → `npm start`
* Add Environment Variables in Render Dashboard

---

# 🧠 Key Learnings

* Full-Stack MERN Architecture
* JWT Authentication & Authorization
* RESTful API Design
* MongoDB Schema Design
* Deployment & Production Debugging
* CORS & Environment Variable Management

---

# 👨‍💻 Author

**Prabanjan A**
VH12535
Vel Tech High Tech Dr.Rangarajan Dr.Sakunthala Engineering College 
BE ECE | MERN Stack Developer

---

```

screenshots/

```
Tell me what you want next 🚀
```
<img width="1365" height="767" alt="login" src="https://github.com/user-attachments/assets/98819dc1-f463-4613-b8f3-82fdc801be1d" />
<img width="1365" height="767" alt="employee dashboard" src="https://github.com/user-attachments/assets/993218e4-f317-4948-8bbb-806a497b0355" />
<img width="1365" height="767" alt="attend history" src="https://github.com/user-attachments/assets/0b5431a5-0d27-40bf-a985-9a434125f578" />
<img width="1365" height="767" alt="profile" src="https://github.com/user-attachments/assets/72217976-5bd4-4c2b-8543-cde872455aa0" />
<img width="1365" height="767" alt="manager dashboard" src="https://github.com/user-attachments/assets/b40562d6-1b23-4073-847f-91fc3c223f75" />
<img width="1365" height="767" alt="all employees attendance" src="https://github.com/user-attachments/assets/3841d3f9-8dbb-424e-9b7a-a419b6065d3f" />
<img width="1356" height="767" alt="attendance reports" src="https://github.com/user-attachments/assets/f5a60936-0520-4af2-84c3-fa89c2ecc9f6" />
<img width="1365" height="765" alt="team calender" src="https://github.com/user-attachments/assets/becc664e-eb4a-449e-ad3f-4b09d3b36dfd" />
