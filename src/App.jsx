import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import CalendarComponent from "./CalendarComponent";
import Filter from "./Filter";
import Footer from "./Footer";
import Carousel from './Carousel';

const images = [
  'https://www.samedayagratour.co.in/wp-content/uploads/2023/12/Things-To-Do-In-Andaman-And-Nicobar-Islands-1.jpg',
  'https://kittiaroundtheworld.com/wp-content/uploads/2021/09/Glenfinnan-Viaduct-4.jpg',
  'https://oc.kosha.co/journal/wp-content/uploads/2021/11/Experience-Leh-in-Winter.jpg',
  'https://kj1bcdn.b-cdn.net/media/84294/img_0008jpg.jpg',
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(""); // To manage modal state ("signup" or "login")

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const openModal = (type) => {
    setShowModal(type);
    setShowMenu(false); // Close the dropdown menu
  };

  const closeModal = () => {
    setShowModal("");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Current scroll position
      const seventyFivePercentHeight = (window.innerHeight * 1) / 2.6; // 75% of the viewport height
      setIsScrolled(scrollPosition > seventyFivePercentHeight); // Update state
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <>
      {/* Top Header */}
      <div className="block md:hidden sticky rounded-full top-0 left-[2.5vw] w-[100vw] bg-white z-20 mt-3">
  <input
    type="text"
    className="w-[95vw] p-4 rounded-full placeholder-italic text-center mt-2"
    placeholder="Search"
  />
</div>

      <header className="sticky hidden md:block top-0 bg-white z-20 transition-all duration-500 ease-in-out">
        <div className="flex justify-between pt-2 px-6 items-center">
          {/* Logo */}
          <div className="p-3 w-2/6">
            <h2 className="flex justify-center w-1/5 ml-8">
              <img src="./public/sticker.jpg" alt="" />
            </h2>
          </div>

          {/* Center Section (dynamic for scroll and screen size) */}
          <div className="w-2/6 flex justify-center items-center relative">
            {/* Links for larger screens */}
            <div
              className={`absolute transition-all duration-500 hidden md:block ${
                isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <h2 className="inline-block px-4">
                <p><a href="">Stays</a></p>
              </h2>
              <h2 className="inline-block px-4">
                <p><a href="">Experiences</a></p>
              </h2>
            </div>

            {/* Buttons for smaller screens */}
            <div
              className={`absolute transition-all duration-500 ease-in-out md:hidden ${
                isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-90"
              } flex justify-center space-x-4`}
            >
              <button className="px-4 py-2 border rounded-full hover:bg-gray-100">
                Anywhere
              </button>
              <button className="px-4 py-2 border rounded-full hover:bg-gray-100">
                Any week
              </button>
              <button className="px-4 py-2 border rounded-full hover:bg-gray-100">
                Any guest
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center w-2/6 p-3 relative">
            <h2>
              <p className="pr-4 pl-2">StayHomez</p>
            </h2>
            <p className="text-xl mt-1 pl-6 pr-6">
              <i className="fa-solid fa-globe"></i>
            </p>
            <div
              className="text-gray-500 ml-6 p-1 border rounded-lg border-gray-500 hover:border-gray-300 transition-all duration-300 cursor-pointer relative"
              onClick={toggleMenu}
            >
              <div className="flex justify-around w-full text-xl p-2">
                <p className="pl-1">
                  <i className="fa-solid fa-bars"></i>
                </p>
                <p className="pl-4">
                  <i className="fa-solid fa-user"></i>
                </p>
              </div>
            </div>

            {/* Dropdown Menu */}
            {showMenu && (
              <div className="absolute top-full z-100 mt-2 right-0 w-52 bg-white border rounded-lg shadow-lg">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => openModal("signup")}
                  >
                    Sign up
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => openModal("login")}
                  >
                    Log in
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    StayHomez your home
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Host an experience
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Help Centre
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      <nav className="block md:hidden fixed bottom-0 left-0 w-full bg-white border-t-2 shadow-lg z-50">
        <div className="flex justify-between w-[100vw] items-center py-2">
          <button className="flex flex-col items-center pr-8">
            <i className="fa-solid fa-home text-lg"></i>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center pr-8 pl-8">
            <i className="fa-solid fa-search text-lg"></i>
            <span className="text-xs">Search</span>
          </button>
          <button className="flex flex-col items-center pl-8">
            <i className="fa-solid fa-user text-lg"></i>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>

      {/* Carousel */}
      <div className="h-[40vh]">
        <Carousel images={images} />
      </div>

      {/* Content Section */}
      <div className="relative">
        {/* Shrinking CalendarComponent */}
        <div
        className={`transition-transform duration-1000 ease-in-out ${
          isScrolled
            ? "fixed top-16 left-0 w-full bg-white z-10 scale-75 opacity-0 pointer-events-none"
            : "scale-100 opacity-100"
        }`}
      >
        <CalendarComponent />
      </div>

      {/* Placeholder to reserve space */}
      <div className={`${isScrolled ? "h-0" : "h-[105px]"}`}></div>

      {/* Filter Component */}
      <div>
        <Filter />
      </div>

      </div>

      {/* Modal for Sign Up / Log In */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 w-1/3 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={closeModal}
            >
              &times;
            </button>
            {showModal === "signup" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border p-2 rounded mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded mb-4"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 rounded mb-4"
                  />
                  <button
                    type="submit"
                    className="w-full bg-red-100 py-2 rounded text-black border border-transparent hover:bg-red-500 hover:border-red-700 hover:text-white transition-all"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            )}
            {showModal === "login" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Log In</h2>
                <form>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded mb-4"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 rounded mb-4"
                  />
                  <button
                    type="submit"
                    className="w-full bg-red-100 py-2 rounded text-black border border-transparent hover:bg-red-500 hover:border-red-700 hover:text-white transition-all"
                  >
                    Log In
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
