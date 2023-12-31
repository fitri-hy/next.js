"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CTASection() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
			<div class="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
			  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
			  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
			  <div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl lg:mx-0">
				  <h1 data-aos="fade-right" class="drop-shadow-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
					My Achievements
				  </h1>
				  <p data-aos="zoom-in" class="mt-6 text-lg leading-8 text-gray-600">The following are some of the best achievements of my life in the field of programming.</p>
				</div>
				<div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
				  <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
					<div data-aos="zoom-in" class="flex flex-col-reverse">
					  <dt class="text-base leading-7 text-gray-600">Client</dt>
					  <dd class="text-2xl font-bold leading-9 tracking-tight text-indigo-600">1216+</dd>
					</div>
					<div data-aos="zoom-in" class="flex flex-col-reverse">
					  <dt class="text-base leading-7 text-gray-600">Happy Customer</dt>
					  <dd class="text-2xl font-bold leading-9 tracking-tight text-indigo-600">1299+</dd>
					</div>
					<div data-aos="zoom-in" class="flex flex-col-reverse">
					  <dt class="text-base leading-7 text-gray-600">Project</dt>
					  <dd class="text-2xl font-bold leading-9 tracking-tight text-indigo-600">1547+</dd>
					</div>
					<div data-aos="zoom-in" class="flex flex-col-reverse">
					  <dt class="text-base leading-7 text-gray-600">Project in Progress</dt>
					  <dd class="text-2xl font-bold leading-9 tracking-tight text-indigo-600">6+</dd>
					</div>
				  </dl>
				</div>
			  </div>
			</div>
  )
}
