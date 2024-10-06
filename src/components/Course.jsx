import React, { useEffect } from 'react'

import useSWR from 'swr';

import SingleCourse from './shared/SingleCourse';

const baseURL = 'http://localhost:3000';

const fetcher = (url) => fetch(baseURL+url).then((res) => res.json());

export const Course = () => {
    const { data, error, isLoading } = useSWR('/api/courses', fetcher);
    // useEffect(()=>{
    //     const 
    // }, [])
    return (
        <section id='Book' className='w-full lg:w-4/5 px-6 sm:px-6 md:mx-auto pb-9'>
            <div className="heading text-center py-6">
                <h1 className='text-6xl font-bold'>Courses</h1>
                {/* <p className='py-2'>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p> */}
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data 
                    && 
                    data.map((item, i) => {                        
                        return (
                            <div className="col-span-1" key={i}>                                
                                <SingleCourse course={item}/>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
