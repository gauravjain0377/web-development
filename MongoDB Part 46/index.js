const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(() => {
    console.log("Connection Successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema ({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndDelete({age: 19})
.then((res) => {
  console.log(res);
}) .catch((err) => {
  console.log(err)
});

// User.findByIdAndDelete("67f3a6b0e5608ae600ff8920")
// .then((res) => {
//   console.log(res);
// }) .catch((err) => {
//   console.log(err)
// });

// User.deleteMany( {age: {$gt: 40}})
// .then((res) => {
//   console.log(res);
// }) .catch((err) => {
//   console.log(err)
// });


// User.deleteOne( {name: "Bruce"})
// .then((res) => {
//   console.log(res);
// }) .catch((err) => {
//   console.log(err)
// });


// User.findByIdAndUpdate("67f3a4d7c1bb029d3d703734", {age: 40}, {new: true} ) 
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err)
//   });


// User.findOneAndUpdate( { name: "Gaurav"}, {age: 35}, {new: true}) 
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err)
//   });


  // User.findOneAndUpdate( { name: "Gaurav"}, {age: 25}) 
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.log(err)
  // });


  // User.updateMany( {age: {$gte: 21}}, {age: 55}) 
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.log(err)
  // });


// User.updateOne( { name: "Gaurav"}, {age: 30})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err)
//   });



// User.find({ age: {$gt: 20}})
//    .then((res) => {
//     console.log(res);
// }) 
//   .catch((err) => {
//     console.log(err);
//   });
 

// const user1 = new User ( {
//     name: "Gaurav",
//     email: "gjain0229@gmail.com",
//     age: 20,
// });
// const user2 = new User ( {
//     name: "Jain",
//     email: "jain@gmail.com",
//     age: 19,
// });

// user1.save();

// user2.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// User.insertMany ( [
//     { name: "Tony", age: 20},
//     { name: "Bruce", age: 21},
//     { name: "Lee", age: 22},
//     { name: "Peter", age: 23},
// ])    
//    .then((res) => {
//     console.log(res);
//    });
    







