"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Github, Linkedin, Mail, MapPin, Phone, User, Briefcase, Award } from "lucide-react";

const laptopTabs = ["Home", "Projects", "Contact", "About"];
const mobileTabs = ["Home", "Projects", "Contact"];

const laptopContent = {
  Home: (
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-3">
        <User className="w-7 h-7 text-blue-300" />
        <span className="text-3xl font-bold bg-gradient-to-r from-blue-200 via-purple-300 to-blue-400 bg-clip-text text-transparent">
          Ali Umair
        </span>
      </div>
      <div className="flex items-center gap-2 text-xl text-blue-200 font-medium">
        <Briefcase className="w-5 h-5 text-blue-300" />
        Flutter Developer & Mobile App Enthusiast
      </div>
      <div className="flex items-center gap-2 text-base text-gray-300">
        <Award className="w-5 h-5 text-yellow-300" />
        <span>
          3+ years experience building scalable mobile apps with Flutter, Firebase, and modern UI/UX.
        </span>
      </div>
      <div className="flex items-center gap-2 text-base text-gray-300">
        <MapPin className="w-5 h-5 text-red-300" />
        Lahore, Pakistan
      </div>
      <div className="flex gap-4 pt-2">
        <a href="https://github.com/Ali23089" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-gray-300 hover:text-blue-400 transition" />
        </a>
        <a href="https://www.linkedin.com/in/ali-umair-18a67b218/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-gray-300 hover:text-blue-400 transition" />
        </a>
        <a href="mailto:uali57362@gmail.com">
          <Mail className="w-6 h-6 text-gray-300 hover:text-blue-400 transition" />
        </a>
      </div>
    </div>
  ),
  Projects: (
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-2 text-2xl font-bold mb-2 text-white">
        <Briefcase className="w-6 h-6 text-blue-300" />
        Featured Projects
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
          <img src="https://img.icons8.com/color/48/000000/flutter.png" alt="Flutter"
            className="w-8 h-8 bg-gray-700 rounded shadow" />
          <div>
            <div className="font-semibold text-white">StyleMe</div>
            <div className="text-sm text-blue-200">
              Salon management app for Pakistan, built with Flutter, Firebase, and GeoLocator.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
          <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java"
            className="w-8 h-8 bg-gray-700 rounded shadow" />
          <div>
            <div className="font-semibold text-white">Car-Rental</div>
            <div className="text-sm text-blue-200">
              Car Rental Management System developed using Java and NetBeans IDE.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
          <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python"
            className="w-8 h-8 bg-gray-700 rounded shadow" />
          <div>
            <div className="font-semibold text-white">Game Hub</div>
            <div className="text-sm text-blue-200">
              Game launcher in Python with custom games using Pygame.
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  Contact: (
    <div className="p-6 space-y-3">
      <div className="flex items-center gap-2 text-2xl font-bold mb-2 text-white">
        <Mail className="w-6 h-6 text-blue-300" />
        Contact
      </div>
      <div className="flex items-center gap-2 text-gray-300">
        <Mail className="w-5 h-5 text-blue-300" />
        <span>
          <a href="mailto:uali57362@gmail.com" className="text-blue-300 underline">
            uali57362@gmail.com
          </a>
        </span>
      </div>
      <div className="flex items-center gap-2 text-gray-300">
        <Phone className="w-5 h-5 text-green-300" />
        <span className="text-blue-300">
          +92 317 4133465
        </span>
      </div>
      <div className="flex items-center gap-2 text-gray-300">
        <MapPin className="w-5 h-5 text-red-300" />
        <span className="text-blue-300">
          Lahore, Pakistan
        </span>
      </div>
      <div className="flex gap-4 mt-2">
        <a
          href="https://github.com/Ali23089"
          target="_blank"
          rel="noopener noreferrer"
          className="transition text-gray-300 hover:text-blue-400"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/ali-umair-18a67b218/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition text-gray-300 hover:text-blue-400"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  ),
  About: (
    <div className="p-6 space-y-3">
      <div className="flex items-center gap-2 text-2xl font-bold mb-2 text-white">
        <User className="w-6 h-6 text-blue-300" />
        About Me
      </div>
      <div className="flex items-center gap-2 text-gray-300">
        <Award className="w-5 h-5 text-yellow-300" />
        <span>
          Computer Science graduate specializing in Flutter app development, with a passion for scalable, user-centric mobile solutions and a strong foundation in UI/UX.
        </span>
      </div>
      <div className="flex items-center gap-2 text-gray-300">
        <Briefcase className="w-5 h-5 text-blue-300" />
        <span>
          Experienced in cross-platform development, REST APIs, and cloud integration.
        </span>
      </div>
    </div>
  ),
};

const mobileContent = {
  Home: (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2">
        <Smartphone className="w-6 h-6 text-blue-600" />
        <span className="text-xl font-bold text-blue-800">Ali Umair</span>
      </div>
      <div className="flex items-center gap-2 text-base text-blue-700">
        <Briefcase className="w-4 h-4 text-blue-700" />
        Flutter Developer
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-900">
        <Award className="w-4 h-4 text-yellow-500" />
        3+ years experience in mobile app development
      </div>
      <div className="flex gap-3 pt-2">
        <a href="https://github.com/Ali23089" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 text-gray-800 hover:text-blue-600 transition" />
        </a>
        <a href="https://www.linkedin.com/in/ali-umair-18a67b218/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-gray-800 hover:text-blue-600 transition" />
        </a>
        <a href="mailto:uali57362@gmail.com">
          <Mail className="w-5 h-5 text-gray-800 hover:text-blue-600 transition" />
        </a>
      </div>
    </div>
  ),
  Projects: (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 text-lg font-bold mb-1 text-gray-900">
        <Briefcase className="w-5 h-5 text-blue-600" />
        Projects
      </div>
      <div className="flex items-center gap-2 bg-blue-100 rounded-lg p-2">
        <img src="https://img.icons8.com/color/32/000000/flutter.png" alt="Flutter" className="w-6 h-6 bg-white rounded" />
        <div>
          <div className="font-semibold text-gray-900">StyleMe</div>
          <div className="text-xs text-blue-800">Salon management app</div>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-blue-100 rounded-lg p-2">
        <img src="https://img.icons8.com/color/32/000000/java-coffee-cup-logo.png" alt="Java" className="w-6 h-6 bg-white rounded" />
        <div>
          <div className="font-semibold text-gray-900">Car-Rental</div>
          <div className="text-xs text-blue-800">Java Management System</div>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-blue-100 rounded-lg p-2">
        <img src="https://img.icons8.com/color/32/000000/python.png" alt="Python" className="w-6 h-6 bg-white rounded" />
        <div>
          <div className="font-semibold text-gray-900">Game Hub</div>
          <div className="text-xs text-blue-800">Python Game Launcher</div>
        </div>
      </div>
    </div>
  ),
  Contact: (
    <div className="p-4 space-y-2">
      <div className="flex items-center gap-2 text-lg font-bold mb-1 text-gray-900">
        <Mail className="w-5 h-5 text-blue-600" />
        Contact
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-900">
        <Mail className="w-4 h-4 text-blue-500" />
        <a href="mailto:uali57362@gmail.com" className="text-blue-800 underline">
          uali57362@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-900">
        <Phone className="w-4 h-4 text-green-600" />
        <span className="text-blue-800">+92 317 4133465</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-900">
        <MapPin className="w-4 h-4 text-red-500" />
        Lahore, Pakistan
      </div>
      <div className="flex gap-3 mt-1">
        <a href="https://github.com/Ali23089" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 text-gray-800 hover:text-blue-600 transition" />
        </a>
        <a href="https://www.linkedin.com/in/ali-umair-18a67b218/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-gray-800 hover:text-blue-600 transition" />
        </a>
      </div>
    </div>
  ),
};

type LaptopTab = keyof typeof laptopContent;
type MobileTab = keyof typeof mobileContent;

export function DeviceShowcaseSection() {
  const [laptopTab, setLaptopTab] = useState<LaptopTab>("Home");
  const [mobileTab, setMobileTab] = useState<MobileTab>("Home");

  return (
    <motion.section
      id="showcase"
      className="py-20 bg-gradient-to-br from-slate-100 via-slate-200 to-indigo-200 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-gray-800">
            Showcase
          </h2>
          <p className="text-lg text-blue-600 dark:text-blue-200 max-w-3xl mx-auto">
            Explore my portfolio in both desktop and mobile views with
            interactive, animated device mockups.
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          {/* Laptop Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-xl"
          >
            <div className="relative rounded-2xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-blue-500/40">
              {/* Laptop Bezel */}
              <div className="bg-black rounded-t-xl p-2 flex items-center justify-between">
                <span className="text-blue-400 font-bold text-lg pl-4">Ali Umair</span>
                <Monitor className="h-6 w-6 text-blue-400 mr-4" />
              </div>
              {/* Laptop Nav */}
              <div className="flex space-x-4 px-6 py-2 bg-gradient-to-r from-blue-900 to-purple-900 rounded-t-lg">
                {laptopTabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setLaptopTab(tab as LaptopTab)}
                    className={`px-4 py-1 rounded-full font-semibold transition-all duration-300 text-sm ${laptopTab === tab ? 'bg-blue-400 text-black shadow-lg scale-105' : 'bg-blue-900 text-blue-200 hover:bg-blue-700 hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {/* Laptop Screen */}
              <motion.div
                key={laptopTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-b-xl h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400/60 scrollbar-track-transparent"
              >
                {laptopContent[laptopTab]}
              </motion.div>
            </div>
            {/* Laptop Shadow */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-72"
          >
            <div className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-white to-blue-100 border-4 border-blue-400/40">
              {/* Mobile Notch */}
              <div className="w-full flex justify-center items-center pt-2 pb-1">
                <div className="w-16 h-2 bg-gray-300 rounded-full" />
              </div>
              {/* Mobile Screen */}
              <motion.div
                key={mobileTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-b-3xl h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400/60 scrollbar-track-transparent"
              >
                {mobileContent[mobileTab]}
              </motion.div>
              {/* Mobile Nav */}
              <div className="flex justify-around items-center py-2 bg-gradient-to-r from-blue-100 to-blue-300 rounded-b-3xl border-t border-blue-200">
                {mobileTabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setMobileTab(tab as MobileTab)}
                    className={`flex flex-col items-center px-2 py-1 rounded-lg font-semibold transition-all duration-300 text-xs ${mobileTab === tab ? 'text-blue-700 scale-110' : 'text-blue-400 hover:text-blue-700'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            {/* Mobile Shadow */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 h-4 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}