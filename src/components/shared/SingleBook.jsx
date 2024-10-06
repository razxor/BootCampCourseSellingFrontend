import React from 'react'
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

const SingleBook = (props) => {    
    const {book} = props;    
    let tags = book.tags;
    return (

        <Link to={ROUTES.SINGLE_BOOK.DYNAMIC(book.bookId)}>
            <div className="card bg-base-100 shadow-xl w-full rounded h-96">
                <figure>
                    <img
                        src={`${book.image}`}
                        alt="Shoes" />
                </figure>
                <div className="card-body p-3">
                    <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-3 justify-center">
                        <div className="col-span-3 sm:col-span-3 lg:col-span-2">
                            <h2 className="card-title">
                                {book.bookName}
                            </h2>
                            <p>
                                <i className="fa-solid fa-user-tie"></i> {book.author}
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-2 lg:col-span-1 text-end flex flex-col justify-center items-end">
                            <Rating
                                emptySymbol="far fa-star text-orange-500"
                                fullSymbol="fas fa-star text-orange-500"
                                fractions={2}
                                initialRating={book.rating}
                                readonly
                            //onChange={(rate) => console.log(rate)}
                            />
                            <div className="badge badge-accent badge-outline py-2 my-2">{book.category}</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 justify-between items-center gap-5">
                        <div className="col-span-3 lg:col-span-3 flex gap-2">
                            {
                                tags.map((tag, i) => {
                                    return (
                                        <div className="badge badge-secondary  badge-outline" key={i}>{tag}</div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-span-3 lg:col-span-3">
                            <Link className="btn btn-outline rounded-full btn-success w-full" to={ROUTES.SINGLE_BOOK.DYNAMIC(book.bookId)}>
                                <i className="fa-regular fa-eye"></i> Book Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SingleBook
