import React, { useEffect } from 'react'
import { createBrowserRouter, useLocation, useParams } from 'react-router-dom';
import books from '../../book.json'
import Rating from 'react-rating';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

export const BookDetails = () => {
  const { bookId } = useParams();
  let book = books.find((item) => item.bookId == bookId)

  const handleClick = (book, msg) => {
    toast.success(`${book.bookId} ${book.bookName} ${msg}`, { position: "bottom-right", });
  }

  return (
    <>
      <Helmet>
        <title>Online Book Shop | {book.bookName}</title>
      </Helmet>
      <section id='bookDetails' className='w-4/5 mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-8 py-12 gap-10'>
          <div className="col-span-1 lg:col-span-3">
            <figure>
              <img
                src={`${book.image}`}
                alt="car!" />
            </figure>
          </div>
          <div className="col-span-1 lg:col-span-5">
            <h1 className='text-3xl sm:text-3xl lg:text-4xl font-bold'>{book.bookName}</h1>
            <div className='py-2'>
              <Rating
                emptySymbol="far fa-star text-orange-500"
                fullSymbol="fas fa-star text-orange-500"
                fractions={2}
                initialRating={book.rating}
                readonly
              //onChange={(rate) => console.log(rate)}
              />
              <p>
                {book.review}
              </p>
            </div>
            <div className='py-2'>
              <h1 className='py-1'><strong>Author:</strong> {book.author}</h1>
              <h1 className='py-1'><strong>Publisher:</strong> {book.publisher}</h1>
              <h1 className='py-1'><strong>Category:</strong> {book.category}</h1>
              <h1 className='py-1'><strong>Total Pages:</strong> {book.totalPages}</h1>
              <h1 className='py-1'><strong>Year of Publishing:</strong> {book.yearOfPublishing}</h1>
            </div>

            <div className='py-2 flex gap-2'>
              {
                book.tags.map((tag, i) => {
                  return (
                    <div className="badge badge-secondary  badge-outline" key={i}>{tag}</div>
                  )
                })
              }
            </div>

            <div className='flex flex-col sm:flex-col md:flex-row gap-2  pt-3 '>
              <button className='btn btn-warning rounded w-full sm:w-full md:w-1/2' onClick={() => handleClick(book, "has been added to the Wishlist")}>Wish to Read</button>
              <button className='btn btn-error rounded w-full sm:w-full md:w-1/2' onClick={() => handleClick(book, "has been added to the Cart")}>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
