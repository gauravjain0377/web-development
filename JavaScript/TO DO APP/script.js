let todo = [];
 let req = prompt("Please enter your request");

console.log(req);

while(true) {
    if(req == "quit") {
        console.log("quitting app");
        break;
    }

    if(req == "list") {
        console.log("---------");
        for(i = 0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("---------");
    }
    else if(req == "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task Added");
    }
    else if( req == "delete") {
        let index = prompt("Please enter the task index");
        todo.splice(index, 1);
        console.log("task deleted");
    }
    else {
        console.log("Wrong Request");
    }
    req = prompt("Please enter your request");
   
}