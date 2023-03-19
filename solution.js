const lorems = [
  "Lorem, ipsum dolor.",
  "Non, perspiciatis?",
  "Asperiores, perspiciatis.",
  "Vitae, cupiditate odio.",
  "Repellat, corporis iure.",
];

// Question 1:

// Question 2 & 3:
function Student(name, id, program) {
  this.name = name;
  this.id = id;
  this.program = program;

  return this;
}

const insertButton = document.getElementById("insert");
const showButton = document.getElementById("show");
const output = document.querySelector(".output");

let students = new Array();

function insertStudent() {
  const name = document.getElementById("studentName").value;
  const id = document.getElementById("studentId").value;
  const program = document.getElementById("program").value;

  const student = new Student(name, id, program);

  students.push(student);

  if (!window.confirm("Do You Want to Insert Another Student??")) {
    insertButton.style.opacity = "0";
    insertButton.style.pointerEvents = "none";
  }
}

function displayStudents() {
  output.innerHTML = "";
  students.forEach((student) => {
    let p = document.createElement("p");
    p.innerHTML = `ID: ${student.id} | Name: ${student.name} | program: ${student.program}`;
    output.appendChild(p);
  });
}

insertButton.addEventListener("click", () => {
  insertStudent();
  console.table(students);
});

showButton.addEventListener("click", () => {
  displayStudents();
});

// Question 4:
const validateName = (inputValue, inputName) =>
  inputValue ? "" : `${inputName} is empty\n`;

const validateSalary = (salary) =>
  !salary && typeof salary != Number
    ? "Salay is empty\n"
    : salary >= 3000 && salary <= 50000
    ? ""
    : "salary must be >3000 and <50000\n";

const validateAge = (age) =>
  !age && typeof age != Number
    ? "age is empty\n"
    : age >= 18 && age < 70
    ? ""
    : "age must be >18 and <70\n";

const validatePhone = (phone) =>
  !phone && typeof phone != Number
    ? "phone is empty\n"
    : phone.length == 11
    ? ""
    : "phone must be 11 digits\n";

function validate(form) {
  let errors = validateName(form.firstName.value, "First name") || "";
  errors += validateName(form.familyName.value, "Family name");
  errors += validateName(form.department.value, "department");
  errors += validateSalary(form.salary.value);
  errors += validateAge(form.age.value);
  errors += validatePhone(form.phone.value);
  if (errors) {
    alert(errors);
    return false;
  } else {
    return true;
  }
}
