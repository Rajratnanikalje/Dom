let form = document.querySelector("form")
let tbody = document.querySelector("tbody")

let name = document.getElementById("name");
let employee = document.getElementById("employee");
let department = document.getElementById("department");
let experience = document.getElementById("experience")
let email = document.getElementById("email")
let mobile = document.getElementById("number")

form.addEventListener("submit", getData)

let Employee_arr = JSON.parse(localStorage.getItem("Employee_data")) || [];
display(Employee_arr);

function getData(event){
  event.preventDefault()

  let Employee_obj = {
    name : name.value,
    employee : employee.value,
    department : department.value,
    experience : Number(experience.value),
    email : email.value,
    mobile : mobile.value
  }

  Employee_arr.push(Employee_obj)
  
  localStorage.setItem("Employee_data", JSON.stringify(Employee_arr));
 
  display(Employee_arr)
  form.reset()
}

function display(data){
  tbody.innerHTML = "";

  data.map(function (el, index){
    let row = document.createElement("tr");

    let col1 = document.createElement("td");
    col1.innerText = el.name;

    let col2 = document.createElement("td");
    col2.innerText = el.employee;

    let col3 = document.createElement("td");
    col3.innerText = el.department;

    let col4 = document.createElement("td");
    col4.innerText = el.experience;

    let col5 = document.createElement("td");
    col5.innerText = el.email;

    let col6 = document.createElement("td");
    col6.innerText = el.mobile;

    let col7 = document.createElement("td");
    let role = "";
    if(el.experience > 5){
     role = "Senior";
    }else if(el.experience >= 2 && el.experience <= 5){
     role = "Junior";
    }else{
     role = "Trainee";
    }
    col7.innerText = role;

    let col8 = document.createElement("td");
    col8.innerText = "Delete"
    col8.style.cursor = "pointer"
    col8.style.backgroundColor = "red"
    col8.style.color = "white"
    
    

    col8.addEventListener("click", function(){
      deletefun(index)
    })

    row.append(col1,col2,col3,col4,col5,col6,col7,col8);
    tbody.append(row);
  });
}

function deletefun(num){
  Employee_arr.splice(num,1)
  localStorage.setItem("Employee_data", JSON.stringify(Employee_arr));
  display(Employee_arr)
}
