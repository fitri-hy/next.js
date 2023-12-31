"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactSection() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
		  <div id="contact" class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
			  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
			  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
			  <div class="mx-auto max-w-2xl text-center">
				<h1 data-aos="fade-right" class="drop-shadow-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
				  Contact Me
			    </h1>
				<p data-aos="zoom-in" class="mt-2 text-lg leading-8 text-gray-600">Contact us immediately to reply to your email via the form below.</p>
			  </div>
			  <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
				<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				  <div data-aos="fade-right">
					<label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
					<div class="mt-2.5">
					  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="bg-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
					</div>
				  </div>
				  <div data-aos="fade-left">
					<label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
					<div class="mt-2.5">
					  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="bg-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
					</div>
				  </div>
				  <div data-aos="fade-up" class="sm:col-span-2">
					<label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
					<div class="mt-2.5">
					  <input type="text" name="company" id="company" autocomplete="organization" class="bg-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
					</div>
				  </div>
				  <div data-aos="fade-up" class="sm:col-span-2">
					<label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
					<div class="mt-2.5">
					  <input type="email" name="email" id="email" autocomplete="email" class="bg-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
					</div>
				  </div>
				  <div data-aos="fade-up" class="sm:col-span-2">
					<label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
					<div class="relative mt-2.5">
					  <div class="absolute inset-y-0 left-0 flex items-center">
						<label for="country" class="sr-only">Country</label>
						<select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
						  <option>ID</option>
						</select>
					  </div>
					  <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="bg-white block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
					</div>
				  </div>
				  <div data-aos="fade-up" class="sm:col-span-2">
					<label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
					<div class="mt-2.5">
					  <textarea name="message" id="message" rows="4" class="bg-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
					</div>
				  </div>
				  <div class="flex gap-x-4 sm:col-span-2">
					<div data-aos="fade-right" class="flex h-6 items-center">
					  <button type="button" class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
						<span class="sr-only">Agree to policies</span>
						<span aria-hidden="true" class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
					  </button>
					</div>
					<label data-aos="fade-left" class="text-sm leading-6 text-gray-600" id="switch-1-label">
					  By selecting this, you agree to our
					  <a href="#" class="font-semibold text-indigo-600"> Privacy&nbsp;Policy</a>.
					</label>
				  </div>
				</div>
				<div data-aos="zoom-in" class="mt-10">
				  <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
				</div>
			  </form>
			</div>
  )
}
