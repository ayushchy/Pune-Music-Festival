function register() {

  var fo = document.getElementById("form");   
    
    fo.style.display = "block";
    
}
    
function showr() {
  var tab = document.getElementById("ta");
  var b = document.getElementById("form");
  var i=document.getElementById("imk");
       
  
   tab.style.display = "block";

   b.style.display = "none";
   i.style.display = "none";
 } 
 

 


 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();   
 var dateTime = date+' '+time;





function tables() {                                  


 
    alert("Form Submitted :)")
    var newRow = table.insertRow(table.length),          
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      cell5 = newRow.insertCell(4);
     

   name = document.getElementById("name").value,
    em = document.getElementById("email").value,
   con= document.getElementById("contact").value
   


   var pm = document.getElementById("payment");
    var pay = pm.options[pm.selectedIndex].text;

    cell1.innerHTML = dateTime;                                 
    cell2.innerHTML = name;
    cell3.innerHTML = em;
    cell4.innerHTML = con;
    cell5.innerHTML = pay;
   
    
    document.getElementById("forms").reset();
                                           
                   
  

};
 

