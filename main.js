     
        var now = moment().format('h');
        var timeHeader = moment().format('dddd MMMM Do');
        console.log(now)
        document.getElementById("currentDay").innerHTML=timeHeader;

            var time= [$(".time").map(function() {
            return $(this).text();
            }).get()];
            console.log(time);

            var timeInt= parseInt(time);
            console.log(timeInt);

            timeInt = timeInt
            console.log(timeInt);

            var nowInt = parseInt(now);
            console.log(nowInt);

            var nowStr = now.toString();
            console.log(nowStr);

            var check = timeInt < nowInt;
            console.log(check);          

let newNow = moment().format('h:mm:ss');
console.log(newNow);

//6AM Timeslot
let submitBtn6 = document.getElementById("6amBtn");
submitBtn6.addEventListener("click",function() {
    event.preventDefault();
let input6 = document.getElementById("6").value;
localStorage.setItem("6AM", input6);
alert("Your task has been saved")
});
let input6 = document.getElementById("6");
input6.value = localStorage.getItem("6AM");
// if(moment().format('h:mm:ss') < '6:00:00') {
//     alert ("true")
//  } else {
//         alert ("Not True")
//     }



//7AM Timeslot
//Submit to Local
let submitBtn7 = document.getElementById("7amBtn");
submitBtn7.addEventListener("click",function() {
    event.preventDefault();
let input7 = document.getElementById("7").value;
localStorage.setItem("7AM", input7);
alert("Your task has been saved");
});
//Retrieve from Local
let input7 = document.getElementById("7");
input7.value = localStorage.getItem("7AM");
// Time/ Color logic


//8AM Timeslot
let submitBtn8 = document.getElementById("8amBtn");
submitBtn8.addEventListener("click",function() {
    event.preventDefault();
let input8 = document.getElementById("8").value;
localStorage.setItem("8AM", input8);
alert("Your task has been saved")
});
let input8 = document.getElementById("8");
input8.value = localStorage.getItem("8AM");

//9AM Timeslot
let submitBtn9 = document.getElementById("9amBtn");
submitBtn9.addEventListener("click",function() {
    event.preventDefault();
let input9 = document.getElementById("9").value;
localStorage.setItem("9AM", input9);
alert("Your task has been saved")
});
let input9 = document.getElementById("9");
input9.value = localStorage.getItem("9AM");

//10AM Timeslot
let submitBtn10 = document.getElementById("10amBtn");
submitBtn10.addEventListener("click",function() {
    event.preventDefault();
let input10 = document.getElementById("10").value;
localStorage.setItem("10AM", input10);
alert("Your task has been saved")
});
let input10 = document.getElementById("10");
input10.value = localStorage.getItem("10AM");

//11AM Timeslot
let submitBtn11 = document.getElementById("11amBtn");
submitBtn11.addEventListener("click",function() {
    event.preventDefault();
let input11 = document.getElementById("11").value;
localStorage.setItem("11AM", input11);
alert("Your task has been saved")
});
let input11 = document.getElementById("11");
input11.value = localStorage.getItem("11AM");      

//12PM Timeslot
let submitBtn12 = document.getElementById("12pmBtn");
submitBtn12.addEventListener("click",function() {
    event.preventDefault();
let input12 = document.getElementById("12").value;
localStorage.setItem("12PM", input12);
alert("Your task has been saved")
});
let input12 = document.getElementById("12");
input12.value = localStorage.getItem("12PM");

//1PM Timeslot
let submitBtn1 = document.getElementById("1pmBtn");
submitBtn1.addEventListener("click",function() {
    event.preventDefault();
let input1 = document.getElementById("1").value;
localStorage.setItem("1PM", input1);
alert("Your task has been saved")
});
let input1 = document.getElementById("1");
input1.value = localStorage.getItem("1PM");

//2PM Timeslot
let submitBtn2 = document.getElementById("2pmBtn");
submitBtn2.addEventListener("click",function() {
    event.preventDefault();
let input2 = document.getElementById("2").value;
localStorage.setItem("2PM", input2);
alert("Your task has been saved")
});
let input2 = document.getElementById("2");
input2.value = localStorage.getItem("2PM");

//3PM Timeslot
let submitBtn3 = document.getElementById("3pmBtn");
submitBtn3.addEventListener("click",function() {
    event.preventDefault();
let input3 = document.getElementById("3").value;
localStorage.setItem("3PM", input3);
alert("Your task has been saved")
});
let input3 = document.getElementById("3");
input3.value = localStorage.getItem("3PM");

//4PM Timeslot
let submitBtn4 = document.getElementById("4pmBtn");
submitBtn4.addEventListener("click",function() {
    event.preventDefault();
let input4 = document.getElementById("4").value;
localStorage.setItem("4PM", input4);
alert("Your task has been saved")
});
let input4 = document.getElementById("4");
input4.value = localStorage.getItem("4PM");

//5PM Timeslot
let submitBtn5 = document.getElementById("5pmBtn");
submitBtn5.addEventListener("click",function() {
    event.preventDefault();
let input5 = document.getElementById("5").value;
localStorage.setItem("5PM", input5);
alert("Your task has been saved")
});
let input5 = document.getElementById("5");
input5.value = localStorage.getItem("5PM");


// 11AM
if(moment().format('h:mm:ss')>('11:00:00') && moment().format('h:mm:ss')<('11:59:59')) {
    // alert ("11 AM Present");
    // document.getElementByID("11").setAttribute("class", "present")
 } 
 else if (moment().format('h:mm:ss')<('10:59:59')){
        // alert ("11 AM Future");
        // document.getElementByID("11").setAttribute("class", "future")
  } else if(moment().format('h:mm:ss')>('11:59:59')) {
            // alert ("11 AM Past");
            // document.getElementByID("11").setAttribute("class", "past")
                };

// 12PM
if(moment().format('h:mm:ss')>('12:00:00') && moment().format('h:mm:ss')<('12:59:59')) {
    // alert ("12 PM Present");
    // document.getElementByID("12").setAttribute("class", "present")
 } 
 else if (moment().format('h:mm:ss')<('11:59:59')){
        // alert ("12 PM Future");
        // document.getElementByID("12").setAttribute("class", "future")
  } else if(moment().format('h:mm:ss')>('12:59:59')) {
            // alert ("12 PM Past");
            // document.getElementByID("12").setAttribute("class", "past")
                };

// 1PM
if(moment().format('h:mm:ss')>('1:00:00') && moment().format('h:mm:ss')<('1:59:59')) {
    // alert ("1 PM Present");
    // document.getElementByID("1").setAttribute("class", "present")
 } 
 else if (moment().format('h:mm:ss')<('12:59:59')){
        // alert ("1 PM Future");
        // document.getElementByID("1").setAttribute("class", "future")
  } else if(moment().format('h:mm:ss')>('1:59:59')) {
            // alert ("1 PM Past");
            // document.getElementByID("1").setAttribute("class", "past")
                };


// 4PM

let fourPM = document.getElementById("4")
if(moment().format('h:mm:ss')>('4:00:00') && moment().format('h:mm:ss')<('4:59:59')) {
    // alert ("4 PM Present");
    fourPM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('h:mm:ss')<('3:59:59')){
        // alert ("4 PM Future");
        fourPM.setAttribute("class", "col-sm-10 future")
  } else if(moment().format('h:mm:ss')>('4:59:59')) {
            // alert ("4 PM Past");
            fourPM.setAttribute("class", "col-sm-10 past")
  }

// 5PM

let fivePM = document.getElementById("5")
if(moment().format('h:mm:ss')>('5:00:00') && moment().format('h:mm:ss')<('5:59:59')) {
    // alert ("5 PM Present");
    fivePM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('h:mm:ss')<('4:59:59')){
        // alert ("5 PM Future");
        fivePM.setAttribute("class", "col-sm-10 future")
  } else if(moment().format('h:mm:ss')>('5:59:59')) {
            // alert ("5 PM Past");
            fivePM.setAttribute("class", "col-sm-10 past")
  }
























let clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click",function() {
    window.localStorage.clear();
    location.reload();
    alert("Your tasks have been cleared")
})
