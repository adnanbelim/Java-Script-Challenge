// var x = new Date();
// console.log(x);


var y = prompt("enter your birth year");
var m = prompt("enter your birth month");
var d = prompt("enter your birth day");
var x = new Date(y, m, d);
const dayName = (x.getDay());

switch (dayName) {
  case 0:
    document.write("Sunday");
    break;

  case 1:
    document.write("Monday");
    break;

  case 2:
    document.write("Tuesday");
    break;

  case 3:
    document.write("Wednesday");
    break;

  case 4:
    document.write("Thursday");
    break;

  case 5:
    document.write("Friday");
    break;

  case 6:
    document.write("Saturday");
    break;

  default:
    document.write("Enter right DOB!!");
}


// counting start from 0 for each month or days...

// calculate date !!
// var x = new Date();
// x.setDate(x.getDate() + 10);
// console.log(x);

//get method use to import previous data...
//set use to edit data...
