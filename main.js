     
var now = moment().format('h');
var timeHeader = moment().format('dddd MMMM Do');
console.log(now)
document.getElementById("currentDay").innerHTML=timeHeader;

let newNow = moment().format('HH:mm:ss'); 
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


// 6AM

let sixAM = document.getElementById("6")
if(moment().format('H:mm:ss')>('06:00:00') && moment().format('H:mm:ss')<('06:59:59')) {
    // alert ("6 AM Present");
    sixAM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('H:mm:ss')<('05:59:59')){
        // alert ("6 AM Future");
        sixAM.setAttribute("class", "col-sm-10 future")

  } else if(moment().format('H:mm:ss')>('06:59:59')) {  
            // alert ("6 AM Past");
            sixAM.setAttribute("class", "col-sm-10 past")
  }

// 7AM

let sevenAM = document.getElementById("7")
if(moment().format('H:mm:ss')>('07:00:00') && moment().format('H:mm:ss')<('07:59:59')) {
    // alert ("7 AM Present");
    sevenAM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('H:mm:ss')<('06:59:59')){
        // alert ("7 AM Future");
        sevenAM.setAttribute("class", "col-sm-10 future")

  } else if(moment().format('H:mm:ss')>('07:59:59')) {  
            // alert ("7 AM Past");
            sevenAM.setAttribute("class", "col-sm-10 past")
  }

// 8AM

let eightAM = document.getElementById("8")
if(moment().format('H:mm:ss')>('08:00:00') && moment().format('H:mm:ss')<('08:59:59')) {
    // alert ("8 AM Present");
    eightAM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('H:mm:ss')<('07:59:59')){
        // alert ("8 AM Future");
        eightAM.setAttribute("class", "col-sm-10 future")

  } else if(moment().format('H:mm:ss')>('08:59:59')) {  
            // alert ("8 AM Past");
            eightAM.setAttribute("class", "col-sm-10 past")
  }

// 9AM

let nineAM = document.getElementById("9")
if(moment().format('H:mm:ss')>('09:00:00') && moment().format('H:mm:ss')<('09:59:59')) {
    // alert ("10 AM Present");
    nineAM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('H:mm:ss')<('08:59:59')){
        // alert ("10 AM Future");
        nineAM.setAttribute("class", "col-sm-10 future")

  } else if(moment().format('H:mm:ss')>('09:59:59')) {  
            // alert ("10 AM Past");
            nineAM.setAttribute("class", "col-sm-10 past")
  }

// 10AM

let tenAM = document.getElementById("10")
if(moment().format('H:mm:ss')>('10:00:00') && moment().format('H:mm:ss')<('10:59:59')) {
    // alert ("10 AM Present");
    tenAM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('H:mm:ss')<('09:59:59')){
        // alert ("10 AM Future");
        tenAM.setAttribute("class", "col-sm-10 future")
  } else if(moment().format('H:mm:ss')>('10:59:59')) {  
            // alert ("10 AM Past");
            tenAM.setAttribute("class", "col-sm-10 past")
  }

// 11AM

let elevenAM = document.getElementById("11")
if(moment().format('H:mm:ss')>('11:00:00') && moment().format('H:mm:ss')<('11:59:59')) {
    // alert ("11 AM Present");
    elevenAM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('H:mm:ss')<('10:59:59')){
        // alert ("11 AM Future");
        elevenAM.setAttribute("class", "col-sm-10 future")
  } else if(moment().format('H:mm:ss')>('11:59:59')) {  
            // alert ("11 AM Past");
            elevenAM.setAttribute("class", "col-sm-10 past")
  }


// 12PM

let twelvePM = document.getElementById("12")
if(moment().format('H:mm:ss')>('12:00:00') && moment().format('H:mm:ss')<('12:59:59')) {
    // alert ("12 PM Present");
    twelvePM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('H:mm:ss')<('11:59:59')){
        // alert ("12 PM Future");
        twelvePM.setAttribute("class", "col-sm-10 future")
  } else if(moment().format('H:mm:ss')>('12:59:59')) {  
            // alert ("12 PM Past");
            twelvePM.setAttribute("class", "col-sm-10 past")
  }

// 1PM

let onePM = document.getElementById("1")
if(moment().format('H:mm:ss')>('13:00:00') && moment().format('H:mm:ss')<('13:59:59')) {
    // alert ("1 PM Present");
    onePM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('H:mm:ss')<('12:59:59')){
        // alert ("1 PM Future");
        onePM.setAttribute("class", "col-sm-10 future")
  } else if(moment().format('H:mm:ss')>('13:59:59')) {  
            // alert ("1 PM Past");
            onePM.setAttribute("class", "col-sm-10 past")
  }

// 2PM

let twoPM = document.getElementById("2")
if(moment().format('H:mm:ss')>('14:00:00') && moment().format('H:mm:ss')<('14:59:59')) {
    // alert ("2 PM Present");
    twoPM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('H:mm:ss')<('13:59:59')){
        // alert ("2 PM Future");
        twoPM.setAttribute("class", "col-sm-10 future")
  } else if(moment().format('H:mm:ss')>('14:59:59')) {  
            // alert ("2 PM Past");
            twoPM.setAttribute("class", "col-sm-10 past")
  }

// 3PM

let threePM = document.getElementById("3")
if(moment().format('H:mm:ss')>('15:00:00') && moment().format('H:mm:ss')<('15:59:59')) {
    // alert ("3 PM Present");
    threePM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('H:mm:ss')<('14:59:59')){
        // alert ("3 PM Future");
        threePM.setAttribute("class", "col-sm-10 future")
  } else if(moment().format('H:mm:ss')>('15:59:59')) {  
            // alert ("3 PM Past");
            threePM.setAttribute("class", "col-sm-10 past")
  }

// 4PM

let fourPM = document.getElementById("4")
if(moment().format('H:mm:ss')>('16:00:00') && moment().format('H:mm:ss')<('16:59:59')) {
    // alert ("4 PM Present");
    fourPM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('H:mm:ss')<('15:59:59')){
        // alert ("4 PM Future");
        fourPM.setAttribute("class", "col-sm-10 future")
  } else if(moment().format('H:mm:ss')>('16:59:59')) {
            // alert ("4 PM Past");
            fourPM.setAttribute("class", "col-sm-10 past")
  }

// 5PM

let fivePM = document.getElementById("5")
if(moment().format('H:mm:ss')>('17:00:00') && moment().format('H:mm:ss')<('17:59:59')) {
    // alert ("5 PM Present");
    fivePM.setAttribute("class", "col-sm-10 present")
 } 
 else if (moment().format('H:mm:ss')<('16:59:59')){
        // alert ("5 PM Future");
        fivePM.setAttribute("class", "col-sm-10 future")
  } else if(moment().format('H:mm:ss')>('17:59:59')) {
            // alert ("5 PM Past");
            fivePM.setAttribute("class", "col-sm-10 past")
  }
























let clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click",function() {
    window.localStorage.clear();
    location.reload();
    alert("Your tasks have been cleared")
})
