function savetoDB(data, resolve, reject) {

    
    return new Promise( (resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("data was saved");
        } else {
            reject("data was not saved");
        }
    });
}

savetoDB("Gaurav Jain");