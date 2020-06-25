
// Setting variables
var currentDay = $("#currentDay");
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");
var row = $(".color")
var schedule = $(".mainSchedule")

// Function for changing colors will be included in jQuery 
function colorRows () {
  row.each(function() {
    var currentRow = $(this);
    var currentRowHour = parseInt(currentRow.attr("data-hour"));
    
    // update current, past, future hour with style 
    if(currentRowHour == currentHour) {
      //present 
      currentRow.addClass("present").removeClass("past future");
    } else if (currentRowHour > currentHour) {
      // future
      currentRow.addClass("future").removeClass("past present");
    }
      else {
      // past
      currentRow.addClass("past").removeClass("future present");
      }
  });
}

// jQuery 
$(document).ready(function(){
// Calling function above to color rows on planner
colorRows();

// display the current date
currentDay.text(currentDate);

// Click logic to submit input values to Local Storage
$("#main").on("click", ".saveBtn",function(){
   var id = $(this).attr("id").split("-")[0];
   var text = $(this).siblings("input").val();
   console.log(id, text)
   alert("Your task has been saved")
   localStorage.setItem(id, text)
})

// Setloop to store items from Local Storage
for (let j = 9; j < 18; j++) {
       var userData = localStorage.getItem(`${j}`)
       console.log(userData) 
       $(`#text-${j}`).val(userData)
}
})

// Create a new button to clear items from Local Storage
let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click",function() {
    window.localStorage.clear();
    location.reload();
    alert("Your tasks have been cleared")
})