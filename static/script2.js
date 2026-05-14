const inputs = document.querySelectorAll(".input");


function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

// Graff chart

// Sample hat color data
var hatData = [];
var dataset1 =    { color: "", month: "", count: 0 };
var dataset2 =    { color: "", month: "", count: 0 };
var dataset3 =    { color: "", month: "", count: 0 };

load();
// // Extract unique years and colors
// const months = [...new Set(hatData.map((data) => data.month))];
// const colors = [...new Set(hatData.map((data) => data.color))];

// // Group data by color
// const groupedData = {};
// colors.forEach((color) => {
//   groupedData[color] = hatData.filter((data) => data.color === color);
// });

// // Prepare data for the chart
// const chartData = {
//   labels: months,
//   datasets: colors.map((color, index) => ({
//     label: color,
//     data: groupedData[color].map((data) => data.count),
//     backgroundColor: index === 0 ? "green" : index === 1 ? "blue" : "red",
//     borderWidth: 1,
//   })),
// };

// // Get the canvas element
// const canvas = document.getElementById("myChart");

// // Create the chart
// const chart = new Chart(canvas, {
//   type: "bar",
//   data: chartData,
//   options: {
//     responsive: true,
//     scales: {
//       x: {
//         display: true,
//         title: {
//           display: true,
//           text: "Months",
//         },
//       },
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: "Count",
//         },
//         min: 0,
//       },
//     },
//   },
// });

function signup() {
  name_user = document.getElementById("name").value;
  username = document.getElementById("username").value;
  mobile = document.getElementById("mobile").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  var passw=  /^[A-Za-z]\w{7,14}$/;

  if (name_user == "") {
    alert("Please select Name");
  } else if (username == "") {
    alert("Please select Username");
  } else if (mobile == "") {
    alert("Please select Mobile");
  } else if (email == "") {
    alert("Please select Email");
  } else if (password == "") {
    alert("Please select Password");
  } else if (!password.match(passw)) {
    alert("wron patten");
  } else {
    const dict_values = { name_user, username, mobile, email, password }; //Pass the javascript variables to a dictionary.
    const s = JSON.stringify(dict_values); // Stringify converts a JavaScript object or value to a JSON string
    console.log(s); // Prints the variables to console window, which are in the JSON format
    $.ajax({
      url: "/adduser",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(s),
    }).done(function (data) {
      console.log(data);
      alert(data.messge);
      window.location = "/login";
    });
  }
}

function mlresult() {
  var uploadfile = document.getElementById("imageuploder");
  var pbar = document.getElementById("lodingbar");
  var mllable = document.getElementById("mllabel");
  pbar.value = 25;
  var file = uploadfile.files[0];
  console.log(file);

  if (file == null) {
    alert("Please select File");
  } else {
    const dict_values = { "filedata":2345 }; //Pass the javascript variables to a dictionary.
    const s = JSON.stringify(dict_values); // Stringify converts a JavaScript object or value to a JSON string
    console.log(s); // Prints the variables to console window, which are in the JSON format

    $.ajax({
      url: "/UploadIMG",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(s),
    }).done(function (data) {
      console.log(data);
      for (let i = 25; i <= 101; i = i + 5) {
        pbar.value = pbar.value + i;
        console.log(i);
      }
      alert(data.messge);
      mllable.innerHTML = data.messge;
    });
  }
}

var loadFile = function (event) {
  var output = document.getElementById("output");
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
};



function fogotpw(){
  alert("ok");
  fogot_email = document.getElementById("fogotemail").value;

  const dict_values = { fogot_email }; //Pass the javascript variables to a dictionary.
  const s = JSON.stringify(dict_values); // Stringify converts a JavaScript object or value to a JSON string
  console.log(s); // Prints the variables to console window, which are in the JSON format
  $.ajax({
    url: "/fogotpassword",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(s),
  }).done(function (data) {
    console.log(data);
    alert(data.messge);
    window.location = "/login";
  });
}

function load() {

  const alldetelis = document.getElementById("tbody");
  alldetelis.innerHTML="";
  const loaddata = "loaddata";



  const dict_values = {loaddata}; //Pass the javascript variables to a dictionary.
  const s = JSON.stringify(dict_values); // Stringify converts a JavaScript object or value to a JSON string
  console.log(s); // Prints the variables to console window, which are in the JSON format
  var a=0;
  var b=0;
  var c=0;
  var count =0;

   var month={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}

   var hatData = [];
var dataset1 =    { color: "", month: "", count: 0 };
var dataset2 =    { color: "", month: "", count: 0 };
var dataset3 =    { color: "", month: "", count: 0 };

  $.ajax({
    url: "/loaddata",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(s),
  }).done(function(data){



    console.log(data);
    for(const key in data){
      console.log(`${key}:${data[key]}`);

      
      if(data[key]["predict"] == "clean"){
        dataset1.month=month[data[key]["month"]];
        dataset1.color=data[key]["predict"];
        dataset1.count=a++;
        hatData[count++]=dataset1;
        //alert(a);
      }
      if(data[key]["predict"] == "dust < 50%"){
        dataset2.month=month[data[key]["month"]];
        dataset2.color=data[key]["predict"];
        dataset2.count=b++;
        hatData[count++]=dataset2;
        //alert(b);
      }
      if(data[key]["predict"] == "dust > 50%"){
        dataset3.month=month[data[key]["month"]];
        dataset3.color=data[key]["predict"];
        dataset3.count=c++;
        hatData[count++]=dataset3;
        
      }


      alldetelis.innerHTML+=`
      <tr>
      <th scope="row">${key}</th>
      <td>${data[key]["name"]}</td>
      <td>${data[key]["email"]}</td>
      <td>${data[key]["mobile"]}</td>
      <td>${data[key]["predict"]}</td>
    </tr>`
    
    }




    console.log(hatData);
// Extract unique years and colors
const months = [...new Set(hatData.map((data) => data.month))];
const colors = [...new Set(hatData.map((data) => data.color))];

// Group data by color
const groupedData = {};
colors.forEach((color) => {
  groupedData[color] = hatData.filter((data) => data.color === color);
});

// Prepare data for the chart
const chartData = {
  labels: months,
  datasets: colors.map((color, index) => ({
    label: color,
    data: groupedData[color].map((data) => data.count),
    backgroundColor: index === 0 ? "green" : index === 1 ? "blue" : "red",
    borderWidth: 1,
  })),
};

// Get the canvas element
const canvas = document.getElementById("myChart");

// Create the chart
const chart = new Chart(canvas, {
  type: "bar",
  data: chartData,
  options: {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Count",
        },
        min: 0,
      },
    },
  },
});



  });
 






  

}