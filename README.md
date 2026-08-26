# Job Portal API

A RESTful backend API for a Job Portal application built with **Node.js,
Express.js, and MongoDB**.

## 🚀 Features

- Create/post jobs
- Get all jobs
- Get jobs posted by a specific user
- Get a single job by ID
- Update a job
- Delete a job
- MongoDB Atlas integration
- CORS enabled
- JSON request/response support
- Environment variable support with dotenv

## 🛠️ Technologies

- Node.js
- Express.js
- MongoDB
- MongoDB Atlas
- CORS
- dotenv

## 📁 Project Setup

### 1. Clone the project

```bash
git clone <your-github-repository-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env`

Create a `.env` file in the root directory:

```env
MONGODB_USER=your_mongodb_username
MONGODB_PASS=your_mongodb_password
PORT=5000
```

> Never commit your `.env` file to GitHub.

### 4. Start the server

For normal Node.js:

```bash
node index.js
```

For development with nodemon:

```bash
nodemon index.js
```

The server will run at:

```text
http://localhost:5000
```

---

# 🔗 API Endpoints

Base URL:

```text
http://localhost:5000
```

## 1. API Health Check

### GET `/`

Checks whether the API server is running.

**Request**

```http
GET /
```

**Response**

```json
{
  "message": "Api Working"
}
```

---

## 2. Create a Job

### POST `/jobs`

Creates a new job in MongoDB.

**Request**

```http
POST /jobs
Content-Type: application/json
```

**Example Body**

```json
{
  "jobTitle": "Frontend Developer",
  "companyName": "Tech Solutions Ltd.",
  "category": "Web Development",
  "companyLogo": "https://example.com/logo.png",
  "jobType": "Full-time",
  "experience": "1-2 Years",
  "location": "Dhaka, Bangladesh",
  "website": "https://example.com",
  "contactEmail": "hr@example.com",
  "vacancy": 3,
  "education": "Bachelor's Degree in CSE",
  "workingHours": "9:00 AM - 6:00 PM",
  "salaryRange": {
    "min": 30000,
    "max": 50000,
    "currency": "BDT"
  },
  "applicationDeadline": "2026-09-30",
  "description": "We are looking for a skilled Frontend Developer.",
  "responsibilities": [
    "Build responsive websites",
    "Develop reusable React components",
    "Fix bugs and improve performance"
  ],
  "requirements": ["JavaScript", "React.js", "HTML", "CSS"],
  "skills": ["React.js", "JavaScript", "Tailwind CSS", "Git"],
  "benefits": ["Annual bonus", "Paid leave", "Training opportunities"],
  "languages": ["Bangla", "English"],
  "user": "user@example.com"
}
```

---

## 3. Get All Jobs

### GET `/jobs`

Returns all jobs.

**Request**

```http
GET /jobs
```

**Response**

```json
[
  {
    "_id": "ObjectId",
    "jobTitle": "Frontend Developer",
    "companyName": "Tech Solutions Ltd."
  }
]
```

---

## 4. Get Jobs by User

### GET `/jobs?email=USER_EMAIL`

Returns only jobs posted by a specific user.

**Request**

```http
GET /jobs?email=user@example.com
```

The API checks the `user` field in the job document.

**Example**

```http
GET http://localhost:5000/jobs?email=shonag.webdev@gmail.com
```

**Response**

```json
[
  {
    "_id": "ObjectId",
    "jobTitle": "Frontend Developer",
    "companyName": "Tech Solutions Ltd.",
    "user": "shonag.webdev@gmail.com"
  }
]
```

---

## 5. Get Job by ID

### GET `/job/:id`

Returns a single job using its MongoDB `_id`.

**Request**

```http
GET /job/68a8f007fb5b867680fcadc72
```

**Example**

```http
GET http://localhost:5000/job/68a8f007fb5b867680fcadc72
```

---

## 6. Update a Job

### PATCH `/job/:id`

Updates an existing job.

**Request**

```http
PATCH /job/68a8f007fb5b867680fcadc72
Content-Type: application/json
```

**Example Body**

```json
{
  "jobTitle": "Senior Frontend Developer",
  "salaryRange": {
    "min": 50000,
    "max": 80000,
    "currency": "BDT"
  },
  "experience": "3-5 Years"
}
```

The API uses MongoDB `$set`, so the provided fields are updated.

**Example URL**

```text
http://localhost:5000/job/68a8f007fb5b867680fcadc72
```

---

## 7. Delete a Job

### DELETE `/job/:id`

Deletes a job using its MongoDB `_id`.

**Request**

```http
DELETE /job/68a8f007fb5b867680fcadc72
```

**Example**

```text
http://localhost:5000/job/68a8f007fb5b867680fcadc72
```

---

# 📋 API Summary

Method Endpoint Description

---

GET `/` Check API status
POST `/jobs` Create a new job
GET `/jobs` Get all jobs
GET `/jobs?email=user@example.com` Get jobs posted by a user
GET `/job/:id` Get a single job
PATCH `/job/:id` Update a job
DELETE `/job/:id` Delete a job

---

# 🗄️ MongoDB

Database:

```text
jobPortal
```

Collection:

```text
jobs
```

Example document structure:

```json
{
  "_id": "ObjectId",
  "jobTitle": "Frontend Developer",
  "companyName": "Tech Solutions Ltd.",
  "category": "Web Development",
  "salaryRange": {
    "min": 30000,
    "max": 50000,
    "currency": "BDT"
  },
  "responsibilities": [],
  "requirements": [],
  "skills": [],
  "benefits": [],
  "languages": [],
  "user": "user@example.com"
}
```

# 🔐 Environment Variables

The project uses the following environment variables:

```env
MONGODB_USER=
MONGODB_PASS=
PORT=
```

Make sure `.env` is included in `.gitignore`:

```text
.env
node_modules/
```

# 👨‍💻 Author

**Md Shohag Ali**

Job Portal Backend API built with Node.js, Express.js and MongoDB.
