import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import router from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("HELLO WORLD!");
});

//Handle CORS policy
//option 1: allow all origins with default of cors(*)
app.use(cors());

//option 2: allow custom origins
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:5173"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

//middleware for parsing req body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/books", router);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//dump

//moved to /routes/bookRoutes.js
//Route for getting all books
// app.get("/books", async (req, res) => {
//   try {
//     const books = await Book.find({});
//     return res.status(200).json({
//       count: books.length,
//       data: books,
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(400).send({ message: err.message });
//   }
// });

// //Route for getting book by id
// app.get("/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Book.findById(id);
//     return res.status(200).json(book);
//   } catch (err) {
//     console.log(err);
//     return res.status(400).send({ message: err.message });
//   }
// });

// //Route for updating a book by id
// app.put("/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await Book.findByIdAndUpdate(id, req.body);

//     if (!result) {
//       // console.log("Book not found");
//       return res.status(400).send({ message: "book not found" });
//     }

//     // console.log("Book Updated !!");
//     return res.status(200).send({ message: "Book Updated !!" });
//   } catch {
//     (err) => {
//       console.log(err);
//       return res.status(400).send({ message: err.message });
//     };
//   }
// });

// //Route for saving new book
// app.post("/books", async (req, res) => {
//   try {
//     if (!req.body.title || !req.body.author || !req.body.publishYear) {
//       // console.log("");
//       return res.status(400).send({ message: "Please enter all fields." });
//     }

//     const newBook = {
//       title: req.body.title,
//       author: req.body.author,
//       publishYear: req.body.publishYear,
//     };

//     const book = await Book.create(newBook);

//     return res.status(201).send(book);
//   } catch (err) {
//     console.log(err.message);
//     return res.status(404).send({ message: "Complete all fields" });
//   }
// });

// //Route for deleting the book
// app.delete("/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Book.findByIdAndDelete(id);

//     if (!result) {
//       return res.status(400).send({ message: "Book not found!!!" });
//     }

//     return res.status(200).send({ message: "Deleted Succesfully" });
//   } catch {
//     (err) => {
//       console.log(err.message);
//       res.status(400).send({ message: err.message });
//     };
//   }
// });
