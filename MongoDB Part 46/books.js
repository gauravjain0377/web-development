const mongoose = require('mongoose');

main()
.then(() => {
    console.log("Connection Successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


const bookSchema = new mongoose.Schema ({
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    author: {
      type: String,
    },
    price: {
      type: Number,
      min: [1, "please enter a valid price"],
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      enum: ["fiction", "non-fiction"],
    },
    genre: [String],
  });

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("67f3e3c48bfdde7a640e94d9", {price: -400}, 
  { runValidators: true }
)
.then((res) => {
  console.log(res);
})  .catch((err) => {
  console.log(err.errors.price.properties.message);
});


// Book.findByIdAndUpdate("67f3e3c48bfdde7a640e94d9", {price: -400} )
// .then((res) => {
//   console.log(res);
// })  .catch((err) => {
//   console.log(err);
// });


// Book.findByIdAndUpdate("67f3e3c48bfdde7a640e94d9", {price: -400})
// .then((res) => {
//   console.log(res);
// })  .catch((err) => {
//   console.log(err);
// });


let book1 = new Book( {
  title: "Marvel Comics",
  price: 0, 
  category: "fiction",
  genre: ["comics", "Superheroes", "fiction"],
});

book1
.save()
    .then((res) => {
        console.log(res);
})
    .catch((err) => {
        console.log(err);
});


// In vs code terminal i have to run node books.js and in other terminal of laptop or in git bash i have 
// to run firstly mongosh then show dbs, use amazon, show collections then db.books.find()           