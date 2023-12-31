"use client"
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'

export default function BottomNavbar() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
	<div class="p-3 w-full lg:invisible 2xl:invisible xl:invisible fixed bottom-0 left-0 z-100">
		<div class="drop-shadow-md rounded-xl backdrop-blur-xl h-16 border-y border-indigo-400 dark:border-indigo-400">
			<div data-aos="fade-up" class="grid mt-3 max-w-lg grid-cols-4 mx-auto font-medium">
				<Link smooth={true} to="home" scroll={false} class="text-indigo-600 rounded-full inline-flex flex-col items-center justify-center px-5 dark:hover:bg-indigo-100 group">
					<FontAwesomeIcon size="lg" color="text-indigo-600" icon={faHome} />
					<span class="text-sm text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-500">Home</span>
				</Link>
				<Link smooth={true} to="about" scroll={false} class="text-indigo-600 rounded-full inline-flex flex-col items-center justify-center px-5 dark:hover:bg-indigo-100 group">
					<FontAwesomeIcon size="lg" icon={faInfo} />
					<span class="text-sm text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-500">About</span>
				</Link>
				<Link smooth={true} to="price" scroll={false} class="text-indigo-600 rounded-full inline-flex flex-col items-center justify-center px-5 dark:hover:bg-indigo-100 group">
					<FontAwesomeIcon size="lg" icon={faRocket} />
					<span class="text-sm text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-500">Service</span>
				</Link>
				<Link smooth={true} to="contact" scroll={false} class="text-indigo-600 rounded-full inline-flex flex-col items-center justify-center px-5 dark:hover:bg-indigo-100 group">
					<FontAwesomeIcon size="lg" icon={faIdCard} />
					<span class="text-sm text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-500">Contact</span>
				</Link>
			</div>
		</div>
	</div>
  )
}
