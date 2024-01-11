let adnan = {
    fname : 'adnan',
    lname :  'belim'
   
};

// object creating in other way!!
var x = new Object();

x.name = 'adnan';
x.age = 13;

console.log(x);
//we can add new property in object ...

adnan.age = 22;

//we can delete property in object ...

// delete adnan.age;

document.write(adnan.age);  //object value will not show on screen !!
console.log(adnan.fname);

//we can check property

console.log('age' in adnan);

//itrating property (check all propperty)...

for(let key in adnan){
    console.log(key);
    console.log(key + " " + adnan.key);

    //if we want to know value of obj

    console.log(key + " " + adnan[key]);
}