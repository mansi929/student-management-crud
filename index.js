const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
require("dotenv").config();

const Student = require("./models/student");

const PORT = process.env.PORT || 8080;

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database connection failed:", err);
  });

// Show all students
app.get("/student", async (req, res) => {
  try {
    const students = await Student.find();
    res.render("index.ejs", { students });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error while fetching students");
  }
});

// New student form
app.get("/student/new", (req, res) => {
  res.render("new.ejs");
});

// Add new student
app.post("/student", async (req, res) => {
  try {
    const { name, rollNo, branch, semester, email, phone, gender, address } =
      req.body;

    const newStudent = new Student({
      name,
      rollNo,
      branch,
      semester,
      email,
      phone,
      gender,
      address,
    });

    await newStudent.save();

    res.redirect("/student");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error while adding student");
  }
});

// Delete student
app.delete("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Student.findByIdAndDelete(id);

    res.redirect("/student");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error while deleting student");
  }
});

// Update student
app.put("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { name, rollNo, branch, semester, email, phone, gender, address } =
      req.body;

    await Student.findByIdAndUpdate(
      id,
      {
        name,
        rollNo,
        branch,
        semester,
        email,
        phone,
        gender,
        address,
      },
      {
        runValidators: true,
        new: true,
      },
    );

    res.redirect("/student");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error while updating student");
  }
});

// Edit student form
app.get("/student/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).send("Student not found");
    }

    res.render("edit.ejs", { student });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error while finding student");
  }
});

// 404 Route
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is working on PORT ${PORT}`);
});
