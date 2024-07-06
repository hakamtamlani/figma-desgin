import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-red-700 text-white flex flex-col p-8 py-10 pb-3 min-h-auto">
      <div className="container mx-auto">
        <div className="flex items-center justify-start gap-4 mb-8">
          <img src="/Group.png" alt="Logo" className="h-12" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            LET'S CHAT
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 sm:px-24 md:px-12 lg:px-0">
          <ul className="text-left">
            <li className="text-2xl font-bold">Quick Links</li>
            <li className="mb-2">
              <a href="/"> Company </a>
            </li>
            <li className="mb-2">
              <a href="/"> Services</a>
            </li>
            <li className="mb-2">
              <a href="/"> Solutions</a>
            </li>
            <li className="mb-2">
              <a href="/"> Consulting</a>
            </li>
            <li className="mb-2">
              <a href="/"> Blogs</a>
            </li>
            <li className="mb-2">
              <a href="/"> Contact Us</a>
            </li>
          </ul>
          <ul className="text-left">
            <li className="text-2xl font-bold">
              <a href="/">Services</a>
            </li>
            <li className="mb-2">
              <a href="/"> Mobile app and Web Development </a>
            </li>
            <li className="mb-2">
              <a href="/"> UI/ UX Design </a>
            </li>
            <li className="mb-2">
              <a href="/"> Ecommerce Developement</a>
            </li>
            <li className="mb-2">
              <a href="/"> Game Developement</a>
            </li>
            <li className="mb-2">
              <a href="/"> Blockchain Developement</a>
            </li>
            <li className="mb-2">
              <a href="/"> Digital Marketing Developement</a>
            </li>
          </ul>
          <ul className="text-left">
            <li className="text-2xl font-bold">Contact Us</li>
            <li className="mb-2">
              <a href="/"> Terms of Service</a>
            </li>
            <li className="mb-2">
              <a href="/"> Privacy Policy </a>
            </li>
            <li className="mb-2">
              <a href="/"> Refund Policy</a>
            </li>
            <li className="mb-2">
              <a href="/"> Cookie Policy </a>
            </li>
          </ul>
          <ul className="text-left">
            <li className="text-2xl font-bold">Follow Us</li>
            <div className="flex gap-2">
              <li className="mb-2">
                <a href="/">
                  <FaFacebookSquare size={30} />
                </a>
              </li>
              <li className="mb-2">
                <a href="/">
                  <FaWhatsapp size={30} />
                </a>
              </li>
              <li className="mb-2">
                <a href="/">
                  <IoLogoLinkedin size={30} />
                </a>
              </li>
              <li className="mb-2">
                <a href="/">
                  <FaSquareInstagram size={30} />
                </a>
              </li>
            </div>
          </ul>
        </div>
        <hr className="border-white my-2" />
        <div className="flex justify-center items-center gap-4 text-center">
          Copyright @ 2024 || All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
