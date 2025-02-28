const helloPromise = new Promise((resolve, reject) => {
    resolve('Hello');
  });
  const worldPromise = new Promise((resolve, reject) => {
    resolve('World');
  });

/*helloPromise.then(result=>{
    worldPromise.then(result1=>{
        console.log(result+ ' ' +result1);
    })
})*/   // nesting two promises



/*Promise.all([
    helloPromise,
    worldPromise
]).then(result=>{
    console.log(result[0]+' '+result[1]); // promise.all
})*/
 
(async()=> console.log(await helloPromise+' '+await worldPromise))();  // async await

