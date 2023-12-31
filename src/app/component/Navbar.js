"use client"
import { useEffect } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
		<nav class="invisible lg:visible 2xl:visible xl:visible backdrop-blur-xl fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
		  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
			  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
				  <img src="logo.png" class="h-8" alt="Flowbite Logo"/>
				  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FitriHY</span>
			  </a>
		  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
			  <a target="_blank" href="https://wa.me/6281525977595" class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
			  <FontAwesomeIcon icon={faPhone} /> Get started
			  </a>
		  </div>
		  <div class="items-center justify-between hidden w-full md:flex md:w-auto">
			<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
			  <li>
				<Link smooth={true} to="home" scroll={false} class="font-bold block py-2 px-3 text-indigo-600 hover:text-indigo-800 rounded dark:text-indigo-600 dark:hover:bg-gray-700 dark:hover:text-indigo-800 dark:border-gray-700">
				HOME
				</Link>
			  </li>
			  <li>
				<Link smooth={true} to="about" scroll={false} class="font-bold block py-2 px-3 text-indigo-600 hover:text-indigo-800 rounded dark:text-indigo-600 dark:hover:bg-gray-700 dark:hover:text-indigo-800 dark:border-gray-700">
				About
				</Link>
			  </li>
			  <li>
				<Link smooth={true} to="price" scroll={false} class="font-bold block py-2 px-3 text-indigo-600 hover:text-indigo-800 rounded dark:text-indigo-600 dark:hover:bg-gray-700 dark:hover:text-indigo-800 dark:border-gray-700">
				Service
				</Link>
			  </li>
			  <li>
				<Link smooth={true} to="contact" scroll={false} class="font-bold block py-2 px-3 text-indigo-600 hover:text-indigo-800 rounded dark:text-indigo-600 dark:hover:bg-gray-700 dark:hover:text-indigo-800 dark:border-gray-700">
				Contact
				</Link>
			  </li>
			</ul>
		  </div>
		  </div>
		</nav>
  )
}
