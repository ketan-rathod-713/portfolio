import React from "react";

const Contact = () => {
  return <div className="mt-20">
     <div className="border-b border-gray-900/10 pb-12">
          <h2 className="font-semibold text-2xl  text-blue-700 font-bold">Contact Me</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-5 md:col-span-4">
            <div className="col-span-3 sm:col-span-6 md:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-3 sm:col-span-6 md:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-3 sm:col-span-6 md:col-span-4">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Message 
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="text-[1.2rem] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write Your Message In Few Sentences. Will Try To reply soon.</p>
            </div>
            
        <button
          type="submit"
          className="col-span-3 sm:col-span-6 md:col-span-4 mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send Message
        </button>
          </div>
        </div>

  </div>;
};

export default Contact;
