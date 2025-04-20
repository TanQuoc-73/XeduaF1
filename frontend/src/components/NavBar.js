// components/NavBar.js
"use client";

import Link from "next/link";

export const NavBar = ({ onLoginClick }) => {
  return (
    <div className="flex justify-between items-center h-25 w-screen text-white bg-gradient-to-r from-red-950 to-red-800">
      <h1 className="text-2xl font-bold ml-8">
        <a href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-30 w-30 mb-2" />
        </a>
      </h1>

      <ul className="flex ml-6">
        <li className="mr-4 text-lg font-semibold hover:text-gray-300">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-4 text-lg font-semibold hover:text-gray-300">
          <Link href="/about">About</Link> {/* Sửa route */}
        </li>
        <li className="mr-4 text-lg font-semibold hover:text-gray-300">
          <Link href="/contact">Contact</Link> {/* Sửa route */}
        </li>
        <li className="mr-4 text-lg font-semibold hover:text-gray-300">
          <Link href="/sign">Sign</Link> {/* Sửa route */}
        </li>
      </ul>

      <ul className="flex mr-10">
        <button
          onClick={onLoginClick} // Thêm onClick để mở modal
          className="cursor-pointer bg-red-900 hover:scale-105 active:scale-95 p-2.5 rounded-lg"
        >
          Đăng nhập
        </button>
      </ul>
    </div>
  );
};