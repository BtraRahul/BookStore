/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
// import "./index.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("card");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        //in respons.data we have count and data, thats why res.data.data
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    // <div>

    // </div>
    <div className="p-4">
      {/* <BackButton /> */}
      <div className="flex justify-center items-center">
        <button
          className="p-2 m-2 text-gray-900 hover:text-white bg-sky-400 hover:bg-sky-600 border-sky-600 rounded-md"
          onClick={() => {
            setType("table");
          }}
        >
          Table
        </button>
        <button
          className="p-2 m-2 text-gray-900 hover:text-white bg-sky-400 hover:bg-sky-600 border-sky-400 rounded-md"
          onClick={() => {
            setType("card");
          }}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl my-4 mx-auto">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : type === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
