import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Book = ({singleBook}) => {

    const {image,bookId,bookName,rating,category,tags,yearOfPublishing,publisher} = singleBook;
   
    return (
        <Link to={`/Bookdetils/${bookId}`}>
                 <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-4 mt-2 bg-gray-400 w-2/3 mx-auto'>
    <img
    className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-start text-green-500 gap-10'>
        {
            tags.map(tag => <button>{tag}</button>)
        }
    </div>
    <h2 className="card-title flex justify-between">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>Book By: {publisher}</p>
    <div className='border-t-1 border-dashed'></div>
    <div className="card-actions justify-between items-center mt-5">
      <div className="badge text-lg font-bold ">{category}</div>
      <div className="badge text-lg font-bold">{rating} <FaStarHalfAlt/> </div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Book;