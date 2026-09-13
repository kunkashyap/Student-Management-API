# Student Management REST API🌚

Simple REST API built with Node.js and Express to manage student records using in-memory array/JSON data (no database).

## Project Structure
```
student-management-api/
├── app.js
├── package.json
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js
```

## Setup
```bash
npm install
npm start
```
Server runs at `http://localhost:3000`

## API Endpoints

| Method | Endpoint        | Description             |
|--------|-----------------|--------------------------|
| GET    | /students       | Get all students         |
| GET    | /students/:id   | Get a student by ID      |
| POST   | /students       | Create a new student     |
| PUT    | /students/:id   | Update an existing student |
| DELETE | /students/:id   | Delete a student          |

### Sample POST body
```json
{
  "name": "Neha",
  "course": "MCA",
  "age": 22
}
```

## Status Codes Used
- 200 – Success
- 201 – Created
- 400 – Bad Request (invalid/missing input)
- 404 – Not Found
- 500 – Internal Server Error

## Testing
Use Postman to test all 5 endpoints (GET all, GET by id, POST, PUT, DELETE).
