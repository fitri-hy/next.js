"use client"
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypingEffect from 'react-typing-effect';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
		  <div id="home" class="mx-auto h-auto px-4 py-32 lg:flex lg:h-screen lg:items-center">
			<div class="mx-auto max-w-3xl text-center">
			  <span data-aos="fade-left" class="sm:text-xl sm:block">Hello👋, My name is</span>
			  <div class="flex justify-center items-center mt-2 mb-2">
				<img data-aos="zoom-in" src="hero.gif" height="200" width="200"/>
			  </div>
			  <h1 data-aos="fade-right" class="drop-shadow-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
				Fitri Hy
			  </h1>
			  <span data-aos="zoom-in" class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
				I am a..
			  </span>
			  <h1 data-aos="fade-up" class="drop-shadow-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
				<TypingEffect
					text={["Web Developer", "App Developer", "Mobile Developer", "SEO Analytics"]}
				/>
			  </h1>
			  <div class="mt-8 flex flex-wrap justify-center gap-4">
				<a data-aos="fade-right" class="drop-shadow-md w-auto rounded bg-gradient-to-r from-indigo-400 to-blue-500 hover:from-blue-500 hover:to-indigo-500 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" target="_blank" href="https://wa.me/6281525977595">
				  <FontAwesomeIcon icon={faEnvelope} /> Contact Us
				</a>
				<Link smooth={true} to="about" scroll={false} data-aos="fade-left" class="drop-shadow-md w-auto rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-grey-800 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 focus:outline-none focus:ring active:bg-indigo-100 sm:w-auto">
					<FontAwesomeIcon icon={faArrowRight} /> Learn More
				</Link >
			  </div>
			</div>
		  </div>
  )
}
