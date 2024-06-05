/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiShow, BiSolidUserCircle, BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState("false");

  return (
    <div
      id="card"
      key={book._id}
      className="flex flex-col hover:shadow-xl border-2 border-red-300 relative rounded-xl m-2 p-4"
    >
      <h4 className="text-gray-500">{book._id}</h4>

      <div className="my-1 flex justify-start gap-2 items-center">
        <PiBookOpenTextLight className="text-yellow-700 text-4xl" />
        <h2>{book.title}</h2>
      </div>
      <div className="my-1 flex justify-start gap-2 items-center">
        <BiUserCircle className="text-yellow-700 text-4xl" />
        <h2>{book.author}</h2>
      </div>

      <div className="my-1 absolute top-1 right-2 rounded-lg p-1 border-1 bg-yellow-800 text-white">
        {/* <span className="text-xl mr-4 text-gray-500">Publish Year</span> */}
        <span>{book.publishYear}</span>
      </div>

      <div className="flex justify-between m-2">
        <BiShow
          className="text-3xl text-blue-400 "
          onClick={() => {
            setShowModal("true");
          }}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-green-400 text-3xl" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-yellow-400 text-3xl" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-red-800 text-3xl" />
        </Link>
      </div>
      {showModal === "true" && (
        <BookModal book={book} onClose={() => setShowModal("false")} />
      )}
    </div>
  );
};

export default BookSingleCard;
