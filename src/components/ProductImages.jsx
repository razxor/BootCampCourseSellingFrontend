import React from 'react';

const ProductImages = () => {
    return (
        <section className="product-images py-12 bg-white">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="card shadow-lg bg-base-100">
                        <figure>
                            <img src="https://via.placeholder.com/300" alt="Product 1" className="w-full h-48 object-cover"/>
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">Product 1</h3>
                            <p className="text-gray-600">Brief description of Product 1.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card shadow-lg bg-base-100">
                        <figure>
                            <img src="https://via.placeholder.com/300" alt="Product 2" className="w-full h-48 object-cover"/>
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">Product 2</h3>
                            <p className="text-gray-600">Brief description of Product 2.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card shadow-lg bg-base-100">
                        <figure>
                            <img src="https://via.placeholder.com/300" alt="Product 3" className="w-full h-48 object-cover"/>
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">Product 3</h3>
                            <p className="text-gray-600">Brief description of Product 3.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductImages;
