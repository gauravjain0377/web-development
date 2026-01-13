function savetoDBpromise(data) {

    
    return new Promise( (resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("data was saved");
        } else {
            reject("data was not saved");
        }
    });
}



savetoDBpromise("apnacollege")
  .then( (result) => {
    console.log("data1 saved. promise resolved");
    console.log("result of promise: ", result);
    return savetoDBpromise("helloworld");
  })

  .then( (result) => {
    console.log("data2 saved");
    console.log("result of promise: ",result);
    return savetoDBpromise("Gaurav");
  })

  .then( (result) => {
    console.log("Data3 saved");
    console.log("result of promise: ",result);
  })

  .catch( (error) =>{
    console.log("promise rejected");
    console.log("error of promise: ",error);
});








