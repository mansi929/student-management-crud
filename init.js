const mongoose = require("mongoose");

const Student = require("./models/student");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/college");
}
let allStudents = [
  {
    name: "Bablu Joshi",
    rollNo: 23010120001,
    branch: "Information Technology",
    semester: 6,
    email: "bjbablujoshi@gmail.com",
    phone: "8630444725",
    gender: "male",
    address: "Lohaghat, Uttarakhand",
  },
  {
    name: "Mansi Bagauli",
    rollNo: 23010120006,
    branch: "Information Technology",
    semester: 6,
    email: "mansibagauli@gmail.com",
    phone: "8395037898",
    gender: "female",
    address: "Lohaghat, Uttarakhand",
  },
  {
    name: "Rohit Kumar",
    rollNo: 22002,
    branch: "Computer Science",
    semester: 4,
    phone: "9876543211",
    gender: "male",
    address: "Haldwani, Uttarakhand",
  },
  {
    name: "Amit Verma",
    rollNo: 22004,
    branch: "Mechanical",
    semester: 3,
    email: "amit@gmail.com",
    gender: "male",
    address: "Nainital, Uttarakhand",
  },
  {
    name: "Sneha Joshi",
    rollNo: 22005,
    branch: "Civil",
    semester: 2,
    email: "sneha@gmail.com",
    phone: "9876543214",
    gender: "female",
    address: "Champawat, Uttarakhand",
  },
  {
    name: "Arjun Singh",
    rollNo: 22006,
    branch: "Electrical",
    semester: 5,
    email: "arjun@gmail.com",
    phone: "9876543215",
    gender: "male",
  },
  {
    name: "Kavya Pant",
    rollNo: 22007,
    branch: "Information Technology",
    semester: 4,
    email: "kavya@gmail.com",
    phone: "9876543216",
    gender: "female",
    address: "Almora, Uttarakhand",
  },
  {
    name: "Deepak Rawat",
    rollNo: 22008,
    branch: "Computer Science",
    semester: 6,
    email: "deepak@gmail.com",
    phone: "9876543217",
    gender: "male",
    address: "Ranikhet, Uttarakhand",
  },
  {
    name: "Anjali Mehra",
    rollNo: 22009,
    branch: "Civil",
    semester: 3,
    email: "anjali@gmail.com",
    phone: "9876543218",
    gender: "female",
    address: "Bageshwar, Uttarakhand",
  },
  {
    name: "Vikas Tiwari",
    rollNo: 22010,
    branch: "Mechanical",
    semester: 5,
    email: "vikas@gmail.com",
    phone: "9876543219",
    gender: "male",
    address: "Kashipur, Uttarakhand",
  },
];

Student.insertMany(allStudents);
