import React from 'react';
import bookimge from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-300 p-20   ">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img
      src={bookimge}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold ">Books to freshen up your bookshelf</h1>
      <button className="btn btn-primary mt-5 ">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;