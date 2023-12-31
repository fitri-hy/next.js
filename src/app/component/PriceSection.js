"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PriceSection() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
		  <div id="price" class="py-24 sm:py-32">
			  <div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl sm:text-center">
				  <h2 data-aos="fade-up" class="text-base font-semibold leading-7 text-indigo-600">How does it cost?</h2>
				  <h1 data-aos="fade-right" class="drop-shadow-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
					See My Offer Price
				  </h1>
				  <p data-aos="zoom-in" class="mt-6 text-lg leading-8 text-gray-600">The following is the minimum price I offer you for developer services, see below for details and what you will get.</p>
				</div>
				<div class="bg-white drop-shadow-lg mx-auto mt-16 max-w-2xl rounded-3xl ring-2 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
				  <div class="p-8 sm:p-10 lg:flex-auto">
					<h3 data-aos="fade-up" class="text-2xl font-bold tracking-tight text-gray-900">Lifetime Membership</h3>
					<p data-aos="zoom-in" class="mt-6 text-base leading-7 text-gray-600">Below are details of the services you will get if you subscribe to me.</p>
					<div class="mt-10 flex items-center gap-x-4">
					  <h4 data-aos="fade-up" class="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
					  <div class="h-px flex-auto bg-gray-100"></div>
					</div>
					<ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
					  <li data-aos="fade-left" class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Lifetime Maintenance
					  </li>
					  <li data-aos="fade-left" class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						Free Consultation
					  </li>
					  <li data-aos="fade-left" class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						12/7 Support
					  </li>
					  <li data-aos="fade-up" class="flex gap-x-3">
						<svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
						</svg>
						More Affordable Prices
					  </li>
					</ul>
				  </div>
				  <div class="drop-shadow-md -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
					<div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
					  <div class="mx-auto max-w-xs px-8">
						<p data-aos="fade-up" class="text-base font-semibold text-gray-600">Pay once, own forever<br/>Starting from</p>
						<p data-aos="fade-up"class="mt-6 flex items-baseline justify-center gap-x-2">
						  <span class="text-5xl font-bold tracking-tight text-gray-900">850k</span>
						  <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">IDR</span>
						</p>
						<a data-aos="fade-up" target="_blank" href="https://wa.me/6281525977595" class="drop-shadow-md mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Get it Now
						</a>
						<p data-aos="fade-up" class="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
  )
}
