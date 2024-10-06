import React from 'react'
import books from '../../book.json'
import SingleBook from './shared/SingleBook';


export const Book = () => {
    return (
        <section id='Book' className='w-full lg:w-4/5 px-6 sm:px-6 md:mx-auto pb-9'>
            <div className="heading text-center py-6">
                <h1 className='text-6xl font-bold'>Books</h1>
                {/* <p className='py-2'>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p> */}
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books.map((book, i) => {                        
                        return (
                            <div className="col-span-1" key={i}>                                
                                <SingleBook book={book}/>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
