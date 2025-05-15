import React from 'react';
import { Link } from 'react-router-dom';

export const CategorySection = ({ categories }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.id}`}
              className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-sydney-blue/10 rounded-full mb-3">
                <img 
                  src={category.icon} 
                  alt={category.name} 
                  className="w-6 h-6"
                />
              </div>
              <h3 className="font-medium text-gray-900">{category.name}</h3>
              <span className="text-sm text-gray-500">{category.count} events</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
