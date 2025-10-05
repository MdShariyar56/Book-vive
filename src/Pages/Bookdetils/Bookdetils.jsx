import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const Bookdetils = () => {
    const {id}=useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook=data.find(book=>book.bookId === bookId);
    const {bookName,image,publisher,category,review,tags,totalPages,yearOfPublishing,rating} = singleBook;


    const handleMarkAsRead = id => {


        addToStoredDB(id)

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg bg-gray-400 p-10 shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold mb-3">{bookName}</h1>
      <p>By : {publisher}</p>
      <div className='border-t-1 border-dashed  mt-3 mb-2'></div>
      <p>{category}</p>
      <div className='border-t-1 border-dashed mt-3'></div>
      <p className="py-6">
       <span className='text-xl font-bold'>Review :</span> {review}
      </p>
       <div className='flex justify-start  gap-10 mb-5'>
        <h1 className='text-xl font-bold'>Tag:</h1>
        {
            tags.map(tag => <button  key={tag} className='text-green-700 btn rounded-full border-none bg-green-100 '>#{tag}</button>)
        }
    </div>
    <div className='border-t-1 border-dashed  mt-3 mb-2'></div>
    <div className=''>
        <p>Number of Pages : <span className='text-xl font-semibold ml-10'>{totalPages}</span></p>
        <p>Publisher : <span className='text-xl font-semibold ml-23'>{publisher}</span></p>
        <p>Year of Publishing : <span className='text-xl font-semibold ml-7'>{yearOfPublishing}</span></p>
        <p>Rating: <span className='text-xl font-semibold ml-28'>{rating}</span></p>
    </div>
      <button onClick={()=>handleMarkAsRead(id)} className="btn btn-primary mt-5 mr-4">Mark as Read</button>
      <button className="btn btn-primary mt-5 ">Add To WishiList</button>
    </div>
  </div>
</div>
    );
};

export default Bookdetils;