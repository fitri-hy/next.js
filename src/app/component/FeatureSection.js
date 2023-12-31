"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FeatureSection() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
		  <div id="about" class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
			  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
			  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
			  <div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl lg:text-center">
				  <h2 data-aos="fade-up" class="text-base font-semibold leading-7 text-indigo-600">About Me</h2>
				  <h1 data-aos="fade-right" class="drop-shadow-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
					Fitri Herma Yanti
				  </h1>
				  <p data-aos="fade-up" class="mt-6 text-lg leading-8 text-gray-600">I like programming, I am 20 years old, my current status is as a 5th semester student at one of the well-known universities in Jakarta. Here are some of my skills in programming.</p>
				</div>
				<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
				  <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
					<div data-aos="fade-right" class="relative pl-16">
					  <dt class="text-base font-semibold leading-7 text-gray-900">
						<div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
						  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
						  </svg>
						</div>
						Web Developer
					  </dt>
					  <dd class="mt-2 text-base leading-7 text-gray-600">I have expertise in the field of web development which can be said to be very adequate. The web programming languages ​​that I master include HTML, CSS, JavaScript, PHP, Laravel, React JS, Next JS, Bootstrap, Tailwind, and several others.</dd>
					</div>
					<div data-aos="fade-left" class="relative pl-16">
					  <dt class="text-base font-semibold leading-7 text-gray-900">
						<div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
						  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
						  </svg>
						</div>
						Android App Developer
					  </dt>
					  <dd class="mt-2 text-base leading-7 text-gray-600">I also master several languages ​​in the mobile developer field. The mobile developer programming languages ​​that I master include Kotlin, Flutter, Java and XML.</dd>
					</div>
					<div data-aos="fade-right" class="relative pl-16">
					  <dt class="text-base font-semibold leading-7 text-gray-900">
						<div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
						  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
						  </svg>
						</div>
						SEO Analytics
					  </dt>
					  <dd class="mt-2 text-base leading-7 text-gray-600">Talking about SEO Analytics, I can also be said to be very experienced so I understand the SEO algorithm on the Google search engine.</dd>
					</div>
					<div data-aos="fade-left" class="relative pl-16">
					  <dt class="text-base font-semibold leading-7 text-gray-900">
						<div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
						  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
						  </svg>
						</div>
						Digital Marketing
					  </dt>
					  <dd class="mt-2 text-base leading-7 text-gray-600">Do you want to promote your business or company? I can also help with that, because I also have experience in Google Ads</dd>
					</div>
				  </dl>
				</div>
			  </div>
			</div>
  )
}
