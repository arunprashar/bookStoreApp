import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="relative">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </div>
          <h3 className="font-bold text-2xl mb-6 text-center">Contact Us</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="mt-1 w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows="5"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 focus:bg-pink-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

     
    </div>
  );
}

export default Contact;
