"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TestimonialSection() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
		  <div class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
			  <div class="mx-auto max-w-2xl lg:max-w-4xl">
				  <h1 data-aos="fade-right" class="drop-shadow-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
					Look What They're Talking About Me
				  </h1>
				<figure class="mt-10">
				  <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
					<p>“Fast work, satisfactory results, the appearance of the site is very attractive, modern and responsive. Good luck for the future.”</p>
				  </blockquote>
				  <figcaption class="mt-10">
					<img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
					<div class="mt-4 flex items-center justify-center space-x-3 text-base">
					  <div class="font-semibold text-gray-900">Sinta Seftiyanti</div>
					  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
						<circle cx="1" cy="1" r="1" />
					  </svg>
					  <div class="text-gray-600">Client</div>
					</div>
				  </figcaption>
				</figure>
			  </div>
			</div>
  )
}
