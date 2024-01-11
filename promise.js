// Promise used to complete a work at time
// promise have 3 condition
// Panding...
// resolve... (successful)
// reject

// executor (resolve, reject)
// fatarrow function ( () => {})

const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        var roll_num = [1,2,3,4,5];
        // resolve(roll_num);
        reject('promise rejected!!');
    }, 2000)
});

// promise have two work 
// 1) then (it use to get value from resolve)
// 2) catch (it use in get data from reject)

promise.then( (rn) => {
    console.log(rn);
}).catch( (error) => {
    console.log(error);
});