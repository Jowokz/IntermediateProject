# Intermediate React + Node Practice Project

## Project: TaskFlow Lite

A full-stack task/project tracker built with:

- React + Vite
- React Router
- Context API
- Custom hooks
- Node.js + Express
- Layered backend architecture
- JWT-style mock authentication
- Middleware
- Validation
- Centralized error handling
- In-memory data store

This project is intentionally built without a database so you can focus on architecture, request flow, state management, and API design.

---

## Folder Structure

```txt
intermediate-react-node-project/
  backend/
    src/
      controllers/
      routes/
      services/
      middleware/
      data/
      utils/
      server.js
  frontend/
    src/
      api/
      components/
      context/
      hooks/
      pages/
      App.jsx
      main.jsx
  docs/
    concept-guide.md
```

---

## How to Run

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

### Frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

## Demo Login

Use any email/password. This project simulates auth and returns a fake token.

Example:

```txt
Email: jo@example.com
Password: password123
```

---

## API Endpoints

### Auth

```txt
POST /api/auth/login
GET  /api/auth/me
```

### Projects

```txt
GET    /api/projects
POST   /api/projects
GET    /api/projects/:projectId/tasks
POST   /api/projects/:projectId/tasks
PUT    /api/projects/:projectId/tasks/:taskId
DELETE /api/projects/:projectId/tasks/:taskId
```

---

## What You Should Practice

1. Understand frontend routing with React Router
2. Understand API abstraction with `apiClient.js`
3. Understand Context API for auth state
4. Understand Express routes/controllers/services
5. Understand middleware and centralized error handling
6. Understand how frontend sends token to backend
7. Understand how route params work
8. Understand where business logic should live

