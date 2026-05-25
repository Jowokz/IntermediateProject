# Concept Guide — Intermediate React + Node Project

## 1. What Makes This Intermediate?

The beginner version usually puts most backend logic inside `server.js` and most frontend logic inside `App.jsx`.

This project separates responsibilities:

- Routes decide URL mappings.
- Controllers receive `req` and `res`.
- Services contain business logic.
- Middleware runs before route handlers.
- React pages represent screens.
- React components represent reusable UI pieces.
- API client centralizes fetch calls.
- Auth context stores logged-in user/token state.

This is closer to real-world structure.

---

## 2. Backend Flow

When a request comes in:

```txt
HTTP request
  ↓
Express middleware
  ↓
Route match
  ↓
Controller function
  ↓
Service function
  ↓
Response sent
```

Example:

```txt
GET /api/projects/:projectId/tasks
```

Flow:

```txt
projectRoutes.js
  → taskController.getTasksByProject
  → taskService.getTasksByProject
  → res.json(...)
```

---

## 3. Why Use Controllers?

A controller talks directly to Express objects:

```js
req
res
next
```

Its job is to:

- read params/body/query
- call service logic
- send response
- forward errors

Controllers should not contain heavy business rules.

---

## 4. Why Use Services?

Services contain the actual app logic.

For example:

```js
function createTask(projectId, payload) {
  // validate project exists
  // create task object
  // save task
  // return task
}
```

This separation makes code easier to test and change later.

---

## 5. Middleware

Middleware is code that runs before your final route handler.

Examples in this project:

- `authMiddleware.js` checks for token
- `errorMiddleware.js` handles errors globally
- `express.json()` parses JSON body
- `cors()` allows frontend/backend communication

Middleware usually has this shape:

```js
(req, res, next) => {
  // do something
  next();
}
```

Calling `next()` means: continue to the next middleware/handler.

---

## 6. Frontend Flow

React app flow:

```txt
main.jsx
  ↓
App.jsx
  ↓
Routes
  ↓
Pages
  ↓
Components
  ↓
API client
  ↓
Backend
```

---

## 7. Why Use an API Client?

Instead of writing `fetch()` everywhere, this project has:

```txt
src/api/apiClient.js
```

Benefits:

- one place for base URL
- one place to attach token
- one place to handle JSON
- easier refactoring later

---

## 8. Auth Context

The Auth Context stores:

- current user
- token
- login function
- logout function

This allows any component to access auth state without manually passing props down many levels.

---

## 9. Route Params

Backend route:

```js
router.get('/:projectId/tasks', getTasksByProject);
```

Request:

```txt
/api/projects/p1/tasks
```

Then:

```js
req.params.projectId
```

is:

```txt
p1
```

Frontend route:

```jsx
<Route path="/projects/:projectId" element={<ProjectDetail />} />
```

Inside React:

```js
const { projectId } = useParams();
```

---

## 10. Suggested Learning Path

### First Pass

Run the app and click around.

### Second Pass

Trace this flow:

```txt
Click project → frontend route changes → useEffect runs → API call → backend route → controller → service → response → UI updates
```

### Third Pass

Add a new feature:

- due dates
- task comments
- task assignee
- priority filters
- project archive

### Fourth Pass

Replace in-memory data with MongoDB or PostgreSQL.

