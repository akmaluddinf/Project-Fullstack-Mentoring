
// fetch('http://localhost:5000/employee')
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch('http://localhost:5000/service')
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch('http://localhost:5000/service_request')
//   .then(response => response.json())
//   .then(data => console.log(data));

// var xhr = new XMLHttpRequest();   // new HttpRequest instance 
// xhr.open("POST", "http://localhost:5000/employee");
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.send(JSON.stringify({name:"test", payroll:12345}));




//========================================================

function getRequesterName(event){ 
  document.getElementById("requesterName").value = event.target.options[event.target.selectedIndex].getAttribute("data-name")
  //console.log(event.target)
}

function getServiceType(event){ 
  document.getElementById("serviceType").value = event.target.options[event.target.selectedIndex].getAttribute("data-service-type")
  //console.log(event.target)
}


function addServiceItem() {
  "use strict";

   var table = document.getElementById("tableServiceItem");
   
   var row= document.createElement("tr");
   //console.log(row);
   var td1 = document.createElement("td");
   var td2 = document.createElement("td");
   var td3 = document.createElement("td");
   var td4 = document.createElement("td"); 
   var td5 = document.createElement("td");     

   td1.innerHTML = document.getElementById("serviceId").value;
   td2.innerHTML  = document.getElementById("serviceType").value;
   td3.innerHTML  = document.getElementById("description").value;
   td4.innerHTML  = document.getElementById("quantity").value;
   td5.innerHTML  = document.getElementById("unitPrice").value;

   row.appendChild(td1);
   row.appendChild(td2);
   row.appendChild(td3);
   row.appendChild(td4);
   row.appendChild(td5);

   table.children[0].appendChild(row);

   formClearService()
   getDataService()
};

function formClearService(){
  $('#serviceId').val("");
  $('#serviceType').val("");
  $('#description').val("");
  $('#quantity').val("");
  $('#unitPrice').val("");
}


function addComment() {
  "use strict";

   var table = document.getElementById("tableComment");
   
   var row= document.createElement("tr");
   //console.log(row);
   var td1 = document.createElement("td");

   td1.innerHTML = document.getElementById("comment").value;

   row.appendChild(td1);

   table.children[0].appendChild(row);

   formClearComment()
   getDataComment()
};

function formClearComment(){
  $('#comment').val("");
}


//================================================================GET DATA
function getDataService(){
  var TableDataService = new Array();
    
  $('#tableServiceItem tr').each(function(row, tr){
      TableDataService[row]={
        "service_id" : $(tr).find('td:eq(0)').text()
        , "service_type" :$(tr).find('td:eq(1)').text()
        , "description" : $(tr).find('td:eq(2)').text()
        , "quantity" : $(tr).find('td:eq(3)').text()
        , "unit_price" : $(tr).find('td:eq(4)').text()
      }
  }); 
  TableDataService.shift();  // first row is the table header - so remove
  console.log(TableDataService)
}

function getDataComment(){
  var TableDataComment = new Array();
    
  $('#tableComment tr').each(function(row, tr){
      TableDataComment[row]={
        "comment" : $(tr).find('td:eq(0)').text()
      }
  }); 
  TableDataComment.shift();  // first row is the table header - so remove
  console.log(TableDataComment)
}


//======================================================================================================
function sendData(){ 
  var TableDataService = new Array();
    
  $('#tableServiceItem tr').each(function(row, tr){
      TableDataService[row]={
        "service_id" : $(tr).find('td:eq(0)').text()
        , "service_type" :$(tr).find('td:eq(1)').text()
        , "description" : $(tr).find('td:eq(2)').text()
        , "quantity" : $(tr).find('td:eq(3)').text()
        , "unit_price" : $(tr).find('td:eq(4)').text()
      }
  }); 
  TableDataService.shift();  // first row is the table header - so remove

  var TableDataComment = new Array();
    
  $('#tableComment tr').each(function(row, tr){
      TableDataComment[row]={
        "comment" : $(tr).find('td:eq(0)').text()
      }
  }); 
  TableDataComment.shift();  // first row is the table header - so remove


  let requesterName = document.querySelector('#requesterName'); 
  let requesterPayroll = document.querySelector('#requesterPayroll');
  let status = document.querySelector('#status'); 
  let service = TableDataService;
  let comment = TableDataComment;

  // function to handle success
  function success() {
    alert("Submit Success!")
  }

  // function to handle error
  function error(err) {
    alert("Submit Failed!")
  }

  // Creating a XHR object 
  let xhr = new XMLHttpRequest(); 
  let url = "http://localhost:5000/service_request"; 

  xhr.onload = success; // call success function if request is successful
  xhr.onerror = error;  // call error function if request failed

  // open a connection 
  xhr.open("POST", url, true); 

  // Set the request header i.e. which type of content you are sending 
  xhr.setRequestHeader("Content-Type", "application/json");

  // Converting JSON data to string 
  var data = { 
    "requester_name": requesterName.value, 
    "requester_payroll": requesterPayroll.value,
    "status": status.value,
    "service_items": service,
    "comments": comment
  };
  
  // data.service_items.push(service)
  // data.comments.push(comment)

  // Sending data with the request 
  xhr.send(JSON.stringify(data));
}

