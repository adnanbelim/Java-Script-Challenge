
const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        var roll_num = [1,2,3,4,5];
        resolve(roll_num);
        // reject('promise rejected!!');
    }, 2000)
});

const bioData = ( (indexvalue) => {
    return new Promise( (resolve, reject) => {
        setTimeout((indexvalue) => {
            let bio = {
                name : 'Addy',
                age : 208
            };

            console.log(`My roll_number is ${indexvalue} and my name is ${bio.name} or age ${bio.age}. `);
            
        }, 3000, indexvalue)
    });
})

promise.then( (rn) => {
    console.log(rn);
    bioData(rn[1]).then( (getvalue) => {
        console.log(getvalue);
    })
}).catch( (error) => {
    console.log(error);
});