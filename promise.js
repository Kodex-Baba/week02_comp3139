var a = 10;

var p1 = new Promise((resolve, reject) => {
    if(a==10){
        resolve('Success-1');
    } else {
        reject('Failure-1');
    }
})

p1.then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
})