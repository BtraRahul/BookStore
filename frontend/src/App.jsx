import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import CreateBooks from "./pages/CreateBooks";

/* eslint-disable no-unused-vars */

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </div>
  );
}

export default App;
