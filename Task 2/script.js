
var n = 1;

function AddRow() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let branch = document.getElementById("branch").value;

    var element = document.getElementById('show');
    var NewRow = element.insertRow(n);

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);
    var cel7 = NewRow.insertCell(6);

    cel1.innerHTML = fname;
    cel2.innerHTML = lname;
    cel3.innerHTML = email;
    cel4.innerHTML = phone;
    cel6.innerHTML = gender;
    cel5.innerHTML = dob;
    cel7.innerHTML = branch;
    
    n++;
}



