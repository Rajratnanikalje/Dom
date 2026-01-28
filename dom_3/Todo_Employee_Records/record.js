let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

let name = document.getElementById("name");
let employee = document.getElementById("employee");
let department = document.getElementById("department");
let experience = document.getElementById("experience");
let email = document.getElementById("email");
let number = document.getElementById("number");

let employee_arr = JSON.parse(localStorage.getItem("employee_arr")) || [];

form.addEventListener("submit", getData);
display(employee_arr);

function getData(event){
  event.preventDefault();

  let employee_obj = {
    name: name.value,
    employee: employee.value,
    department: department.value,
    experience: Number(experience.value),
    email: email.value,
    number: number.value,
  };

  employee_arr.push(employee_obj);
  localStorage.setItem("employee_arr", JSON.stringify(employee_arr));
  display(employee_arr);
  form.reset();
}

function display(data){
  tbody.innerHTML = "";

  data.forEach(function(el, index){
    let row = document.createElement("tr");

    let role = "";
    if(el.experience > 5){
      role = "Senior";
    } else if(el.experience >= 2){
      role = "Junior";
    } else {
      role = "Fresher";
    }

    row.innerHTML = `
      <td>${el.name}</td>
      <td>${el.employee}</td>
      <td>${el.department}</td>
      <td>${el.experience}</td>
      <td>${el.email}</td>
      <td>${el.number}</td>
      <td>${role}</td>
      <td style="background:red;color:white;cursor:pointer;">Delete</td>
    `;

    row.lastElementChild.addEventListener("click", function () {
  deleteData(index);
});


    tbody.append(row);
  });
}

function deleteData(index){
  employee_arr.splice(index,1);
  localStorage.setItem("employee_arr", JSON.stringify(employee_arr));
  display(employee_arr);
}
