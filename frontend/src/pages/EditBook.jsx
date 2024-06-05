/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const EditBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setLoading(false),
          setAuthor(res.data.author),
          setTitle(res.data.title),
          setPublishYear(res.data.publishYear);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleEdit = (e) => {
    const book = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, book)
      .then(setLoading(false), navigate("/"))
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-4xl my-4 mx-auto">CreateBooks</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <label htmlFor="">Title</label>
          <input
            value={title}
            className="border p-2"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="">Author</label>
          <input
            value={author}
            className="border p-2"
            type="text"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <label htmlFor="">PublishYear</label>
          <input
            value={publishYear}
            className="border p-2"
            type="number"
            onChange={(e) => {
              setPublishYear(e.target.value);
            }}
          />
          <button onClick={handleEdit} className="m-2 bg-sky-300 p-2 border">
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;
