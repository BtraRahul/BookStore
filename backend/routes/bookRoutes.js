//refactoring nodejs with express router
import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();
//Route for saving new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      // console.log("");
      return res.status(400).send({ message: "Please enter all fields." });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (err) {
    console.log(err.message);
    return res.status(404).send({ message: "Complete all fields" });
  }
});

//Route for getting all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
});

//Route for getting book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
});

//Route for updating a book by id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      // console.log("Book not found");
      return res.status(400).send({ message: "book not found" });
    }

    // console.log("Book Updated !!");
    return res.status(200).send({ message: "Book Updated !!" });
  } catch {
    (err) => {
      console.log(err);
      return res.status(400).send({ message: err.message });
    };
  }
});

//Route for deleting the book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(400).send({ message: "Book not found!!!" });
    }

    return res.status(200).send({ message: "Deleted Succesfully" });
  } catch {
    (err) => {
      console.log(err.message);
      res.status(400).send({ message: err.message });
    };
  }
});

export default router;
