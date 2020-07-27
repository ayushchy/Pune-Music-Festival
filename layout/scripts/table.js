function register() {
  var bg = document.getElementById("imk");
  var tab = document.getElementById("ta");
  var fo = document.getElementById("form");    //to display only form
    
    fo.style.display = "block";
    bg.style.display = "none";
    tab.style.display = "none";

    
function regsitrations() {
  var a = document.getElementById("tabless");
  var b = document.getElementById("register");
  var c = document.getElementById("myCarousel");     //to display only table
  
   a.style.display = "block";
   b.style.display = "none";
   c .style.display = "none";
 
}
 
  table = document.getElementById("table");

 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();   //calculate current date and time
 var dateTime = date+' '+time;


function validation() {                                     //validation of form and to check empty fields 
  var valid= true,
    name = document.getElementById("name").value,
    eamil = document.getElementById("eamil").value,
    contact = document.getElementById("contact").value,
    payment = document.getElementById("payment").value,

    var atposition=eamil.indexOf("@");  
    var dotposition=eamil.lastIndexOf("."); 

  if (name === "") {
    alert("Name cannot be empty");
    valid = false;
  } else if (name.length<3) {
    alert("Name too small");
    valid = false;
  } else if (name.length>30) {
    alert("Name too big");
    valid = false;
  } else if (isNaN(name)==false){
    alert("Name cannot be numeric");
    valid=false;
  } else if (email === "") {
    alert("Email id cannot be empty");
    valid = false;
  } else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length) {
    alert("Invalid Email id");
    valid = false;
  } else if (contact === "") {
    alert("Contact No. cannot be empty");
    valid = false;
  } else if (isNaN(contact)==true) {
    alert("Enter a Valid Phone Number (Only digits) ");
    valid = false;
  } else if (contact.length !=10 ) {
    alert("Enter a Valid Phone Number (10 digit only)");
    valid = false;
  } 

  return valid;

};


function addHtmlTableRow() {                              //if found valid, add into table


  var table = document.getElementById("table");
  if (validation()) {
    alert("Form Submitted :)")
    var newRow = table.insertRow(table.length),           //create new row for all the fields
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      cell5 = newRow.insertCell(4),

    name = document.getElementById("name").value,
    email = document.getElementById("email").value,
    
    

    contact = document.getElementById("contact").value,
    payment = document.getElementById("payment").value,
    


    if (document.getElementById('male').checked) {
    g = document.getElementById('male').value;
    }else if (document.getElementById('female').checked) {
    g = document.getElementById('female').value;
  } else if (document.getElementById('other').checked) {
    g = document.getElementById('other').value;
  }

    cell1.innerHTML = dateTime;                                 //insert inputs into cells
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = contact;
    cell5.innerHTML = payment;

    
    document.getElementById("reg").reset();
                                         
    document.getElementById("reg").reset();                     //reset form after submission 

    



 
}


};