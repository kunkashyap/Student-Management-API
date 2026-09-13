// data/students.js
// In-memory "database" using a simple array of JSON objects.
// No MongoDB / MySQL / Mongoose used, as per assignment restrictions.

let students = [
  { id: 1, name: "Rahul", course: "BCA", age: 20 },
  { id: 2, name: "Priya", course: "BTech", age: 21 },
  { id: 3, name: "Amit", course: "BCA", age: 19 }
];

module.exports = students;
