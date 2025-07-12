# 📝 Simple Task Manager API

A minimal task management REST API built with **Express.js**, **MongoDB**, **Mongoose** and **JWT authentication**. Users can sign up, log in, create/update/delete tasks, and view their profile. Tasks are user-specific.

---

## 🚀 Features

- ✅ User Registration and Login (JWT-based)
- ✅ Secure routes with `Bearer Token` authentication
- ✅ Task creation, search, pagination, status updates
- ✅ Task deletion and filtering by user
- ✅ User profile endpoint
- ✅ MongoDB + Mongoose ODM
- ✅ Environment-based config (Render ready)
- ✅ Error middleware and friendly UX responses

---

## 📁 Folder Structure

```
SIMPLE TASK MANAGER SYSTEM/
│
├── controllers/
│   ├── auth.controller.js
│   ├── task.controller.js
│   └── user.controller.js
│
├── middlewares/
│   ├── auth.middleware.js
│   └── error.middleware.js
│
├── models/
│   ├── user.model.js
│   └── task.model.js
│
├── routes/
│   ├── auth.routes.js
│   ├── task.routes.js
│   └── user.routes.js
│
├── utils/
│   └── generateToken.js
│
├── config/
│   └── db.js
│
├── app.js
└── server.js
```

---

## 🌐 API Endpoints

> All authenticated routes require:
```
Authorization: Bearer <your-jwt-token>
```

### 🔐 Auth Routes

| Method | Endpoint     | Description         |
|--------|--------------|---------------------|
| POST   | `/api/signup` | Register a new user |
| POST   | `/api/login`  | Login and get token |

---

### 👤 User Routes

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | `/api/profile` | Get logged-in user profile (name, email) |

---

### ✅ Task Routes

| Method | Endpoint           | Description                          |
|--------|--------------------|--------------------------------------|
| POST   | `/api/tasks`        | Create a new task                    |
| GET    | `/api/tasks`        | Get all tasks (search + pagination) |
| PATCH  | `/api/tasks/:id`    | Update task status (pending/completed) |
| DELETE | `/api/tasks/:id`    | Delete a task                        |

### 🔎 Task Query Parameters

| Param  | Description             | Example             |
|--------|-------------------------|---------------------|
| `page` | Page number (default 1) | `/api/tasks?page=2` |
| `limit`| Number per page (default 10) | `/api/tasks?limit=5` |
| `search` | Search task name       | `/api/tasks?search=read` |

---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/melkien16/Task-Manager-System.git
cd Task-Manager-System
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/task_manager?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_here
```

> Replace with your actual MongoDB credentials and a strong JWT secret.

---

### 4. Run Locally

```bash
npm start
```

Server will start on:
```
http://localhost:5000
```

---

## 📦 Deployment

This project is ready for deployment on [Render](https://render.com), [Vercel + Serverless Functions], or [Heroku].

Just make sure:
- All environment variables are set in the dashboard
- `npm start` is the start command
- CORS is enabled for frontend requests

---

## 🛡 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT + bcrypt
- **ORM:** Mongoose

---

## ✅ To Do (Optional Enhancements)

- [ ] Add due date and priority to tasks
- [ ] Add password reset via email
- [ ] Rate limiting / brute force protection
- [ ] React frontend client

---

## 🤝 License

MIT License © 2025 [Melkie Yilk]