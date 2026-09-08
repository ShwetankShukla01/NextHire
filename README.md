# NextHire — MERN Job Portal

A working MERN MVP with JWT authentication, role-based access, recruiter/student/admin dashboards, job CRUD API, applications, resume upload API, search/filter, and responsive Tailwind UI.

## Requirements
- Node.js 18+
- MongoDB local or MongoDB Atlas

## Run

### 1. Backend
```bash
cd server
cp .env.example .env
# edit MONGO_URI and JWT_SECRET
npm install
npm run dev
```
API: http://localhost:5000

### 2. Frontend
```bash
cd client
npm install
npm run dev
```
Open http://localhost:5173

## Roles
- `student`: register normally, browse and apply
- `recruiter`: create an account as Recruiter; use API endpoints to create/update/delete jobs and manage applications
- `admin`: seed/create an admin user manually in MongoDB (set role to `admin`)

## Main API
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/jobs?q=&location=&type=`
- GET `/api/jobs/:id`
- POST/PUT/DELETE `/api/jobs/:id` (recruiter)
- POST `/api/applications/:jobId` (student)
- GET `/api/applications/mine` (student)
- GET `/api/applications/recruiter` (recruiter)
- PATCH `/api/applications/:id/status` (recruiter)
- POST `/api/users/resume` multipart field `resume` (student)
- GET `/api/admin/stats` (admin)

## Notes
The supplied UI focuses on the core working flow. For production, add email verification, password reset, pagination, rate limiting, cloud resume storage, validation, audit logs, and stronger admin management.
