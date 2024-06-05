/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiSolidUserCircle, BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full h-[400px] bg-white rounded-lg p-4 flex flex-col relative "
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h4 className="text-gray-500">{book._id}</h4>

        <div className="my-1 flex justify-start gap-2 items-center">
          <PiBookOpenTextLight className="text-red-300 text-4xl" />
          <h2>{book.title}</h2>
        </div>
        <div className="my-1 flex justify-start gap-2 items-center">
          <BiUserCircle className="text-red-300 text-4xl" />
          <h2>{book.author}</h2>
        </div>

        <div className="my-1 w-fit rounded-lg p-1 border-1 bg-red-400 text-white">
          <span>{book.publishYear}</span>
        </div>
        <p className="mt-2">HEADING</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit exercitationem provident quae? Quo accusamus reiciendis quis libero aliquid ab neque pariatur architecto sapiente exercitationem! Molestias tenetur eum deserunt commodi esse, fugit ipsa ut quae nam iure repudiandae ad eveniet aliquam consequatur facere quam! Esse vero quidem iusto, quis inventore distinctio sapiente voluptas fugiat cum amet!</p>
      </div>
      BookModal
    </div>
  );
};

export default BookModal;
