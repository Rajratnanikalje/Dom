  let form = document.querySelector("form");
  let tbody = document.querySelector("tbody");

  let name = document.getElementById("name");
  let employee = document.getElementById("employee");
  let department = document.getElementById("department");
  let experience = document.getElementById("experience");
  let email = document.getElementById("email");
  let number = document.getElementById("number");

  form.addEventListener("submit",getData);

  let employee_arr = JSON.parse(localStorage.getItem("employee_arr")) || [];

  display(employee_arr)
  
  function getData(){
    event.preventDefault();

    let employee_obj = {
      name : name.value,
      employee : employee.value,
      department : department.value,
      experience : experience.value,
      email : email.value,
      number : number.value,
    };

    employee_arr.push(employee_obj);

    localStorage.setItem("employee_arr",JSON.stringify(employee_arr))

    display(employee_arr);

  }

  function display(data){
    tbody.innerHTML = "",
    data.map(function(el, index){
      let row = document.createElement("tr")
  
      let col1 = document.createElement("td")
      col1.innerText = el.name;
      let col2 = document.createElement("td")
      col2.innerText = el.employee;
      let col3 = document.createElement("td")
      col3.innerText = el.department;
      let col4 = document.createElement("td")
      col4.innerText = el.experience;
      let col5 = document.createElement("td")
      col5.innerText = el.email;
      let col6 = document.createElement("td")
      col6.innerText = el.number;
      let col7 = document.createElement("td")
      if(el.experience > 5){
       el.experience = "Senior";
      }else if(el.experience >= 2 && el.experience <= 5){
       el.experience = "Junior";
      }else if(el.experience <=1){
       el.experience = "Fresher";
      }
      col7.innerText = el.experience;
      let col8 = document.createElement("td")
      col8.innerText = "Delete";
      col8.style.cursor = "pointer";
      col8.style.backgroundColor = "red"
      col8.style.color = "white"
      col8.addEventListener("click",Deletedata)

      row.append(col1,col2,col3,col4,col5,col6,col7,col8);
      tbody.append(row);

    });

  }
  function Deletedata(){
    event.target.parentNode.remove();
    
  }