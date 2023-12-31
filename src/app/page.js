"use client"
import { useEffect } from 'react';
import Image from 'next/image'
import { Link } from 'react-scroll';
import Navbar from './component/Navbar'
import BottomNavbar from './component/BottomNavbar'
import HeroSection from './component/HeroSection'
import FeatureSection from './component/FeatureSection'
import PriceSection from './component/PriceSection'
import CTASection from './component/CTASection'
import TestimonialSection from './component/TestimonialSection'
import ContactSection from './component/ContactSection'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
    <main className="scroll-smooth bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-white via-indigo-100 to-white h-full items-center justify-between">
		<div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
			<div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
			<div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
		</div>
		<Navbar />
		<section class="backdrop-blur-xl bg-white/30 text-gray-600">
		  <HeroSection />
		  <FeatureSection />
		  <PriceSection />
		  <CTASection />
		  <TestimonialSection />
		  <ContactSection />
		</section>
		<BottomNavbar />
    </main>
  )
}
