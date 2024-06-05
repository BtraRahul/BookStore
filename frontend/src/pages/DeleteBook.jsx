/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setLoading(false), navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return <div className="p-4"></div>;
};

export default DeleteBook;
