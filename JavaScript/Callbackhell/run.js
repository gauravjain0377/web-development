function savetoDB(data, success, failure) {

    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}


savetoDB(
    "gauravjain0377",
    ()=> {
    console.log("success: your data is saved");

    savetoDB("helloworld", ()=>
         {
        console.log("success 2: data2 saved");
    }, 
    ()=> 
        {
        console.log("failure 2: weak connection");
    })
}, 
    ()=> {
    console.log("failure: weak connection. data not saved");
} );