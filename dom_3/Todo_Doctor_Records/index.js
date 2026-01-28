  let form = document.querySelector("form");
  let tbody = document.querySelector("tbody");

  let name = document.getElementById("name");
  let doctor = document.getElementById("doctor");
  let specialization = document.getElementById("specialization");
  let experience = document.getElementById("experience");
  let email = document.getElementById("email");
  let number = document.getElementById("number");

  // ✅ LOAD FROM LOCALSTORAGE
  let doctor_arr = JSON.parse(localStorage.getItem("doctor_arr")) || [];
  display(doctor_arr);

  form.addEventListener("submit", getData);

  function getData(event){
    event.preventDefault();

    let exp = Number(experience.value);
    let role = "";

    if(exp > 5){
      role = "Senior";
    }else if(exp >= 2){
      role = "Junior";
    }else{
      role = "Training";
    }

    let doctor_obj = {
      name : name.value,
      doctor : doctor.value,
      specialization : specialization.value,
      experience : exp,
      email : email.value,
      number : number.value,
      role : role
    };

    doctor_arr.push(doctor_obj);

    // ✅ SAVE TO LOCALSTORAGE
    localStorage.setItem("doctor_arr", JSON.stringify(doctor_arr));

    display(doctor_arr);
    form.reset();
  }

  function display(data){
    tbody.innerHTML = "";

    data.map(function(el, index){
      let row = document.createElement("tr");

      let col1 = document.createElement("td");
      col1.innerText = el.name;

      let col2 = document.createElement("td");
      col2.innerText = el.doctor;

      let col3 = document.createElement("td");
      col3.innerText = el.specialization;

      let col4 = document.createElement("td");
      col4.innerText = el.experience;

      let col5 = document.createElement("td");
      col5.innerText = el.email;

      let col6 = document.createElement("td");
      col6.innerText = el.number;

      let col7 = document.createElement("td");
      col7.innerText = el.role;

      let col8 = document.createElement("td");
      col8.innerText = "Delete";
      col8.style.backgroundColor = "red";
      col8.style.color = "white";
      col8.style.cursor = "pointer";

      col8.addEventListener("click", function(){
        doctor_arr.splice(index,1);
        localStorage.setItem("doctor_arr", JSON.stringify(doctor_arr));
        display(doctor_arr);
      });

      row.append(col1,col2,col3,col4,col5,col6,col7,col8);
      tbody.append(row);

   
    });

  }