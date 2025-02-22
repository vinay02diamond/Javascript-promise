const arrived =true;

const ride =new Promise ((resolve,reject)=>{
    if (arrived) {
        resolve('I will take the cab');
}
else{
    reject('I will take the bike')
}
});


ride 

.then(resolved=> {
    console.log(resolved);
})

.catch(reject => {
console.log(reject);

})

.finally(() => {
    console.log('I will reach the class')
})


