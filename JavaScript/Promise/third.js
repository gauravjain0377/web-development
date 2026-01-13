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
  .then( () => {
    console.log("data1 saved. promise resolved");
    return savetoDBpromise("helloworld");
  })

  .then( () => {
    console.log("data2 saved");
    return savetoDBpromise("Gaurav");
  })

  .then( () => {
    console.log("Data3 saved");
  })

  .catch( () =>{
    console.log("promise rejected");
});








