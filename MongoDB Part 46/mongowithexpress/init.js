const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("Connection Successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [
    { from: "Gaurav",
        to: "Jain",
        message: "Send me the details",
        created_at:  new Date()  //UTC time format will be there 
       },

    {       from: "Virat",
            to: "Kohli",
            message: "Cover Drive",
            created_at:  new Date()  
    },
        
    {       from: "Rohit",
            to: "Sharma",
            message: "Pull Shot",
            created_at:  new Date() 
    },

    {       from: "mahendra Singh",
        to: "Dhoni",
        message: "Helicopter Shot",
        created_at:  new Date() 
},

{       from: "James",
    to: "Anderson",
    message: "Reverse Swing",
    created_at:  new Date()  
},

{       from: "Dale",
    to: "Steyn",
    message: "Speedy",
    created_at:  new Date()  
},

{       from: "Abrahim Benjamin",
    to: "Devilliers",
    message: "360*",
    created_at:  new Date()  
},
];

Chat.insertMany(allChats);
   

   


























