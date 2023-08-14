// async use with promise... async says that function will return the promise
// with the help of async, promise use become easy.
// we use always async with await keyword...

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll_num = [1, 2, 3, 4, 5];
        resolve(roll_num);
    }, 3000);
})

async function getrn() {
    const rollnum = await promise;
    console.log(rollnum);
}

//error handling.... try and catch
async function getdata() {
    try {
        const data = await promise;
        console.log(dataaa);
    } catch (error) {
        console.log(`The error is ${error}`); 
    }
}

getrn();
getdata();