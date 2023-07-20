"use client";
import React, { useState } from 'react'

const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    tel: '',
    message: '',
  })
  

  const changeHandler = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value });
  

  }
  const submitHandler = async (e) => {
    e.preventDefault();


  }
  return (
    <div>
      <h1 className='text-4xl text-center my-10 text-red-700'>Contact</h1>
      <div>
        <div className='mx-4 md:w-1/2 lg:1/3 md:mx-auto'>

          <form className='' onSubmit={submitHandler}>
            <div className="mb-6">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your name  </label>
                <input type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" value={user.name} onChange={changeHandler} required />
              </div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="name@flowbite.com" value={user.email} onChange={changeHandler} required />
            </div>
            <div className="mb-6">
              <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone number</label>
              <input type="tel" name='tel' id="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder='999-012-7407' value={user.tel} onChange={changeHandler} size="10" maxLength={10} required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
              <textarea type="text" name='message' id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" value={user.message} onChange={changeHandler} required />
            </div>

            <button type="submit" className="text-white bg-red-700 mb-12 hover:bg-red-800   font-xl rounded-lg text-sm w-full sm:w-auto px-9 py-2.5 text-center" >Submit</button>
          </form>

        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224611.86194648416!2d77.15425914068847!3d28.402344350850953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe4f50576c850e0f2!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1689401036124!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact
