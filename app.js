// app.js
// Main entry point of the Student Management REST API.

const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const PORT = process.env.PORT || 3000;

// ------------------- Middleware -------------------
app.use(express.json());  // Parse incoming JSON request bodies
app.use(logger);          // Custom logger middleware (logs every request)

// ------------------- Routes -------------------
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Student Management REST API",
    endpoints: {
      getAllStudents: "GET /students",
      getStudentById: "GET /students/:id",
      createStudent: "POST /students",
      updateStudent: "PUT /students/:id",
      deleteStudent: "DELETE /students/:id"
    }
  });
});

app.use("/students", studentRoutes);

// ------------------- 404 Handler (Route Not Found) -------------------
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// ------------------- Global Error Handler -------------------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});

// ------------------- Start Server -------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
